import { typography } from '@/styles/themeUtils'
import styled from 'styled-components'

export const InputContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  background: #fff;
  border-radius: 16px;
  padding: 50px;
  padding-top: 0;
  padding-bottom: 77px;
  gap: 16px;
  position: relative;
`

export const TwoInputContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

export const FormTitle = styled.h2`
  color: var(--Color-Neutral-Black-800, #1c1d22);

  /* H1 - Títulos */
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 24px;
`

export const FormSubtitle = styled.h2`
  color: #000;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 16px;
`
export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 40px;
  padding-bottom: 46px;
`
export const MessageContainer = styled.div<{ $error?: boolean }>`
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  max-width: 90%;
  padding: 10px 16px;
  border-radius: 8px;
  font-size: 13px;
  white-space: nowrap;
  ${(t) => typography(t).input};

  color: ${({ $error }) => ($error ? '#f00' : '#2ecc71')};
`
