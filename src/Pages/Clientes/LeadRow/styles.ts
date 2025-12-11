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
export const ImageContainer = styled.div<{ $img: string }>`
  border-radius: 12px;
  border: 2px solid #fff;
  border-radius: 12px;
  height: 64px;
  width: 64px;
  border: 2px solid #fff;
  position: relative;
  background: url(${({ $img }) => $img}) #ebd7f5 3.589px 10px / 88.783% 71.538% no-repeat;
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
