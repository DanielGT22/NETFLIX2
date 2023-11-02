import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

// utilizzo quel div vuoto con id="root" come RADICE (root) del mio progetto react
const root = ReactDOM.createRoot(document.getElementById('root'))

// sulla base di questa radice, io renderizzo il contenuto di <App />
root.render(<App />)

// App è un COMPONENTE REACT
