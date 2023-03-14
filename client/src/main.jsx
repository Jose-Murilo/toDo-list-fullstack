import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { App } from './App'
import { routes } from './routes'
import { GlobalStyle } from './styles/reset'
import { Theme } from './styles/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <RouterProvider router={routes} />
    </ThemeProvider>
  </React.StrictMode>,
)
