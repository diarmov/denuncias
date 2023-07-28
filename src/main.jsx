import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { DenunciasProvider } from './context/DenunciasProvider.jsx'
import router from './router.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DenunciasProvider>
      <RouterProvider router={router} />
    </DenunciasProvider>
  </React.StrictMode>,
)
