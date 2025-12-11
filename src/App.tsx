import { useState } from 'react'
import { GlobalStyle } from './styles/GlobalStyle.ts'
import AppRoutes from './routes.tsx'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from './styles/themes/light.ts'
import { darkTheme } from './styles/themes/dark.ts'
import CoreDataProvider from './context/CoreDataProvider.tsx'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/themes/light.css'
import '@/styles/tooltip.css'

export default function App() {
  const [isDark] = useState(false)

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <CoreDataProvider>
        <GlobalStyle />
        <AppRoutes />
      </CoreDataProvider>
    </ThemeProvider>
  )
}
