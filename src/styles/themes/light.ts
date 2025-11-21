import { css } from "styled-components";

export const lightTheme = {
  colors: {
    neutral: {
      black700: '#424242',
      grey800: '#292929',
      grey700: '#424242',
      grey600: '#525252',
      grey500: '#CCCCCC',
      grey400: '#A3A3A3',
      white0: '#FFFFFF'
    },
    roxo900: '#2C1830',
    roxo700: '#502665',
    roxo800: '#3F2049',
    roxo500:'#7D37A1',
    roxo200: '#B575D6',
    roxo25: '#EBD7F5',
    roxo0: '#FDFBFE',
    dourado200: '#BA7E1B',
    dourado100: '#FAE4C1',
  },
  typography: {
    input: css`
      color: var(--Color-Neutral-Black-700, #424242);
      font-family: Inter;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    `,
  },

}
