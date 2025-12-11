import styled from 'styled-components'

export const ContactContainer = styled.div`
  display: flex;
  gap: 16px;
  img {
    cursor: pointer;
  }
`
export const StatusBadge = styled.div<{ $status: string }>`
  display: flex;
  padding: 8px 10px;
  align-items: center;
  gap: 10px;
  color: var(--Grey-Branco, #fff);
  font-feature-settings:
    'liga' off,
    'clig' off;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 14px; /* 100% */
  width: 126px;
  border-radius: 4px;

  background: ${({ $status }) => ($status === 'PENDING' ? '#D61212' : '#502665')};
`
export const ImageContainer = styled.div<{ $img: string; $isGold?: boolean }>`
  border-radius: 12px;
  border: 2px solid #fff;
  border-radius: 12px;
  height: 48px;
  width: 48px;
  border: 2px solid #fff;
  position: relative;
  background: ${({ $img, $isGold }) =>
    `url(${$img}) ${$isGold ? 'rgba(186, 126, 27, 0.80)' : '#ebd7f5'} 3.589px 10px / 88.783% 71.538% no-repeat`};

  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`

export const QuantityBadge = styled.div`
  position: absolute;
  top: -7px;
  right: -7px;
  display: flex;
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 2px solid #fff;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%), #000;
  color: #fff;
  font-family: Nunito;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  z-index: 1;
`

export const Images = styled.div`
  display: flex;
  gap: 7px;
  align-items: center;
  height: 72px;
`
export const FunnelCard = styled.div<{ $step: string }>`
  display: flex;
  width: 104px;
  height: 30px;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-feature-settings:
    'liga' off,
    'clig' off;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 14px; /* 100% */
  border-radius: 4px;
  color: ${({ $step }) => ($step === 'COMPRA' ? '#FFF' : '#502665')};

  background: ${({ $step }) => {
    switch ($step) {
      case 'CONTATO':
        return 'rgba(80, 38, 101, 0.08)'
      case 'ENDERECO':
        return 'rgba(80, 38, 101, 0.16)'
      case '3. Pagamento':
        return 'rgba(80, 38, 101, 0.24)'
      case 'COMPRA':
        return '#502665'
      default:
        return 'rgba(80, 38, 101, 0.18)'
    }
  }};
`
