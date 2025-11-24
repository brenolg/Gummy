import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 118px 123px 95px;
  gap: 19px;
  background: url(<path-to-image>) lightgray 0px -145.929px / 100% 154.964% no-repeat, var(--Roxo-0, #FDFBFE);
`;

export const LeftBox = styled.div`
  border-radius: 40px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.20) 100%), var(--roxo-700, #502665);
  display: flex;
  width: 592px;
  height: 318px;
  padding: 42px 191px 33px 52px;
  align-items: flex-start;
  flex-shrink: 0;
  position: relative;
  flex-direction: column;
`;

export const Title = styled.h3`
  color: var(--Roxo-0, #FDFBFE);
  font-family: "Nunito Sans";
  font-size: 34px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 40.8px */
  margin-bottom:8px;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-bottom: 8px;
  li {
    color: var(--Roxo-0, #FDFBFE);
    font-family: "Nunito Sans";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 30px */
    position: relative; 
    padding-left: 20px;
    &::before {
    content: "•";
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      color: var(--Roxo-0, #FDFBFE);
      font-size: 20px;
    }
  }
`;


export const VideoBox = styled.div`
  width: 592px;
  height: 318px;
  background: #f4f3f6;
  border-radius: 40px;
  overflow: hidden;
  position: relative;
  z-index: 1;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const BearImage = styled.img`
  position: absolute;
  left: 506px;
  bottom: -29px;
  width: 150px;
  z-index: 3;
`;
