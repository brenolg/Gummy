export const darkTheme = {
  title: 'dark',

  colors: {
    background: '#121212',
    text: '#EAEAEA',
    primary: '#7F7FFF',
    secondary: '#FF4E70',
    accent: '#00E0C7',
    border: '#2C2C2C',
    card: '#1E1E1E',
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
