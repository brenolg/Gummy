import React from "react";
import { ImageContainer, Info, QuantityBadge, Title, Wrapper, Price , SubTitle } from "./styles";


interface ProductCartItemProps {
  image: string;
  title: string;
  subtitle: string;
  quantity: number;
  unitPrice: number;
}

export const ProductCartItem: React.FC<ProductCartItemProps> = ({
  image,
  title,
  subtitle,
  quantity,
  unitPrice
}) => {
  const total = quantity * unitPrice;

  return (
    <Wrapper>
      <ImageContainer $img={image}>
        <QuantityBadge>{quantity}</QuantityBadge>
      </ImageContainer>
      <Info>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </Info>

      <Price>{total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</Price>
    </Wrapper>
  );
};

