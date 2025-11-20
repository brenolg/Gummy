import styled from "styled-components";

export const Box = styled.div`
  width: 100%;
  background: #fbf9fb;
  padding: 16px 20px;
  border-radius: 12px;
`;

export const Row = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  padding: 6px 0;
`;

export const Label = styled.span`
  color: #222;
  font-size: 16px;
`;

export const Value = styled.span`
  color: #222;
  font-size: 16px;
`;

export const DiscountValue = styled.span`
  color: #6e6e6e;
  font-size: 16px;
  small { margin-left: 6px; }
`;

export const Hint = styled.span`
  color: #9e9e9e;
  font-size: 16px;
`;

export const Spacer = styled.div`
  height: 14px;
`;

export const TotalRow = styled(Row)`
  padding-top: 10px;
`;

export const TotalLabel = styled.div`
  font-weight: 700;
  font-size: 20px;
  color: #111;
`;

export const TotalValue = styled.div`
  font-weight: 800;
  font-size: 22px;
  color: #111;
`;
