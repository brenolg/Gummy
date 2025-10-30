import type { DefaultTheme } from 'styled-components';

type ThemeProps = { theme: DefaultTheme };

export const colors = (t: ThemeProps) => t.theme.colors;
export const typography = (t: ThemeProps) => t.theme.typography