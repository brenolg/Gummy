import styled from 'styled-components'

export const AccordionWrapper = styled.div`
  width: 100%;
  max-width: 382px;
  display: flex;
  flex-direction: column;
  gap: 8px; /* espaço entre os “cards” */
  margin: auto;
  margin-top: 24px;
`

export const Item = styled.div<{ $open: boolean }>`
  border: var(--stroke-weight-1, 1px) solid rgba(186, 160, 106, 0.24);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 0 8px 1px rgba(185, 158, 104, 0.24);
  backdrop-filter: blur(24px);
  overflow: hidden;
`

export const ItemHeader = styled.button`
  width: 100%;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  border: none;
  cursor: pointer;
`

export const ItemTitle = styled.span<{ $open: boolean }>`
  color: var(--roxo-700, #502665);
  font-family: 'Nunito Sans';
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 24px */
`

export const Arrow = styled.span<{ $open: boolean }>`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.roxo700};
    border-right: 2px solid ${({ theme }) => theme.colors.roxo700};
    transform: ${({ $open }) => ($open ? 'rotate(-135deg)' : 'rotate(45deg)')};
    transition: transform 0.2s ease;
  }
`

export const ItemBody = styled.div<{ $open: boolean }>`
  max-height: ${({ $open }) => ($open ? '400px' : '0')};
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  overflow: hidden;
  padding: ${({ $open }) => ($open ? '0 16px 12px 16px' : '0 16px')};
  transition:
    max-height 0.25s ease,
    opacity 0.25s ease,
    padding 0.25s ease;

  p {
    color: var(--roxo-700, #502665);
    font-family: 'Nunito Sans';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 19.2px */
  }
`
