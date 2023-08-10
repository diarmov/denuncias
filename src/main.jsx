import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
//import { DenunciasProvider } from './context/DenunciasProvider.jsx'
import { store } from './store'
import router from './router.jsx'
import './index.css'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Provider store={ store }>
       <App />
    </Provider>
  </React.StrictMode>,
)
