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
  position: relative;
  background: url(${({ $img }) => $img}) #EBD7F5 3.589px 10px / 88.783% 71.538% no-repeat;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const QuantityBadge = styled.div`
  position: absolute;
  top: -7px;
  right: -7px;
  display: flex;
  width: 24px;
  height: 24px;
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
  z-index: 1;
`;

export const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-left: 14px;
`;

export const Title = styled.p`
overflow: hidden;
color: #000;
text-overflow: ellipsis;
font-family: "Nunito Sans";
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 21px; /* 150% */
`;

export const SubTitle = styled.p`
color: rgba(0, 0, 0, 0.56);
font-family: "Nunito Sans";
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 18px; /* 150% */
`;

export const Price = styled.p`
color: #000;
font-family: "Nunito Sans";
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 21px; /* 150% */
text-align: end;
`;
