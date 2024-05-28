import { RouterDenuncias } from './routes/RouterDenuncias'
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
