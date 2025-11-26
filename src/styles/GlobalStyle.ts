import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  /* RESET / NORMALIZE */
  *, *::before, *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
    padding: 0;
    font: inherit;
  }
  html, body, #root {
    height: 100%;
    width: 100%;
  }
  html, body {
    scrollbar-gutter: stable;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    min-height: 100vh;
  }
  p {
    white-space: pre-line;
  }
  /* MEDIA ELEMENTS */
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  /* FORM ELEMENTS */
  input, button, textarea, select {
    font: inherit;
    color: inherit;
    background: transparent;
    border: none;
    outline: none;
  }
  button {
    cursor: pointer;
    transition: all ease 0.3s;
  }
  button:hover {
    opacity: 0.9;
    transition: all ease 0.3s;
  }
  /* LINKS */
  a {
    color: inherit;
    text-decoration: none;
  }

`
