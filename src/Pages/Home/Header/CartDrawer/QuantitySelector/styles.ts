import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

`;

export const Button = styled.button`
  display: flex;
  transform: rotate(-0.348deg);
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  border: 0.5px solid var(--Grey-400, #A3A3A3);
  img {
    width: 16px;
    height: 16px;
    aspect-ratio: 1/1;
  }
`;

export const MinusButton = styled(Button)`
  border-radius: 8px 0 0 8px;
`;

export const PlusButton = styled(Button)`
  border-radius: 0 8px 8px 0;
  margin-left: -1px;
`;

export const Value = styled.div`
  display: flex;
  height: 100%;
  transform: rotate(-0.348deg);
  padding: 8px 16px;
  width: 55px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: 0.5px solid var(--Grey-400, #A3A3A3);
  color: var(--Roxo-900, #2C1830);
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px; /* 100% */
  margin-left: -1px;
`;
