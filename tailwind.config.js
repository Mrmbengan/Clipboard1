module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        strongCyan: 'hsl(171, 66%, 67%)',
        lightBlue: 'hsl(233, 60%, 69%)',
        darkGrayishBlue: 'hsl(210, 10%, 33%)',
        grayishBlue: 'hsl(201, 11%, 66%)',
      },
      fontFamily: {
        'sans': ['Bai Jamjuree', 'sans-serif'],
        'body': ['Bai Jamjuree', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
