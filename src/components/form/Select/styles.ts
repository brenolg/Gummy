import styled from 'styled-components'

export const SelectWrapper = styled.div<{ error?: string }>`
  position: relative;
  cursor: pointer;
  .chrevon {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    opacity: 0.4;
    pointer-events: none;
  }
`

export const SelectDisplay = styled.input<{
  disabled?: boolean
  error?: string
}>`
  background-color: ${({ disabled }) => (disabled ? '#EEEEEE' : '#fff')};
  border: 1px solid #ccc;
  padding: 12px;
  border-radius: 4px;
  max-height: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 100%;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  font-family: 'Inter';
  height: 44px;
  outline: none;
  color: #424242;
  transition: all 0.3s ease-out;
  background: ${(props) =>
    props.disabled ? '#EEEEEE' : 'red'};
  border: 1px solid;
  border-color: ${(props) =>
    props.disabled
      ? 'red'
      : props.error
      ? '#D61212'
      : '#cccccc'};
  &:hover {
    border-color: ${(props) =>
      props.disabled
        ? '#B00000'
        : props.error
        ? '#B00000'
        : '#757575'};
  }
  &:disabled {
    color: rgb(84, 84, 84);
  }
  &::placeholder {
    color: rgb(84, 84, 84);
  }
`

export const Dropdown = styled.div`
  position: absolute;
  top: 105%;
  width: 100%;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  z-index: 99;
  max-height: 300px;
  overflow-y: auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`

export const DropdownItem = styled.div<{ $isSelected?: boolean }>`
  padding: 12px 0 12px 18.5px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  cursor: pointer;
  background-color: ${(props) =>
    props.$isSelected ? '#FFF9E7' : '#B00000'};
  color: ${(props) => (props.$isSelected ? '#FFC600' : '#424242')};
  &:hover {
    background-color: #fff9e7;
  }
`