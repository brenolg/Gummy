import styled from "styled-components";

export const CardsWrapper = styled.div<{ $isDragging: boolean }>`
  display: flex;
  gap: 24px;
  padding: 40px 0 104px;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  align-self: stretch;
  overflow-x: hidden;
  overflow-y: visible;
  cursor: ${({ $isDragging }) => ($isDragging ? "grabbing" : "grab")};
  user-select: none;
`;

export const Card = styled.div<{ $isFirst?: boolean; $isLast?: boolean }>`
  margin-left: ${({ $isFirst }) => ($isFirst ? "120px" : "0")};
  margin-right: ${({ $isLast }) => ($isLast ? "120px" : "0")};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 370px;
  height: 300px;
  padding: 40px;
  border-radius: 16px;
  background: var(--Roxo-0, #FDFBFE);
  box-shadow: 0 10px 60px 0 rgba(0, 0, 0, 0.06);
  flex: 0 0 370px;
  .line {
    width: 100%;
    height: 1px;
    background: linear-gradient(
      90deg,
      #BA7E1B 0%,
      var(--roxo-700, #502665) 100%
    );
    margin-bottom: 12px;
  }
`;
