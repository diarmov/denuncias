import { Outlet} from 'react-router-dom'
import NavbarHead from '../components/NavbarHead'
import Sidebarmenu from '../components/Sidebarmenu'

const Inicio = () => {
  return (
        <div className='text- sm:text-lg'>
            <NavbarHead />
            <div className=' w-[100%] flex text-sm sm:text-lg'>
              <Sidebarmenu />
              <div className="md:flex flex-col w-[100%]">
                <Outlet/>
              </div>
            </div>
        </div>
  )
}

export default Inicio