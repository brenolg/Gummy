import styled from 'styled-components'

export const Card = styled.div`
  width: 305px;
  padding: 6px;
  height: 452px;
  background: #b2872e33;
  border-radius: 16px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
  position: relative;

  /* ✨ FORÇA CLIP NAS CAMADAS INTERNAS DA LIB */
  .__react-compare-image__,
  .__react-compare-image__container,
  .__react-compare-image__image,
  .__react-compare-image__left-image,
  .__react-compare-image__right-image {
    border-radius: 12px !important;
    overflow: hidden !important;
  }
  @media (max-width: 900px) {
    width: 258px;
    height: 372px;
  }
`

export const ImageArea = styled.div`
  width: 100%;
  height: 440px;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  /* 🔥 O PULO DO GATO */
  .__react-compare-image__ {
    width: 100% !important;
    height: 100% !important;
    position: relative !important;
  }

  .__react-compare-image__container {
    width: 100% !important;
    height: 100% !important;
  }

  .__react-compare-image__image,
  img {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
  }
  @media (max-width: 900px) {
    height: 360px;
  }
`

export const CustomHandle = styled.div`
  width: 40px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;
  touch-action: none;
  pointer-events: auto;

  img {
    width: 100%;
    height: auto;
    pointer-events: none;
    user-select: none;
    -webkit-user-drag: none;
  }
`

export const Content = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -48px; /* ajusta conforme o tamanho do texto */
  text-align: center;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  @media (max-width: 900px) {
    bottom: -40px;
  }
`

export const Title = styled.p`
  color: var(--roxo-700, #502665);
  text-align: center;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  /* 150% */
  @media (max-width: 900px) {
    font-size: 12px;
  }
`

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`

export const Icon = styled.img`
  width: 14px;
`

export const FooterText = styled.span`
  color: var(--roxo-700, #502665);
  text-align: center;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
`
