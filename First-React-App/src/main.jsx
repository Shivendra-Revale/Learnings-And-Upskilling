import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Button from './CoButton.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Button></Button> <br/> <br/>
    <Button></Button> <br/> <br/>
    <Button></Button> <br/> <br/>
    <App />
    <Button></Button>
    <Button></Button>
    <Button></Button>
    <App />
    <Button></Button>
    <Button></Button>
    <Button></Button>
    <App />
    <Button></Button>
    <Button></Button>
    <Button></Button>
  </React.StrictMode>,
)
