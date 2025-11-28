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
    background-color: #F4F4F4;
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
  img {
    user-select: none;
    -webkit-user-select: none;
    -webkit-user-drag: none;
    touch-action: none;
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
  /* SCROLLBAR CUSTOMIZADO */
  /* Chrome, Edge e Safari */
/* CHROME / EDGE / SAFARI — Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-thumb {
  background: #AAAAAA;
  border-radius: 80px;
}

/* REMOVER COMPLETAMENTE OS BOTÕES */
body::-webkit-scrollbar-button:start:decrement,
body::-webkit-scrollbar-button:end:increment,
body::-webkit-scrollbar-button:single-button,
body::-webkit-scrollbar-button:double-button {
  display: none;
  height: 0;
  width: 0;
  background: none;
  border: none;
}
/* FIREFOX */
* {
  scrollbar-width: thin;
  scrollbar-color: #AAAAAA transparent;
}
::-webkit-scrollbar-button {
  display: none;
}

::-webkit-scrollbar {
  width: 18px;
  height: 5px;
}

::-webkit-scrollbar-button {
  background: none !important;
  width: 8px;
  height: 0px;
}

::-webkit-scrollbar-track-piece {
  background-color: transparent;
  border-radius: 0;
}

::-webkit-scrollbar-thumb:vertical {
  height: 5px;
  background-color: transparent;
  border-radius: 0;
  border-left: 2px solid transparent;
  border-right: 2px solid transparent;
}

::-webkit-scrollbar-thumb:horizontal {
  width: 3px;
  background-color: transparent;
  border-radius: 0;
}

::-webkit-scrollbar-button:vertical:increment {
  background-image: none !important;
}

::-webkit-scrollbar-button:vertical:decrement {
  background-image: none !important;
}


`
