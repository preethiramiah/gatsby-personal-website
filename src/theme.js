import { red } from '@material-ui/core/colors'
import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        color: '#c4c4c4',
        fontWeight: 'normal',
        textTransform: 'none',
        border: '2px solid #c4c4c4'
      },
      text: {
        padding: '4px 15px'
      }
    },
    MuiTypography: {
      h4: {
        fontSize: '32px',
        fontWeight: 'bold',
        color: '#11ABB0'
      }
    }
  },
  palette: {
    type: 'dark',
    primary: {
      main: '#556cd6'
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: red.A400
    }
  },
  typography: {
    caption: {
      color: 'rgba(0, 0, 0, 0.7)'
    }
  },
  customCss: {
    applicationMaxWidth: '980px'
  }
})

export default theme
