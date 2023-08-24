import { RouterProvider } from 'react-router-dom'
import { RouterDenuncias } from './routes/RouterDenuncias'
import { useAuthStore } from './hooks/useAuthStore'
import { useEffect } from 'react'
import { Loading } from './components/ui'
import { useUiStore } from './hooks/useUiStore'

function App() {
  const { loading } = useUiStore()

  return (
    <>        
        { loading && <Loading /> }
        <RouterDenuncias />
    </>
  )
}


export default App
