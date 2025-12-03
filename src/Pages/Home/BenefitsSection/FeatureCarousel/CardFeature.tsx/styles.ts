import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 328px;
  height: 258px;
  overflow: hidden;
  border-radius: 16px;
  border: var(--stroke-weight-1, 1px) solid rgba(186, 160, 106, 0.24);
  background: rgba(246, 234, 208, 0.08);

  display: flex;
  flex-direction: column;
  margin-left: 18px;

  @media (max-width: 900px) {
    width: 142px;
    height: 112px;
    margin-left: 8px;
  }
`

export const ImageSection = styled.img``

export const ContentSection = styled.div`
  display: flex;
  padding: 24px;
  align-items: flex-start;
  gap: var(--item-spacing-10_75, 10.75px);
  align-self: stretch;

  @media (max-width: 900px) {
    padding: 8px;
  }
`

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h3`
  color: #baa06a;
  font-family: 'Nunito Sans';
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 133.333% */
  letter-spacing: var(--letter-spacing--0_4, -0.4px);
  text-transform: uppercase;
  @media (max-width: 900px) {
    color: #baa06a;
    font-family: 'Nunito Sans';
    font-size: 10px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 13px */
    letter-spacing: var(--letter-spacing--0_4, -0.4px);
    text-transform: uppercase;
  }
`

export const Subtext = styled.p`
  color: #baa06a;
  font-family: 'Nunito Sans';
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 133.333% */
  letter-spacing: var(--letter-spacing--0_4, -0.4px);
  text-transform: uppercase;

  @media (max-width: 900px) {
    color: #baa06a;
    font-family: 'Nunito Sans';
    font-size: 10px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 13px */
    letter-spacing: var(--letter-spacing--0_4, -0.4px);
    text-transform: uppercase;
  }
`
