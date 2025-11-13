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
      font-weight: 400;
      font-style: normal;
      font-size: 14px;
      line-height: 100%;
      letter-spacing: 0;
      vertical-align: middle;
    `,
  },

}
