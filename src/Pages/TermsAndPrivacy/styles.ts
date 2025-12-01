import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  width: 100%;
  padding: 120px 150px;
  flex-direction: column;
  background: var(--Roxo-0, #fdfbfe);
`

export const Title = styled.h1`
  color: var(--dourado-200, #ba7e1b);
  font-family: Poppins;
  font-size: 35px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 52.5px */
`

export const SectionTitle = styled.h2`
  color: var(--Roxo-800, #3f2049);
  font-family: 'Nunito Sans';
  font-size: 24px;
  font-style: normal;
  font-weight: 800;
  line-height: 150%;
`

export const Text = styled.p`
  color: var(--Roxo-800, #3f2049);
  font-family: 'Nunito Sans';
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-bottom: 14px;
`

export const Highlight = styled.span`
  font-weight: 700;
  color: #662f82;
`

export const List = styled.ul`
  margin: 12px 0 24px 20px;
`

export const ListItem = styled.li`
  font-size: 14px;
  color: #4c4c4c;
  margin-bottom: 10px;
  line-height: 1.6;
`
