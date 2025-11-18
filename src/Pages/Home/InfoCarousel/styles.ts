// styles.ts
import styled, { keyframes } from "styled-components";

const loopRight = keyframes`
  0%   { transform: translateX(-50%); }
  100% { transform: translateX(0); }
`;

export const Bar = styled.div`
  width: 100%;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.roxo0};
  padding: 24px 0;
  position: relative;
`;

export const Scroller = styled.div`
  display: flex;
  width: max-content;      
  will-change: transform;
  animation: ${loopRight} 28s linear infinite;
  gap: 0;                  
`;

export const Content = styled.div`
  display: flex;
  white-space: nowrap;
  min-width: max-content;
  flex-shrink: 0;        
`;

export const Item = styled.div`
  display: inline-flex;
  align-items: center;
  margin-right: 64px;     
  user-select: none;

  img {
    width: 32px;
    height: 32px;
    flex-shrink: 0;
    aspect-ratio: 1/1;
    margin-right: 16px;
  }
  .text {
    padding: 8px 16px;
    border-radius: 8px;
    background: rgba(102, 47, 130, 0.08);
  }

  span {
    text-align: center;
    font-family: "Nunito Sans";
    font-size: 12px;
    font-style: normal;
    font-weight: 800;
    line-height: 120%; /* 14.4px */
    letter-spacing: 2.3px;
    color: ${({ theme }) => theme.colors.roxo700};
    text-transform: uppercase;
  }
  .light {
    font-weight: 400;
  }
`;
