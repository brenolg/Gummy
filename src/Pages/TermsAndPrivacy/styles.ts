import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  padding: 80px 80px 156px 80px;
  flex-direction: column;
`

export const Title = styled.h1`
  color: var(--dourado-200, #ba7e1b);
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 28.8px */
  margin-bottom: 12px;
`

export const SectionTitle = styled.h2`
  color: var(--Roxo-800, #3f2049);
  font-family: 'Nunito Sans';
  font-size: 16px;
  font-style: normal;
  font-weight: 800;
  line-height: 120%;
  margin-top: 24px;
  margin-bottom: 12px;
`

export const Text = styled.p`
  color: var(--Roxo-800, #3f2049);
  font-family: 'Nunito Sans';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  margin-bottom: 12px;
`

export const Highlight = styled.span`
  font-weight: 700;
  color: #662f82;
`

export const List = styled.ul`
  padding-left: 0; /* Remove indent padrão */
  margin-left: 0;
  list-style-position: inside;
  list-style: none;
  padding: 0;
  margin: 0;
`

export const ListItem = styled.li`
  padding-left: 2px; /* Ajuste fino entre bolinha e texto */
  margin-left: 0; /* Distância da bolinha até o texto */

  color: var(--Roxo-800, #3f2049);
  font-family: 'Nunito Sans';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  margin-bottom: 12px;

  &::before {
    content: '•';
    flex-shrink: 0;
    margin-right: 4px;
    margin-top: 2px;
  }
`
