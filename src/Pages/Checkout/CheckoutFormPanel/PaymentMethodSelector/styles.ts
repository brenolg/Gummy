import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 24px;
`;

export const Option =  styled.button.attrs({ type: 'button' })<{ $active: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  border-radius: 12px;
  border: 2px solid ${({ $active }) => ($active ? " ": "#e5e5e5")};
  width: fit-content;
  background: ${({ $active }) =>
    $active ? "#F2EDFA" : "#fff"};

  color: ${({ $active }) => ($active ? "#502665" : "#757575")};
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s;


  svg {
    stroke-width: 2.5;
  }
`;
