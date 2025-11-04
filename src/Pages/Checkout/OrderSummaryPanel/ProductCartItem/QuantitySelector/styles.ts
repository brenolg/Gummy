import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #d5d5d5;
  border-radius: 30px;
  overflow: hidden;
  width: 90px;
  height: 32px;
`;

export const Button = styled.button`
  flex: 1;
  border: none;
  background: white;
  cursor: pointer;
  font-size: 18px;
  color: #8a8a8a;
`;

export const Value = styled.div`
  flex: 1;
  text-align: center;
  font-size: 16px;
  color: #2b1a33;
  font-weight: 600;
`;
