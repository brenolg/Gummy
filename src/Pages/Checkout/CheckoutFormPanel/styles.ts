import styled from 'styled-components'

export const BackButton = styled.button`
  margin-bottom: 48px;
  display: flex;
  gap: 22px;
  @media (max-width: 740px) {
    padding: 24px;
    padding-bottom: 0;
    margin-bottom: 28px;
  }
`

export const TwoInputContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`

export const InputContainer = styled.div`
  border-radius: 16px;
  padding: 16px;
  background: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.08);
  margin-bottom: 32px;
  position: relative;

  .pix-description {
    color: var(--Color-Neutral-Black-700, #424242);
    text-align: center;
    font-family: 'Nunito Sans';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`

export const ContentContainer = styled.div`
  max-width: 382px;
`

export const FormTitle = styled.h2`
  color: #3c3c3c;
  font-family: 'Nunito Sans';
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 24px;
`
