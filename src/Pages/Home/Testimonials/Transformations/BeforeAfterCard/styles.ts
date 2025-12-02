import styled from 'styled-components'

export const Card = styled.div`
  width: 305.765625px;
  height: 460px;
  border-radius: 16px;
  background: #b2872e33;
  padding: 4px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
`

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 452px;
  overflow: hidden;
  border-radius: 12px;
`

export const BaseImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  -webkit-user-drag: none;
  user-drag: none;
  user-select: none;
  -webkit-touch-callout: none;
`

export const OverlayImageWrapper = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  transition: width 0.05s linear;
`

export const OverlayImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  -webkit-user-drag: none;
  user-drag: none;
  user-select: none;
  -webkit-touch-callout: none;
`

export const Handle = styled.img`
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  cursor: grab;
  /* 👇 ESSENCIAIS PARA BLOQUEAR SWIPE DO CARROSSEL */
  touch-action: none;
  -webkit-user-drag: none;
  user-select: none;
  pointer-events: auto;
`
export const LabelsRow = styled.div`
  position: absolute;
  top: 8px;
  left: 0;
  right: 0;
  padding: 0 8px;
  display: flex;
  justify-content: space-between;
  z-index: 4;
  pointer-events: none;
`

export const Label = styled.img`
  margin: 10px 14px 0 14px;
`

export const Content = styled.div`
  margin-top: 8px;
  text-align: center;
`

export const Title = styled.p`
  color: var(--roxo-700, #502665);
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
`

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
`

export const FooterIcon = styled.img`
  margin-left: 6px;
`

export const FooterText = styled.span`
  color: var(--roxo-700, #502665);
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`
