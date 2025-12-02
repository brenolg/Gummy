import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;
  align-items: center;
  justify-items: center;
  padding: 118px 123px 95px;
  background:
    url(<path-to-image>) lightgray 0px -145px / 100% 155% no-repeat,
    var(--Roxo-0, #fdfbfe);
  @media (max-width: 1100px) {
    padding: 32px 24px;
  }
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`
export const LeftBox = styled.div`
  position: relative;
  border-radius: 40px;
  max-width: 460px;
  background:
    linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%), var(--roxo-700, #502665);
  width: 100%;

  padding-left: 52px;
  padding-top: 42px;
  padding-bottom: 25px;
  padding-right: 42px;
  display: flex;
  flex-direction: column;
  position: relative;
  @media (max-width: 900px) {
    justify-content: center;
    align-items: center;
    padding: 32px 16px;
  }
`

export const Title = styled.h3`
  color: var(--Roxo-0, #fdfbfe);
  font-family: 'Nunito Sans';
  font-size: 34px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 40.8px */
  margin-bottom: 8px;
  @media (max-width: 900px) {
    font-size: 22px;
    margin-bottom: 16px;
  }
`

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-bottom: 8px;
  li {
    color: var(--Roxo-0, #fdfbfe);
    font-family: 'Nunito Sans';
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 30px */
    position: relative;
    padding-left: 20px;
    &::before {
      content: '•';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      color: var(--Roxo-0, #fdfbfe);
      font-size: 20px;
    }
  }
  @media (max-width: 900px) {
    li {
      font-size: 16px;
    }
  }
`

export const VideoBox = styled.div`
  width: 258.797px;
  height: 460px;

  background: #f4f3f6;
  border-radius: 40px;
  overflow: hidden;
  position: relative;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const BearImage = styled.img`
  position: absolute;
  right: -75px;
  bottom: -29px;
  width: 150px;
  z-index: 3;
  @media (max-width: 900px) {
    right: -24px;
    width: 90px;
    height: 139px;
    bottom: -21px;
  }
`
