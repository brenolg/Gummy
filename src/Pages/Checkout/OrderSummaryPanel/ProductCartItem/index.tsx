import React from "react";
import { ImageContainer, Info, QuantityBadge, Title, Wrapper, Price , SubTitle } from "./styles";
import { QuantitySelector } from "./QuantitySelector";
import { useCoreData } from "@/context/coreDataContext";


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
  const { formStep } = useCoreData();
  const showInput = formStep !== "qrcode" && formStep !== "success";

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
        {showInput && <QuantitySelector productId={id} />}
      </div>
    </Wrapper>
  );
};

