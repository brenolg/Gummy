import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 24px;
`;

export const Option = styled.button<{ $active: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  border-radius: 12px;
  border: 2px solid ${({ $active }) => ($active ? "#6720DF" : "#e5e5e5")};

  background: ${({ $active }) =>
    $active ? "rgba(103, 32, 223, 0.1)" : "#fff"};

  color: ${({ $active }) => ($active ? "#6720DF" : "#555")};
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    border-color: ${({ $active }) => ($active ? "#6720DF" : "#c6c6c6")};
  }

  svg {
    stroke-width: 2.5;
  }
`;
