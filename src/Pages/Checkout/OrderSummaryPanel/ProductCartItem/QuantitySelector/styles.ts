import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Button = styled.button`
  display: flex;
  transform: rotate(-0.348deg);
  padding: 4px 2px;
  height: 22px;
  justify-content: center;
  align-items: center;
  border: 0.5px solid ${({ theme }) => theme.colors.neutral.grey400};
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
color: var(--Roxo-900, #2C1830);
text-align: center;
font-family: Inter;
font-size: 12px;
height: 22px;
width: 24px;
font-style: normal;
font-weight: 700;
line-height: 16px; /* 133.333% */
padding: 2px 4px;
border: 0.5px solid var(--Grey-400, #A3A3A3);
  margin-left: -0.5px;
`;
