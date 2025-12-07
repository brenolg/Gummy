import styled from 'styled-components'
import { useLocation, useNavigate } from 'react-router-dom'

const Sidebar = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  min-height: 100vh;
  height: 100%;
  width: 90px;
  border-radius: 0 24px 24px 0;
  background: var(--roxo-700, #502665);
  box-shadow: 4px 2px 6px rgba(210, 186, 245, 0.1);
  display: flex;
  flex-direction: column;
`

const Menu = styled.div`
  padding: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`

const MenuTop = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Item = styled.div`
  position: relative;
  width: 100%;
  height: 48px;
  width: 48px;
  margin: auto;
  margin-bottom: 8px;
  cursor: pointer;
  .icon {
    width: 48px;
    height: 48px;
  }
  .hoverBtn {
    position: absolute;
    top: 0;
    left: -2px;
    width: 130px;
    height: 48px;
    display: flex;
    align-items: center;
    border-radius: 30px;
    border: 2px solid var(--Roxo-600, #662f82);
    background: var(--roxo-700, #502665);
    z-index: 2;
    pointer-events: none;
    color: #fdfbfe;
    font-size: 12px;
    font-weight: 700;
    opacity: 0;
    will-change: opacity;
    transition: opacity 0.18s ease;
    color: var(--Roxo-0, #fdfbfe);
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    cursor: pointer;
    .icon {
      filter: brightness(0) invert(1); /* deixa branco */
    }
  }

  &:hover .hoverBtn {
    opacity: 1;
  }

  &.active .icon {
    filter: brightness(0) invert(1);
  }
`

const Logo = styled.img`
  width: 59px;
  height: 40px;
  flex-shrink: 0;
  aspect-ratio: 59/40;
  margin: auto;
  margin-bottom: 55px;
  margin-top: 24px;
`
import logo from '@/assets/imgs/logo.png'

import dashboard from '@/assets/icons/dashboard.svg'
import clients from '@/assets/icons/clientes.svg'
import coupons from '@/assets/icons/cupons.svg'
import banner from '@/assets/icons/banners.svg'
import logOut from '@/assets/icons/logOut.svg'
export default function SidebarMenu() {
  const navigate = useNavigate()
  const location = useLocation()

  const items = [
    { route: '/dashboard', label: 'Dashboard', icon: dashboard },
    { route: '/clientes', label: 'Clientes', icon: clients },
    { route: '/cupons', label: 'Cupons', icon: coupons },
    { route: '/banners', label: 'Banners', icon: banner },
  ]

  return (
    <Sidebar>
      <Logo src={logo} />
      <Menu>
        <MenuTop>
          {items.map((item) => {
            const isActive = location.pathname.startsWith(item.route)

            return (
              <Item key={item.route} className={isActive ? 'active' : ''}>
                <img className="icon" onClick={() => navigate(item.route)} src={item.icon} />

                <button className="hoverBtn">
                  <img src={item.icon} className="icon" />
                  {item.label}
                </button>
              </Item>
            )
          })}
        </MenuTop>

        <Item style={{ marginTop: 'auto' }}>
          <img className="icon" onClick={() => navigate('/logout')} src={logOut} />
          <button className="hoverBtn">
            <img src={logOut} className="icon" />
            Sair
          </button>
        </Item>
      </Menu>
    </Sidebar>
  )
}
