export const lightTheme = {
  title: 'light',

  colors: {
    background: '#F9F9F9',
    text: '#1E1E1E',
    primary: '#3F5EFB',
    secondary: '#FC466B',
    accent: '#00BFA6',
    border: '#E0E0E0',
    card: '#FFFFFF',
  },

  font: {
    family: "'Segoe UI', sans-serif",
    sizes: {
      small: '0.875rem',
      medium: '1rem',
      large: '1.25rem',
      title: '2rem',
    },
    weight: {
      regular: 400,
      medium: 500,
      bold: 700,
    },
  },

  spacing: (factor: number) => `${factor * 8}px`,

  radius: {
    sm: '4px',
    md: '8px',
    lg: '16px',
  },
}
