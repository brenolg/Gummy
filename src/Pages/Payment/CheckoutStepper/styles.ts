import styled from "styled-components";

export const StepperWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
  gap: 16px;
`;

export const StepItem = styled.div<{ $active: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const StepCircle = styled.div<{ $active: boolean }>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ $active, theme }) =>
    $active ? theme.colors.roxo700 : "transparent"};

  color: ${({ $active, theme }) =>
    $active ? theme.colors.neutral.white0 : theme.colors.neutral.Grey500};

  border: 2px solid
    ${({ $active, theme }) =>
      $active ? theme.colors.roxo700 : theme.colors.neutral.Grey500};
`;

export const StepLabel = styled.span<{ $active: boolean }>`
  font-size: 14px;
  font-weight: ${({ $active }) => ($active ? 600 : 400)};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.roxo700 : theme.colors.neutral.Grey500};
`;

export const StepDivider = styled.div<{ $active: boolean }>`
  width: 80px;
  height: 2px;
  background: ${({ $active, theme }) =>
    $active ? theme.colors.roxo700 : theme.colors.neutral.Grey500};
  opacity: 0.4;
`;
