import styled from "styled-components";
import { useCoreData } from "@/context/coreDataContext";
import { MainButton } from "@/components";

export type CartItem = {
  productId: string;
  image: string;
  title: string;
  subtitle: string;
  quantity: number;
  unitPrice: number;
  peso: number;
  altura: number;
  largura: number;
  profundidade: number;
};

// helper: upsert
function upsertCart(
  items: CartItem[],
  product: Omit<CartItem, "quantity">,
  deltaQty: number
): CartItem[] {
  const idx = items.findIndex(it => it.productId === product.productId);
  if (idx === -1) return [...items, { ...product, quantity: Math.max(0, deltaQty) }];
  const next = [...items];
  const q = Math.max(0, next[idx].quantity + deltaQty);
  if (q === 0) next.splice(idx, 1);
  else next[idx] = { ...next[idx], quantity: q };
  return next;
}

const CATALOG: Record<string, Omit<CartItem, "quantity">> = {
  "powergum-1": {
    productId: "powergum-1",
    image: "/src/assets/imgs/oneGummy.svg",
    title: "1 Power Gummy® - 30 gomas",
    subtitle: "Frutas vermelhas - 1 frasco",
    unitPrice: 100,
    peso: 1, altura: 20, largura: 2, profundidade: 3,
  },
  "powergum-kit-3": {
    productId: "powergum-kit-3",
    image: "/src/assets/imgs/trioGummy.svg",
    title: "Trio Power Gummy® - 90 gomas",
    subtitle: "Frutas vermelhas - 3 frascos",
    unitPrice: 300,
    peso: 3, altura: 20, largura: 2, profundidade: 3,
  },
};


const Section = styled.section`
  display: flex;
  padding: 80px 150px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px 8px 32px 32px;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.roxo800} 0%,
    ${({ theme }) => theme.colors.roxo700} 100%
  );
  text-align: center;
  .section-title {
    color: ${({ theme }) => theme.colors.roxo0};
    text-align: center;
    font-family: "Nunito Sans";
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%; 
    margin-bottom: 16px
  }
  .section-subtitle {
    color: ${({ theme }) => theme.colors.roxo0};
    text-align: center;
    font-family: "Nunito Sans";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; 
    margin-bottom: 64px;
  }
`;
const Grid = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
`;
const Card = styled.div`
  display: flex;
  padding: 48px 40px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.80);
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  width: 550px;
  .cardTitle {
    color: ${({ theme }) => theme.colors.roxo700};
    text-align: center;
    font-family: "Nunito Sans";
    font-size: 32px;
    font-style: normal;
    font-weight: 800;
    line-height: 150%; /* 48px */
  }
  .cardSubtitle {
    color: ${({ theme }) => theme.colors.roxo700};
    font-family: "Nunito Sans";
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: 150%;
    margin-bottom: 16px;
  }
  .description {
    color: ${({ theme }) => theme.colors.neutral.grey700};
    text-align: center;
    font-family: "Nunito Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; 
    white-space: pre-line;
  }
  .productImage {
    height: 225px;
  }
  .eBookPlus {
    color: ${({ theme }) => theme.colors.neutral.grey400};
    font-family: "Nunito Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
  }
  .mb51 {
    margin-bottom: 51.5px;
  }
  .mb24 {
    margin-bottom: 24px;
  }
`;


const Price = styled.div`
  margin-bottom: 24px;
  .priceNumber {
    color: ${({ theme }) => theme.colors.roxo700};
    text-align: center;
    font-family: "Nunito Sans";
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 42px; /* 105% */
    margin-bottom: 16px;
  }
  .payMethod {
    color: ${({ theme }) => theme.colors.neutral.grey700};
    text-align: center;
    font-family: "Nunito Sans";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px; /* 100% */
  }
  .dashed {
    color: ${({ theme }) => theme.colors.neutral.grey600};
    text-align: center;
    font-family: "Nunito Sans";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 42px; /* 210% */
    text-decoration-line: line-through;
  }
`;
;

export default function Plans() {
  const {  setCart } = useCoreData(); 

  const addToCart = (productId: keyof typeof CATALOG, qty = 1) => {
    const prod = CATALOG[productId];
    if (!prod) return;
    setCart((prev: CartItem[]) => upsertCart(prev || [], prod, qty));
  };

  return (
    <Section id='buy'>
      <h2 className="section-title">Condições especiais de lançamento</h2>
      <h3 className="section-subtitle">Escolha a opção Ideal para sua Rotina de tratamento de Beleza e Economize!</h3>
      <Grid>
        <Card>
          <h3 className="cardTitle">1 Power Gummy</h3>
          <h2 className="cardSubtitle">Frutas vermelhas</h2>
          <p className="description mb51">
            {"30 gominhas - 1 mês\nde tratamento de Beleza"}
          </p>
          <img src={CATALOG["powergum-1"].image} alt={CATALOG["powergum-1"].title}  className="productImage mb51"/>
          <Price>
            <p className="priceNumber">R$ {CATALOG["powergum-1"].unitPrice.toFixed(2)}</p>
            <p className="payMethod">ou 3 x de R$ 36,63 (sem juros)</p>
          </Price>
          <MainButton onClick={() => addToCart("powergum-1")}>Comprar</MainButton>
        </Card>

        <Card>
          <h3 className="cardTitle">1 Power Gummy</h3>
          <h2 className="cardSubtitle">Frutas vermelhas</h2>
          <p className="description mb24">
            {"90 gominhas - 3 meses\nde tratamento de Beleza\n"}
            <span className="eBookPlus">+ e-book Power Gummy</span>
          </p>
          <img src={CATALOG["powergum-kit-3"].image} alt={CATALOG["powergum-kit-3"].title}  className="productImage mb24"/>
          <Price>
            <p className="dashed">R$ 327,00</p>
            <p className="priceNumber">R$ {CATALOG["powergum-kit-3"].unitPrice.toFixed(2)}</p>
            <p className="payMethod">ou 3 x de R$ 89,67 (sem juros)</p>
          </Price>
          
          <MainButton onClick={() => addToCart("powergum-kit-3")}>Comprar</MainButton>
        </Card>

      </Grid>
    </Section>
  );
}
