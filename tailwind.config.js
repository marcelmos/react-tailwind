module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      rotate: {
        '405': '405deg',
      },
      keyframes: {
        slideIn: {
          '0%': {
            transform: 'translateY(100vh)'
          },
          '100%': {
            transform: 'translateY(0px)'
          }
        },
        slideOut: {
          '0%': {
            transform: 'translateY(0px)'
          },
          '100%': {
            transform: 'translateY(100vh)'
          }
        },
        slideInRight: {
          '0%': {
            transform: 'translateX(100vw)'
          },
          '100%': {
            transform: 'translateX(0px)'
          }
        },
        slideOutRight: {
          '0%': {
            transform: 'translateX(0px)'
          },
          '100%': {
            transform: 'translateX(100vw)'
          }
        },
        fadeIn: {
          '0%': {
            opacity: '0'
          },
          '100%': {
            opacity: '1'
          }
        },
        fadeOut: {
          '0%': {
            opacity: '1'
          },
          '100%': {
            opacity: '0'
          }
        },
      },
      animation: {
        slideIn: 'slideIn 400ms ease-out',
        slideOut: 'slideOut 400ms ease-in',
        slideInRight: 'slideInRight 400ms ease-out',
        slideOutRight: 'slideOutRight 400ms ease-in',
        fadeIn: 'fadeIn 300ms linear',
        fadeOut: 'fadeOut 300ms linear',
      },
    },
    maxHeight: {
      '3/4': '75%',
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
