import { RouterProvider } from 'react-router-dom'
import { RouterDenuncias } from './routes/RouterDenuncias'
import { useAuthStore } from './hooks/useAuthStore'
import { useEffect } from 'react'
import { CheckingAuth } from './components/utils'

function App() {
  const { checkAuthToken, status } = useAuthStore()
  const { getRoutes } = RouterDenuncias()

  
  useEffect(() => {
    checkAuthToken();
  }, []);

  if ( status === 'checking' ) {
    return (
        <CheckingAuth />
    )
  }

  const router = getRoutes( status )

  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
