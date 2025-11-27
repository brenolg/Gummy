import React, { useId, useState } from 'react'
import instaIcon from '@/assets/icons/whatsappW.svg'
import { AsideCard, ContactBtn, FaqCard, Panel, Wrapper } from './styles'
import AccordionRow from './AccordionRow'
import { useMediaQuery } from 'react-responsive'

type FaqItem = { id?: string; question: string; answer: React.ReactNode }

interface FAQProps {
  items: FaqItem[]
  contactCtaHref?: string
}

export default function FAQ({ items }: FAQProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? '0')
  const titleId = useId()

  const isMobile = useMediaQuery({
    query: '(max-width: 900px)',
  })

  const phone = '5547992064104' // coloque DDI + DDD + número
  const message = encodeURIComponent('Olá! Gostaria de saber mais sobre a Power Gummy!')
  return (
    <Wrapper aria-labelledby={titleId} id="faq">
      {/* Lateral */}
      <AsideCard>
        <p className="faqTag">FAQ</p>
        <h3 className="faqTitle" id={titleId}>
          Dúvidas Frequentes
        </h3>
        <p className="faqFirstDescription">
          {'Esclarecemos as dúvidas mais comuns\nque talvez você também tenha!'}
        </p>

        {!isMobile && (
          <FaqCard>
            <h2 className="faqSubtitle">AINDA TEM DÚVIDAS?</h2>
            <p className="faqSecDescription">
              {'Não encontrou sua dúvida?\nNossa equipe está pronta para ajudar você!'}
            </p>
            <ContactBtn
              aria-label="Entrar em contato"
              as="a"
              href={`https://wa.me/${phone}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instaIcon} />
              ENTRAR EM CONTATO
            </ContactBtn>
          </FaqCard>
        )}
      </AsideCard>

      {/* Lista de perguntas */}
      <Panel role="region" aria-label="Lista de perguntas frequentes">
        {items.map((it, idx) => {
          const id = it.id ?? String(idx)
          const isOpen = openId === id
          const bodyId = `faq-body-${id}`
          const headerId = `faq-header-${id}`

          return (
            <AccordionRow
              key={id}
              isOpen={isOpen}
              headerId={headerId}
              bodyId={bodyId}
              question={it.question}
              onToggle={() => setOpenId(isOpen ? null : id)}
            >
              {it.answer}
            </AccordionRow>
          )
        })}
      </Panel>

      {isMobile && (
        <FaqCard>
          <h2 className="faqSubtitle">AINDA TEM DÚVIDAS?</h2>
          <p className="faqSecDescription">
            {'Não encontrou sua dúvida?\nNossa equipe está pronta para ajudar você!'}
          </p>
          <ContactBtn
            aria-label="Entrar em contato"
            as="a"
            href={`https://wa.me/${phone}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instaIcon} />
            ENTRAR EM CONTATO
          </ContactBtn>
        </FaqCard>
      )}
    </Wrapper>
  )
}
