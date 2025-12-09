// styles.ts
import styled from 'styled-components'
import { IMaskInput } from 'react-imask'

export const StyledInput = styled.input`
  width: 95%;
  height: 30px;
  padding: 0 6px;
  border-radius: 5px;
  margin-left: -7px;
  border: 1px solid #d0d5dd;
  background: #fff;
  font-size: 14px;
  outline: none;
  transition: 0.2s ease;
  color: #1c1d22;
  font-family: 'Nunito Sans';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.28px;

  &:focus {
    border-color: #502665;
  }

  &:disabled {
    background-color: #f2f2f2;
    cursor: not-allowed;
  }

  &::placeholder {
    color: #98a2b3;
  }
`

export const StyledMaskInput = styled(IMaskInput)`
  width: 95%;
  height: 30px;
  padding: 0 6px;
  border-radius: 5px;
  margin-left: -7px;
  border: 1px solid #d0d5dd;
  background: #fff;
  font-size: 14px;
  outline: none;
  transition: 0.2s ease;
  color: #1c1d22;
  font-family: 'Nunito Sans';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.28px;

  &:focus {
    border-color: #502665;
  }

  &:disabled {
    background-color: #f2f2f2;
    cursor: not-allowed;
  }

  &::placeholder {
    color: #98a2b3;
  }
`
