/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'
import { GlobalStyle } from './styles/GlobalStyle.ts'
import AppRoutes from './routes.tsx'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from './styles/themes/light.ts'
import { darkTheme } from './styles/themes/dark.ts'
import styled from 'styled-components'

export default function App() {
    const [isDark, setIsDark] = useState(false)

    return (
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
            <GlobalStyle />
            <AppRoutes />
        </ThemeProvider>
    )
}