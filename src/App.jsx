import { RouterProvider } from 'react-router-dom'
import { RouterDenuncias } from './routes/RouterDenuncias'
import { useAuthStore } from './hooks/useAuthStore'
import { useEffect } from 'react'

function App() {
  //const { checkAuthToken, status } = useAuthStore()
  const { getRoutes } = RouterDenuncias()
  const status = 'authenticated'
  
  // useEffect(() => {
  //   checkAuthToken();
  // }, []);

  const router = getRoutes( status )

  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
