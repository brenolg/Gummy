// styles.ts
import styled, { keyframes } from "styled-components";

const loopRight = keyframes`
  0%   { transform: translateX(-50%); }
  100% { transform: translateX(0); }
`;

export const Bar = styled.div`
  width: 100%;
  overflow: hidden;
  margin-bottom: 41px;
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

export const CardContainer = styled.div`
  width: 360px;
  height: 300px;
  border-radius: 20px;
  overflow: hidden;
  background: #ffffff;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);

  display: flex;
  flex-direction: column;
`;

export const ImageSection = styled.div`
  flex: 1.2;
  background-size: cover;
  background-position: center;
`;

export const ContentSection = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

export const IconWrapper = styled.div`
  width: 42px;
  height: 42px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin: 0;
  color: #C3A977;
`;

export const Subtext = styled.p`
  font-size: 14px;
  margin: 4px 0 0 0;
  color: #8A8A8A;
`;
