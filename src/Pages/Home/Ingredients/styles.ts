import styled from "styled-components";
import ingredientsBg from '@/assets/imgs/ingredientsBg.svg'

export const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  background-image: url(${ingredientsBg});
  background-repeat: no-repeat;
  background-size: cover;     /* cobre toda área */
  background-position: center;
`;

export const Content = styled.div`
  width: 100%;
  padding: 48px 86px;
  display: flex;
  flex-direction: column;
`;

export const TopBanner = styled.div`
  display: inline-flex;
  padding: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  width: fit-content;
  margin: auto;
`;

export const BannerTitle = styled.div`
  color: var(--dourado-200, #BA7E1B);
  text-align: center;
  font-family: "Nunito Sans";
  font-size: 34px;
  font-style: normal;
  font-weight: 800;
  line-height: 37.4px; /* 110% */
`;

export const BannerSubtitle = styled.div`
  color: var(--roxo-700, #502665);
  text-align: center;
  font-family: "Nunito Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
`;

export const Main = styled.div`
  display: grid;
  grid-template-columns: 1.1fr auto 1.1fr;
  gap: 32px;
  align-items: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 60px;

`;

export const Ingredient = styled.div<{ $right?: boolean }>`
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  align-items: ${({ $right }) => ($right ? "flex-end" : "flex-start")};
`;

export const IngredientTitle = styled.p<{ $right?: boolean }>`
  color: ${({ theme }) => theme.colors.dourado200};
  font-family: "Nunito Sans";
  font-size: 34px;
  font-style: normal;
  font-weight: 700;
  line-height: 37.4px; 
  text-align: ${({ $right }) => ($right ? "right" : "left")};
`;

export const IngredientSubtitle = styled.p<{ $right?: boolean }>`
  color: ${({ theme }) => theme.colors.roxo700};
  font-family: "Nunito Sans";
  font-size: 34px;
  font-style: normal;
  font-weight: 700;
  line-height: 37.4px;
  margin-bottom: 8px;
  text-align: ${({ $right }) => ($right ? "right" : "left")};
`;

export const IngredientText = styled.p<{ $right?: boolean }>`
  color: ${({ theme }) => theme.colors.roxo700};
  font-family: "Nunito Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 19.2px */
  text-align: ${({ $right }) => ($right ? "right" : "left")};
`;

export const BottleWrapper = styled.div`
  position: relative;       
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  .bottle {
    max-width: 260px;
    width: 100%;
    display: block;
    transition: opacity 0.25s ease, transform 0.25s ease;
  }

  .bottle.hover {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    pointer-events: none;
    z-index: 2;              /* garante que fique na frente da default */
  }

  .bottle.default {
    opacity: 1;
    z-index: 1;
  }

  &:hover .bottle.default {
    opacity: 0;
  }

  &:hover .bottle.hover {
    opacity: 1;
    transform: translateX(-50%) scale(1.03);
  }
`;

export const BottleImage = styled.img`
  max-width: 260px;
  width: 100%;
`;

export const BottomNote = styled.div`
  display: flex;
  width: 389px;
  padding: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 16px;
  position: relative                     ;
  border: var(--stroke-weight-1, 1px) solid rgba(186, 160, 106, 0.24);
  background: rgba(246, 234, 208, 0.08);
  box-shadow: 0 0 8px 1px rgba(185, 158, 104, 0.24);
  backdrop-filter: blur(12px);
  h2 {
    text-align: center;
    font-family: "Nunito Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 19.2px */
    background: linear-gradient(90deg, #502665 0%, #A14CCB 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  p {
    color: var(--roxo-700, #502665);
    text-align: center;
    font-family: "Nunito Sans";
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 18px */
  }
  .seal {
    position: absolute;
    bottom:  53px;
    right: -36px;
  }
`;
