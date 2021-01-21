import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { AppContextProvider } from './context'
import App from './Components/App'

ReactDOM.render(
  <BrowserRouter>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
