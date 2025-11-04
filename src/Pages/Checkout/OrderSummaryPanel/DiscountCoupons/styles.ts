import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom:21px;
`;

export const Row = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 21px;
`;

export const Input = styled.input`
  padding: 14px 11px;
  border: 1px solid #DEDEDE;
  border-radius: 8px;
  height: 50px;
  width: 100%;
  color: #707070;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ApplyButton = styled.button`
  height: 50px;
display: flex;
padding: 14.5px 14px 15px 14px;
flex-direction: column;
align-items: flex-start;
border-radius: 8px;
opacity: 0.5;
background: #D7CBEE;
box-shadow: 0 0 0 1px #ECD0DF inset;
color: #FFF;

text-align: center;
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 21px;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Chips = styled.div`
  display: flex;
  gap: 21px;
  flex-wrap: wrap;
  margin-bottom: 21px;
`;

export const Chip = styled.div`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  background: var(--Dourado-100, #FAE4C1);
  height: 40px;
  span {
    color: var(--dourado-200, #BA7E1B);
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 171.429% */
  }
`;

export const Icon = styled.img``;

export const RemoveButton = styled.button`
  border: none;
  background: transparent;
  font-size: 18px;
  cursor: pointer;
  color: #9a6a05;
`;
