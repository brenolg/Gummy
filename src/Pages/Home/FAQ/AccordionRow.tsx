import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import ChevronIcon from '@/assets/icons/chevronFaq.svg'

const Item = styled.div`
  background: transparent;
  border-bottom: 1px solid #fdfbfe;
  width: 100%;
  &:last-of-type {
    border-bottom: none;
  }
`

const Header = styled.button<{ $open: boolean }>`
  width: 100%;
  background: transparent;
  border: 0;
  outline: 0;
  color: ${
    ({ $open, theme }) =>
      $open
        ? theme.colors.dourado100 // quando aberto
        : theme.colors.roxo0 // quando fechado
  };
  font-family: Montserrat;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-align: left;
  width: 100%;
  padding: 40px 0px;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  @media (max-width: 900px) {
    font-size: 16px;
    padding: 24px 0px;
  }
`

const Icon = styled.img<{ $open: boolean }>`
  width: 22.037px;

  aspect-ratio: 12.04/22.03;
  transition: transform 0.3s ease;
  transform: rotate(${(p) => (p.$open ? '-180deg' : '0deg')});

  @media (max-width: 900px) {
    width: 16px;
    height: 14.642px;
    aspect-ratio: 8/14.64;
  }
`

const reveal = keyframes`
  from { opacity: 0; transform: translateY(-4px); }
  to   { opacity: 1; transform: translateY(0); }
`

const Body = styled.div<{ $open: boolean; $height: number }>`
  overflow: hidden;
  transition: height 0.22s ease;
  height: ${(p) => (p.$open ? `calc(${p.$height} + 24)px` : 0)};

  > div {
    padding-bottom: 40px;
    color: #e9def7;
    line-height: 1.6;
    font-size: 15px;
    animation: ${reveal} 0.18s ease;
    color: ${({ theme }) => theme.colors.roxo0};
    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  @media (max-width: 900px) {
    > div {
      font-size: 16px;
      padding-bottom: 24px;
    }
  }
`

export default function AccordionRow({
  isOpen,
  headerId,
  bodyId,
  question,
  children,
  onToggle,
}: {
  isOpen: boolean
  headerId: string
  bodyId: string
  question: string
  children: React.ReactNode
  onToggle: () => void
}) {
  const [h, setH] = useState(0)
  const ref = React.useCallback((node: HTMLDivElement | null) => {
    if (node) setH(node.getBoundingClientRect().height)
  }, [])

  return (
    <Item>
      <Header
        id={headerId}
        aria-controls={bodyId}
        aria-expanded={isOpen}
        $open={isOpen}
        onClick={onToggle}
      >
        {question}
        <Icon src={ChevronIcon} $open={isOpen} />
      </Header>

      <Body role="region" id={bodyId} aria-labelledby={headerId} $open={isOpen} $height={h}>
        <div ref={ref}>{children}</div>
      </Body>
    </Item>
  )
}
