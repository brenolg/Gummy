import React from "react";
import { ImageContainer, Info, QuantityBadge, Title, Wrapper, Price , SubTitle } from "./styles";
import { QuantitySelector } from "./QuantitySelector";


interface ProductCartItemProps {
  image: string;
  title: string;
  subtitle: string;
  quantity: number;
  unitPrice: number;
  id: number
}

export const ProductCartItem: React.FC<ProductCartItemProps> = ({
  image,
  title,
  subtitle,
  quantity,
  unitPrice,
  id
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
      
      <div>
        <Price>{total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</Price>
        <QuantitySelector productId={id} />
      </div>
    </Wrapper>
  );
};

