import Loginform from '../components/Loginform'

export default function Layout() {
  return (
    <div className='flex flex-col items-center max-w-4xl m-auto mt-10 rounded-lg shadow-lg App md:mt-28 md:flex-row p-9'>
       <img src='../img/logo.svg' alt='Imagen de Logotipo' className='w-48 md:w-80'/> 
       <Loginform /> 
    </div>
  )
}
