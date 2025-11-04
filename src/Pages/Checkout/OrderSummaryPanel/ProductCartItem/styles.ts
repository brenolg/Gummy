import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
`;

export const ImageContainer = styled.div<{ $img: string }>`
  border-radius: 12px;
  border: 2px solid #FFF;
  border-radius: 12px;
  height: 64px;
  width: 64px;
  border: 2px solid #FFF;
  background: url(${({ $img }) => $img}) lightgray;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
`;

export const QuantityBadge = styled.div`
  position: absolute;
  top: -7px;
  right: -7px;
  display: flex;
  min-width: 24px;
  min-height: 24px;
  padding: 3px 9.75px 3px 9.73px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 2px solid #FFF;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), #000;
  color: #FFF;
  font-family: Nunito;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
`;

export const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.p`
  font-size: 15px;
  font-weight: 600;
  margin: 0;
`;

export const SubTitle = styled.p`
  font-size: 13px;
  color: #6b6b6b;
  margin: 2px 0 0;
`;

export const Price = styled.p`
  font-size: 15px;
  font-weight: 600;
  color: #000;
`;
