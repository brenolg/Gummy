import styled from "styled-components";

export const CardContainer = styled.div`
  width: 328px;
  height: 258px;
  overflow: hidden;
  border-radius: 16px;
  border: var(--stroke-weight-1, 1px) solid rgba(186, 160, 106, 0.24);
  background: rgba(246, 234, 208, 0.08);
  box-shadow: 0 0 8px 1px rgba(185, 158, 104, 0.24);
  display: flex;
  flex-direction: column;
  margin-left: 18px;
`;

export const ImageSection = styled.div`

  height: 160px;
  background-size: cover;
  background-position: center;
`;

export const ContentSection = styled.div`
  display: flex;
  padding: 24px;
  align-items: flex-start;
  gap: var(--item-spacing-10_75, 10.75px);
  align-self: stretch;
`;

export const IconWrapper = styled.div`
  width: 40px;
  height: 40px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
color: #BAA06A;
font-family: "Nunito Sans";
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 24px; /* 133.333% */
letter-spacing: var(--letter-spacing--0_4, -0.4px);
text-transform: uppercase;
`;

export const Subtext = styled.p`
color: #BAA06A;
font-family: "Nunito Sans";
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 24px; /* 133.333% */
letter-spacing: var(--letter-spacing--0_4, -0.4px);
text-transform: uppercase;
`;
