import { useEffect, useMemo, useState } from "react";
import { useCoreData } from "@/context/coreDataContext";
import { useFetch } from "@/hooks/useFetch";
import { handleNumberOfBoxes, handleProductWeight } from "./helper";
import { fmtBRL } from "@/utils/helper";
import { Box, DiscountValue, Hint, Label, Row, Spacer, TotalLabel, TotalRow, TotalValue, Value } from "./styles";

export interface ShippingResponse {
  frete: {
    prazo: number;
    valor: number;
  };
  endereco: {
    rua: string;
    bairro: string;
    cidade: string;
    estado: string;
  };
}

type Props = {
  /** Valor do frete; se null/undefined, mostra a dica para digitar o CEP */
  /** Como combinar vários cupons: "sum" (soma %) ou "sequential" (aplica em cascata) */
  couponMode?: "sum" | "sequential";
};

export default function OrderSummary({  couponMode = "sum" }: Props) {
  const { cart, coupons, formPostalCode } = useCoreData();
  const { fetcher } = useFetch();
  const [shipping, setShipping] = useState<ShippingResponse["frete"] | null>(null);

  const {
    itemsCount,
    subtotal,
    couponsPct,
    couponsAmount,
    total,
  } = useMemo(() => {
    const itemsCount = cart.reduce((acc, i) => acc + (i.quantity || 0), 0);
    const subtotal = cart.reduce((acc, i) => acc + (i.unitPrice * (i.quantity || 0)), 0);

    // % total de desconto via cupons
    let couponsPct = 0;

    if (couponMode === "sum") {
      couponsPct = Math.min(
        100,
        coupons.reduce((acc, c) => acc + (c.discount || 0), 0)
      );
    } else {
      // aplica em cascata (mais realista em e-commerce)
      // guardamos pct "equivalente" apenas pra exibir
      let running = subtotal;
      coupons.forEach(c => {
        running -= running * (c.discount / 100);
      });
      couponsPct = subtotal > 0 ? (1 - running / subtotal) * 100 : 0;
    }

    // valor absoluto de desconto
    const couponsAmount = +(subtotal * (couponsPct / 100)).toFixed(2);
    const totalBeforeShipping = Math.max(0, subtotal - couponsAmount);
    const total = +(totalBeforeShipping + (shipping?.valor ?? 0)).toFixed(2);

    return {
      itemsCount,
      subtotal: +subtotal.toFixed(2),
      couponsPct: +couponsPct.toFixed(2),
      couponsAmount,
      totalBeforeShipping: +totalBeforeShipping.toFixed(2),
      total,
    };
  }, [cart, coupons, couponMode, shipping]);

  async function calcularFrete() {
      try {
        const BOX_DATA = {
          peso: 0.5,
          altura: 40,
          largura: 3,
          profundidade: 20
        }

        const numberOfBoxes =  handleNumberOfBoxes(cart)
        const pesoProdutos = handleProductWeight(cart)
        
        const pesoCaixas = BOX_DATA.peso * numberOfBoxes;

        const body= {
          cep: formPostalCode,
          subtotal: subtotal,
          peso: pesoCaixas + pesoProdutos,
          altura:  BOX_DATA.altura * numberOfBoxes,
          largura: BOX_DATA.largura * numberOfBoxes,
          profundidade: BOX_DATA.profundidade * numberOfBoxes,
        };
        console.log(body)

        const resp = await fetcher<ShippingResponse>(
          "public/calculate-shipping",
          "POST",
          { body }
        );
        console.log(resp)

        if (!resp || !resp.frete) {
          console.warn("Resposta inesperada do servidor:", resp);
          setShipping(null);
          return;
        }

        setShipping(resp.frete);
    } catch (error) {
        console.error("Erro ao calcular frete:", error);
        setShipping(null);
    }
  }

  useEffect(() => {
    if (formPostalCode.length) {
      calcularFrete()
    }
  }, [ formPostalCode, cart ]);

  return (
    <Box>
      <Row>
        <Label>Subtotal · {itemsCount} {itemsCount === 1 ? "item" : "itens"}</Label>
        <Value>{fmtBRL(subtotal)}</Value>
      </Row>

      {coupons.length > 0 ? (
        <Row>
          <Label>Cupom de desconto aplicado</Label>
          <DiscountValue>
            -{fmtBRL(couponsAmount)} <small>({Math.round(couponsPct)}%)</small>
          </DiscountValue>
        </Row>
      ) : null}

      <Row>
        <Label>Frete</Label>
        {shipping == null ? (
          <Hint>Digite o CEP para calcular</Hint>
        ) : (
          <Value>{shipping.valor}</Value>
        )}
      </Row>

      <Spacer />

      <TotalRow>
        <TotalLabel>Total</TotalLabel>
        <TotalValue>{fmtBRL(total)}</TotalValue>
      </TotalRow>
    </Box>
  );
}


