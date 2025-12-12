import styled from 'styled-components'

export const Container = styled.div<{ $purple?: boolean }>`
  border-radius: 12px;
  padding: 24px;
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  box-shadow: 0 2px 8px 0 rgba(80, 38, 101, 0.16);
  border-radius: 8px;
  border: 1px solid var(--roxo-700, #502665);
  background: ${({ $purple }) => ($purple ? '#502665' : 'transparent')};
  color: ${({ $purple }) => ($purple ? '#FFFFFF' : '#502665')};
  box-shadow: ${({ $purple }) => ($purple ? '0 4px 12px rgba(0,0,0,0.15)' : 'none')};
  .flex {
    display: flex;
    gap: 8px;
  }
`

export const IconWrapper = styled.div<{ $purple?: boolean }>`
  width: 24px;
  height: 24px;

  img {
    width: 100%;
    height: 100%;
    filter: ${({ $purple }) => ($purple ? 'brightness(0) invert(1)' : 'none')};
  }
`

export const Value = styled.div<{ $purple?: boolean }>`
  font-family: 'Nunito Sans';
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px; /* 137.5% */
  letter-spacing: 0.16px;
  color: ${({ $purple }) => ($purple ? '#FDFBFE' : '#502665)')};
`

export const Label = styled.div<{ $purple?: boolean }>`
  color: var(--roxo-700, #502665);
  font-family: 'Nunito Sans';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 133.333% */
  color: ${({ $purple }) => ($purple ? '#FDFBFE' : '#502665')};
`
