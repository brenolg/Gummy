import styled from "styled-components";

export const Box = styled.div`
  width: 100%;
  background: #fbf9fb;


`;

export const Row = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;

`;

export const Label = styled.span`
  color: #000;
  font-family: Poppins;
  font-family: "Nunito Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px; /* 150% */
  margin-bottom: 7px;
`;

export const DiscountValue = styled.span`
color: rgba(0, 0, 0, 0.56);
text-align: right;
font-family: Poppins;
  font-family: "Nunito Sans";
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 21px; /* 150% */
`;

export const TotalRow = styled(Row)`
  padding-top: 10px;
`;

export const TotalLabel = styled.div`
color: #000;
font-family: Poppins;
  font-family: "Nunito Sans";
font-size: 19px;
font-style: normal;
font-weight: 700;
line-height: 28.5px; /* 150% */
`;

export const TotalValue = styled.div`
color: #000;
font-family: Poppins;
  font-family: "Nunito Sans";
font-size: 19px;
font-style: normal;
font-weight: 700;
line-height: 28.5px; /* 150% */
`;
