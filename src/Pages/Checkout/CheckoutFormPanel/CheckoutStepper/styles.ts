import styled from 'styled-components'

export const StepperWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
  gap: 8px;
`

export const StepItem = styled.div<{ $active: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`

export const StepCircle = styled.div<{ $active: boolean }>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ $active, theme }) => ($active ? theme.colors.roxo700 : 'transparent')};

  color: ${({ $active, theme }) =>
    $active ? theme.colors.neutral.white0 : theme.colors.neutral.grey400};

  border: 1px solid
    ${({ $active, theme }) => ($active ? theme.colors.roxo700 : theme.colors.neutral.grey400)};

  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

export const StepLabel = styled.span<{ $active: boolean }>`
  text-align: center;
  font-family: 'Nunito Sans';
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: ${({ $active, theme }) => ($active ? theme.colors.roxo700 : theme.colors.neutral.grey500)};
`

export const StepDivider = styled.div<{ $active: boolean }>`
  width: 80px;
  height: 2px;
  margin-top: 15px;
  background: ${({ $active, theme }) =>
    $active ? theme.colors.roxo700 : theme.colors.neutral.grey500};
  opacity: 0.4;
`
