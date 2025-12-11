import styled from 'styled-components'

export const Title = styled.h1`
  color: var(--roxo-700, #502665);
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 48px;
`
export const Container = styled.div`
  position: relative;
  margin-bottom: 28px;
`

export const Input = styled.input`
  color: var(--roxo-700, #502665);
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 100%;
  display: flex;
  align-items: center;
  display: flex;
  width: 422px;
  height: 40px;
  padding: 8px;

  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  flex-shrink: 0;
  transition: 0.2s ease;
  border-radius: 5px;
  border: 1px solid var(--roxo-700, #502665);
  padding-left: 34px;

  &::placeholder {
    color: var(--roxo-700, #502665);
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`

export const Icon = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 8px;
`
export const TableContainer = styled.div`
  width: calc(100vw - 56px - 59px); /* força ocupar a largura real da tela */
  max-width: calc(100vw - 56px - 59px);
  overflow-x: auto; /* garante scroll horizontal */
  overflow-y: hidden;
  padding-bottom: 8px;
  padding-right: 24px;
`
