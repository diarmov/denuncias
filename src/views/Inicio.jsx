import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom'
import NavbarHead from '../components/NavbarHead'
import Sidebarmenu from '../components/Sidebarmenu'
import ListPages from '../routes/ListPages';
import { CheckingAuth } from '../components/ui';

const Inicio = () => {
  const { list, components } = ListPages();
  return (
        <div className='text- sm:text-lg'>
            <NavbarHead />
            <div className=' w-[100%] flex text-sm sm:text-lg'>
              <Sidebarmenu />
              <div className="md:flex flex-col w-[100%]">
              <Suspense fallback={ <CheckingAuth /> }>
              <Routes>
                {list.map(item => (
                    <Route key={ item.title } path={item.link} element={item.component} />            
                ))}  

                {components.map((page, index) => (
                    <Route key={ index } path={page.link} element={page.component} />            
                ))}
              </Routes>
              </Suspense>
              </div>
            </div>
        </div>
  )
}

export default Inicio