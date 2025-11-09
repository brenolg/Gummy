import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  padding: 80px 120px;
  background: ${({ theme }) => `
    linear-gradient(
      104deg,
      ${theme.colors.roxo700}0A 4.71%,
      ${theme.colors.dourado200}0A 78.96%,
      ${theme.colors.roxo700}0A 97.19%
    ),
    ${theme.colors.roxo0}
  `};
  gap: 64px;
  justify-content: center;
`;

export const AsideCard = styled.aside`
  text-align: center;
  max-width: 672px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 16px 32px 32px 32px;
  .faqTag {
    display: flex;
    padding: 3px 11px;
    justify-content: center;
    align-items: center;
    border-radius: 9999px;
    border:${({ theme }) => `1px solid ${theme.colors.roxo700}`};
    width: fit-content;
    color: ${({ theme }) => `${theme.colors.roxo700}`};
    text-align: center;
    font-family: Montserrat;
    font-size:  12px;
    font-style: normal;
    font-weight: var(--font-weight-600, 600);
    line-height: var(--font-size-16, 16px);
    margin-bottom: 16px;
  }
  .faqTitle{
    font-family: "Nunito Sans";
    font-size: 40px;
    font-style: normal;
    font-weight: var(--font-weight-700, 700);
    line-height: var(--font-size-48, 48px); 
    background: ${({ theme }) => `
      linear-gradient(
      103deg,
      ${theme.colors.roxo500} 0%,
      ${theme.colors.roxo700} 100%
    )`};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 16px;
  }
  .faqSubtitle {
    color: ${({ theme }) => theme.colors.roxo700};
    text-align: center;
    font-family: "Nunito Sans";
    font-size: 24px;
    font-style: normal;
    font-weight:  700;
    line-height:  32px; 
  }
  .faqFirstDescription {
    color: ${({ theme }) => `${theme.colors.roxo700}`};
    text-align: center;
    font-family: "Nunito Sans";
    font-size: var(--font-size-18, 18px);
    font-style: normal;
    font-weight: var(--font-weight-400, 400);
    line-height: 120%; /* 21.6px */
    margin-bottom: 64px;
  }
  .faqSecDescription {
    color: ${({ theme }) => `${theme.colors.roxo700}`};
    text-align: center;
    font-family: "Nunito Sans";
    font-size: 16px;
    font-style: normal;
    font-weight:  400;
    line-height: 120%; 
  }
  .faqCard {
    display: flex;
    max-width:  672px;
    padding: 16px 32px 32px 32px;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--font-size-16, 16px);
    align-self: stretch;
    border-radius: 24px;
    background: ${({ theme }) => `
      linear-gradient(
        141deg,
        ${theme.colors.roxo0}66 23.8%,
        rgba(235, 215, 245, 0.32) 80.23%
      )
    `};
    box-shadow: 0 0 24px 0 rgba(80, 38, 101, 0.08);
  }
`;

export const ContactBtn = styled.button`
  display: flex;
  padding: 20px 48px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  border-radius: 16px;
  background: ${({ theme }) => `
    linear-gradient(
      90deg,
      ${theme.colors.roxo700} 0%,
      ${theme.colors.roxo500} 100%
    )
  `};
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.10);
  color: ${({ theme }) => `${theme.colors.roxo0}`};
  text-align: center;
  font-family: "Nunito Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Panel = styled.div`
  display: flex;
  padding: 16px 48px 56px 48px;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
  border-radius: 16px;
  background: #502665;
  max-width: 690px;
`;
