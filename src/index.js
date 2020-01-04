import React from 'react'
import { render } from 'react-dom'
import App from './App'
import 'typeface-roboto'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { blue } from '@material-ui/core/colors'


//간단한 방법 
const theme = createMuiTheme({ palette: { primary: blue } })

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       light: orange[200], // same as '#FFCC80'
//       main: '#FB8C00', // same as orange[600]
//       dark: '#EF6C00',
//       contrastText: 'rgb(0,0,0)'
//     }
//   }
// })

render(  <MuiThemeProvider theme={theme}>    <App />  </MuiThemeProvider>,  document.getElementById('root'))