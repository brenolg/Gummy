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
  .card-conteiner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    margin-bottom: 32px;
    min-height: 374px;
  }
  .line {
    height: 10px;
    border-radius: 5px;
    background: ${({ theme }) => theme.colors.roxo700};
  }
`

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 42px 182px 54px 52px;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  width: 100%;
  color: ${({ theme }) => theme.colors.neutral.white0};
  background:
    linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%),
    ${({ theme }) => theme.colors.roxo700};
  height: fit-content;

  @media (max-width: 1150px) {
    padding: 32px 24px;
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
  font-size: 34px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  text-transform: uppercase;
  .highlight {
    font-weight: 800;
  }
  @media (max-width: 1150px) {
    text-align: center;
    width: 100%;
    font-size: 26px;
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
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 180%; /* 36px */
  @media (max-width: 1150px) {
    font-size: 16px;
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
  @media (max-width: 1150px) {
    width: 222px;
    height: 300px;
    transform: none;
    top: auto;
    left: calc(100% - 200px);
    bottom: -60px;
  }
`

export const BottleImage = styled.img`
  width: 438px;
  height: 521px;
  @media (max-width: 1150px) {
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
  width: calc(445px -25px);
  height: 273px;
  bottom: -5px;
`
export const WomanImage = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 30%;
  flex-shrink: 0;
  aspect-ratio: 1/1;
`
