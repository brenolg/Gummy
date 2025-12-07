import { useEffect } from 'react'
import type { ReactNode } from 'react'
import styled from 'styled-components'

type ModalProps = {
  open: boolean
  onClose: () => void
  maxWidth?: string // ex: "600px"
  children: ReactNode
}

export default function Modal({ open, onClose, maxWidth = '600px', children }: ModalProps) {
  // Fecha com tecla ESC (opcional, mas bem útil)
  useEffect(() => {
    if (!open) return

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [open, onClose])

  if (!open) return null

  return (
    <Overlay onClick={onClose}>
      <Dialog
        style={{ maxWidth }}
        onClick={(e) => e.stopPropagation()} // não fecha ao clicar dentro
      >
        <Header>
          <span /> {/* só pra empurrar o X pra direita, se quiser pode pôr título aqui */}
          <CloseButton type="button" onClick={onClose}>
            ×
          </CloseButton>
        </Header>

        <Content>{children}</Content>
      </Dialog>
    </Overlay>
  )
}

/* ========== styles ========== */

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`

const Dialog = styled.div`
  width: 100%;
  max-height: 90vh;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: column;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 24px;
  padding-bottom: 0;
`

const CloseButton = styled.button`
  border: none;
  background: transparent;
  font-size: 24px;
  line-height: 1;
  cursor: pointer;
`

const Content = styled.div`
  overflow-y: auto;
`
