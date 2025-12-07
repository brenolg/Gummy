import { colors, typography } from '@/styles/themeUtils'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Row = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 21px;
  position: relative;
`

export const Input = styled.input`
  transition: all 0.3s ease-out;
  border-radius: 5px;
  outline: none;
  width: 100%;
  padding: 14px 11px;
  border: 1px solid ${(t) => colors(t).neutral.grey500};
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.05);
  color: ${(t) => colors(t).neutral.black700};
  background: ${(t) => colors(t).neutral.white0};
  &:hover {
    border: 1px solid var(--Roxo-25, #ebd7f5);
    background: var(--Roxo-0, #fdfbfe);
  }
  &:focus {
    border: 1px solid var(--roxo-700, #502665);
    background: var(--Color-Neutral-White-0, #fff);
  }

  ${(t) => typography(t).input};
`

export const ApplyButton = styled.button`
  height: 50px;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  transition: all ease 0.3s;
  color: #fff;
  border-radius: 16px;
  border: 1px solid #ececec;
  background: linear-gradient(
    92deg,
    var(--roxo-700, #502665) 5.08%,
    var(--Roxo-500, #7d37a1) 102.77%
  );
  color: #fff;
  text-align: center;
  font-family: 'Nunito Sans';
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  &:disabled {
    background: #d7cbee;
    box-shadow: 0 0 0 1px #ecd0df inset;
    cursor: not-allowed;
  }
`

export const Chips = styled.div`
  display: flex;
  gap: 21px;
  flex-wrap: wrap;
  margin-bottom: 21px;
`

export const Chip = styled.div`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.dourado100};
  height: 40px;
  span {
    color: ${({ theme }) => theme.colors.dourado200};
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 171.429% */
  }
`

export const Icon = styled.img``

export const RemoveButton = styled.button`
  border: none;
  background: transparent;
  font-size: 18px;
  cursor: pointer;
  color: #9a6a05;
`

interface IStyleProps {
  $error: boolean
}

export const InputError = styled.div<IStyleProps>`
  position: absolute;
  bottom: 0px;
  transform: translateY(100%);
  text-align: start;
  display: flex;
  opacity: ${(props) => {
    if (props.$error) return 1 // Com erro
    return 0 // Nenhuma condição atendida
  }};
  align-items: center;
  transition: all 0.3s ease-out;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--Vermelho-Alerta, #f00);
  font-family: Inter;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  padding: 2px 4px;
  align-items: center;
  gap: 4px;
  align-self: stretch;
  .img-error {
    width: 12px;
    height: 12px;
  }
`
