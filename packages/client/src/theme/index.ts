import type { Theme } from 'theme-ui'

import { colors } from './colors'



const theme: Theme = {
  fonts: {
    body: {
      normal: "Quicksand-Regular, sans-serif",
      medium: "Quicksand-Medium, sans-serif",
      bold: "Quicksand-SemiBold, sans-serif"
    },
  },
  colors: {
    ...colors,
  },
  space: {
    small: '2rem',
    medium: '4rem'
  }
}

export default theme  