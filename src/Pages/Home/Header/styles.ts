import styled from 'styled-components'

export const Container = styled.header`
  position: sticky;
  top: 0;
  z-index: 999;
  width: 100%;
  background: #502665eb;
  height: 88px;
  padding: 12px 80px;
  @media (max-width: 650px) {
    padding: 2px 24px;
    height: 64px;
  }
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`

export const Logo = styled.img`
  height: 64px;
  width: 93px;
  @media (max-width: 650px) {
    width: 81px;
    height: 56px;
  }
`

export const Nav = styled.nav`
  display: flex;
  gap: 4px;
  align-items: center;
  height: 64px;
  justify-content: center;
  padding: 0 17.78px;
  @media (max-width: 650px) {
    padding: 0;
    height: 56px;
    padding: 2px 24px;
  }
  @media (max-width: 400px) {
    display: none;
  }
`

export const NavItem = styled.div`
  display: flex;
  padding: 10px 15px 11px 15px;
  color: ${({ theme }) => theme.colors.roxo0};
  font-family: 'Nunito Sans';
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: 0.6px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    opacity: 0.7;
  }
`

export const RightArea = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const BuyButton = styled.button`
  display: flex;
  padding: 8px 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.roxo700} 0%,
    ${({ theme }) => theme.colors.roxo500} 100%
  );
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.1);
  color: #fff;
  font-family: 'Nunito Sans';
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  transition: 0.2s;
  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 400px) {
    display: none;
  }
`
