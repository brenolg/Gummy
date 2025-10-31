import styled from "styled-components";

export const Line = styled.div<{ $mb: number }>`
  width: 100%;
  height: 1px;
  background: rgba(0, 0, 0, 0.08);
  margin-bottom: ${({ $mb }) => `${$mb}px`};
`;
