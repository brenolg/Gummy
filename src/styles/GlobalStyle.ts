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

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    min-height: 100vh;
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
  }
  /* LINKS */
  a {
    color: inherit;
    text-decoration: none;
  }

`
