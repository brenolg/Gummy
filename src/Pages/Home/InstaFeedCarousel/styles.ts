import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  background: ${({ theme }) => theme.colors.roxo0};
  border-radius: 20px;
  padding: 120px 0px 120px 0px;
`;

export const Header = styled.header`
  padding-right: 120px;
  padding-left: 120px;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .titleContainer {
    display: flex;
    align-items: center;
  }
`;

export const GoldenLogo = styled.img`
  width: 48px;
  height: 48px;
  margin-right: 27px;
`;

export const InstaTxt= styled.img`
  width: 148.105px;
  height: 42px;
`;

export const Title = styled.h3`
  color: #151D53;
  font-family: Montserrat;
  font-size: 28.993px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-bottom: 7px;
`;

export const Rail = styled.div`
  position: relative; overflow: hidden; 
  margin-left: 120px;
  &.dragging {
    cursor: grabbing;
  }
`;

export const Track = styled.div<{ $index: number }>`
  display: grid; grid-auto-flow: column; 
  gap: 40px;
  transition: transform .5s cubic-bezier(.2,.8,.2,1);
  transform: translateX(${p => `calc(${p.$index} * (352px + 40px) * -1)`});
`;

export const Card = styled.div`
  border-radius: 7px;
  border: 1px solid #D6D6D6;
  width: 352px;               
  box-sizing: border-box; 
  background: #FFF;
  .cardHeader {
    padding: 16px 0;
    padding-left: 16px;
    padding-right: 16px;
    display: flex;
    justify-content: space-between;
    .fistContainer {
      display: flex;
    }
    .logo {
      width: 35px;
      height: 35px;
      margin-right: 11px;
    }
    .txt {
      color: #000;
      font-family: 'Roboto';
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
    .dots {
      display: flex;
      align-items: center;
    }
  }
`;

export const ThumbContainer = styled.article`
  position: relative; background: #ffffff; border-bottom-right-radius: 7px; border-bottom-left-radius: 7px; overflow: hidden;
  height: 469.083px;
  width: 352px;
`;

export const Thumb = styled.div`
  display: block; aspect-ratio: 352.00/469.08; background: #f0eee9;
  img, video { width: 100%; height: 100%; object-fit: cover; display:block; }
`;

export const Controls = styled.div`
  display: flex; align-items: center; gap: 8px; margin-top: 12px; justify-content: flex-end;
`;

export const IconBtn = styled.button`
  &:disabled { opacity: .4; cursor: not-allowed; }
  .prev {
    transform: rotate(180deg);
  }
`;
