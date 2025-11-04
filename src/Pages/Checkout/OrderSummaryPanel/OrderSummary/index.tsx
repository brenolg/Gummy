import React, { useMemo } from "react";
import styled from "styled-components";
import { useCoreData } from "@/context/coreDataContext";

type Props = {
  /** Valor do frete; se null/undefined, mostra a dica para digitar o CEP */
  shipping?: number | null;
  /** Como combinar vários cupons: "sum" (soma %) ou "sequential" (aplica em cascata) */
  couponMode?: "sum" | "sequential";
};

export default function OrderSummary({ shipping = null, couponMode = "sum" }: Props) {
  const { cart, coupons } = useCoreData();

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
    const total = +(totalBeforeShipping + (shipping ?? 0)).toFixed(2);

    return {
      itemsCount,
      subtotal: +subtotal.toFixed(2),
      couponsPct: +couponsPct.toFixed(2),
      couponsAmount,
      totalBeforeShipping: +totalBeforeShipping.toFixed(2),
      total,
    };
  }, [cart, coupons, couponMode, shipping]);

  const fmtBRL = (n: number) =>
    n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

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
          <Value>{fmtBRL(shipping)}</Value>
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

/* ============== styles ============== */

const Box = styled.div`
  width: 100%;
  background: #fbf9fb;
  padding: 16px 20px;
  border-radius: 12px;
`;

const Row = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  padding: 6px 0;
`;

const Label = styled.span`
  color: #222;
  font-size: 16px;
`;

const Value = styled.span`
  color: #222;
  font-size: 16px;
`;

const DiscountValue = styled.span`
  color: #6e6e6e;
  font-size: 16px;
  small { margin-left: 6px; }
`;

const Hint = styled.span`
  color: #9e9e9e;
  font-size: 16px;
`;

const Spacer = styled.div`
  height: 14px;
`;

const TotalRow = styled(Row)`
  padding-top: 10px;
`;

const TotalLabel = styled.div`
  font-weight: 700;
  font-size: 20px;
  color: #111;
`;

const TotalValue = styled.div`
  font-weight: 800;
  font-size: 22px;
  color: #111;
`;
