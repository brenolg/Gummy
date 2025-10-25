import 'styled-components'
import { lightTheme } from './light'

type ThemeType = typeof lightTheme

declare module 'styled-components' {
  // copiamos a estrutura, não estendemos
  export interface DefaultTheme extends ThemeType {}
}
