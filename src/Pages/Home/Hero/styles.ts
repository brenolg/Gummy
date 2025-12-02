import styled from 'styled-components'

export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding-top: 43px;
  padding-left: 114px;
  padding-right: 114px;
  padding-bottom: 53px;
  position: relative;
  @media (max-width: 1150px) {
    padding: 0;
    padding-left: 24px;
    padding-right: 24px;
  }
`

export const Card = styled.div`
  width: 100%;
  padding-top: 52px;
  min-height: 521px;
  position: relative;

  .line {
    height: 10px;
    border-radius: 5px;
    margin-top: 32px;
    background: ${({ theme }) => theme.colors.roxo700};
  }
  @media (max-width: 850px) {
    padding-top: 0;
  }
`

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 42px 55% 54px 52px;
  border-radius: 40px;
  width: 100%;
  color: ${({ theme }) => theme.colors.neutral.white0};
  background:
    linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%),
    ${({ theme }) => theme.colors.roxo700};
  height: fit-content;
  @media (max-width: 1350px) {
    padding: 42px 30% 54px 52px;
  }

  @media (max-width: 850px) {
    padding: 24px;
    border-radius: 24px;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding-bottom: 240px;
  }
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.roxo0};
  font-family: 'Nunito Sans';
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  text-transform: uppercase;
  .highlight {
    font-weight: 800;
  }
  @media (max-width: 850px) {
    text-align: center;
    font-size: 22px;
    width: 100%;
  }
  @media (max-width: 500px) {
    text-align: left;
  }
`

export const BenefitsList = styled.ul`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  width: 100%;
`

export const BenefitItem = styled.li`
  color: ${({ theme }) => theme.colors.roxo0};
  font-family: 'Nunito Sans';
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 180%; /* 36px */
  @media (max-width: 850px) {
    font-size: 12px;
    text-align: center;
  }
  @media (max-width: 500px) {
    text-align: left;
  }
`

export const BottleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  z-index: 2;
  @media (max-width: 1350px) {
    left: 70%;
    width: 500px;
    transform: translate(-50%);
  }
  @media (max-width: 850px) {
    width: 222px;
    height: 300px;
    transform: none;
    top: auto;
    left: calc(100% - 200px);
    bottom: -35px;
  }
`

export const BottleImage = styled.img`
  width: 438px;
  height: 521px;
  @media (max-width: 850px) {
    width: 222px;
    height: 300px;
    aspect-ratio: 37/50;
  }
`

export const FruitsImage = styled.div<{ $img: string }>`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  background:
    url(${({ $img }) => $img}) -32.354px -4px / 116.688% 100.747% no-repeat,
    linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%),
    linear-gradient(
      180deg,
      ${({ theme }) => theme.colors.roxo800} 0%,
      ${({ theme }) => theme.colors.roxo700} 100%
    );
`
export const FruitMobile = styled.img`
  position: absolute;
  bottom: 18%;
  right: 0;

  @media (max-width: 1350px) {
    bottom: 18%;
    right: -200px;
  }

  @media (max-width: 850px) {
    height: 273px;

    left: 0;
    right: auto;
    bottom: -10px;

    object-fit: contain;
    pointer-events: none;
  }
`
export const WomanImage = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 30%;
  flex-shrink: 0;
  aspect-ratio: 1/1;
  @media (max-width: 1150px) {
    display: none;
  }
`
