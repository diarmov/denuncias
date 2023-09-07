'use client';

import { Dropdown, Avatar } from 'flowbite-react';
import { NavLink, useNavigate } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';

import { useAuthStore } from '../hooks/useAuthStore';
import { useUiStore } from '../hooks/useUiStore';
import { PopUpPwd } from '../components/ui';
import ChangePwd from './Users/ChangePwd';
import ListPages from '../routes/ListPages';
import { useState } from 'react';

export default function NavbarHead() {
  const { onLogout, active } = useAuthStore()
  const { onModalPwd, selectedLink } = useUiStore()
  const { list } = ListPages();
   const navigate = useNavigate()
  const [menu, setMenu] = useState(false)
 
  const handleModal = () => {
    onModalPwd('default')
  }

  const handleMenu = ( link ) => {
    navigate( link )
    setMenu(false)
  }

  return (
    <>
      <PopUpPwd
        title = 'Cambiar contraseña'
        size='lg'
      >
        <ChangePwd />
      </PopUpPwd>


      <div 
        className='flex border h-16 items-center justify-between'
        style={{ background: '#7E212C', color: 'white'}}
        >
          <div className='flex'>
            <div className='ml-2 flex items-center'>
              <img
                alt="Logo Gobierno del Estado de Zacatecas"
                className="mr-8 h-12"
                src="../img/logo_blanco.png"
              />
              <span className="hidden md:block self-center whitespace-nowrap text-xl font-semibold">
                Sistema Integral de Seguimiento a Denuncias
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 mr-5">
             <div  className='block lg:hidden'>
                <div>
                    <span className='text-2xl cursor-pointer' onClick={()=>setMenu(!menu)}><HiMenu /></span>
                    <div className={`${menu ? 'block' : 'hidden'} absolute z-50 bg-white p-5 right-9 top-14 rounded-md text-gray-500`}>
                      <ul>
                        {
                          list.map((item) => (
                            <div  key={item.title} >
                              <li 
                                onClick={()=>handleMenu( item.link )}
                                className={`${selectedLink === item.link ? 'bg-gray-200' : ''} hover:bg-gray-100 px-1 py-2`}
                              >                             
                                  <div className='flex items-center cursor-pointer'>
                                    <span className='text-1xl mr-2'>{item.icon}</span>
                                    <span className='text-sm'>{item.title}</span>
                                  </div>                            
                                
                              </li>
                              <div className='border-b'></div>
                            </div>
                          )) 
                        }    
                      </ul>
                    </div>
                </div>
              </div>

              <Dropdown
                inline
                label={<Avatar alt="Imagen de usuario" img="../img/Humbelina.png" rounded/>}
              >
               <Dropdown.Header>
                  <span className="block text-sm">
                  { active?.name }
                  </span>
                  <span className="block truncate text-sm font-medium">
                  { active?.email }
                  </span>
                </Dropdown.Header> 
                <NavLink to="/tablero">
                  <Dropdown.Item>
                    Tablero
                  </Dropdown.Item>
                </NavLink>
                <NavLink onClick={handleModal}>
                  <Dropdown.Item>
                    Cambiar contraseña
                  </Dropdown.Item>
                </NavLink>
                <Dropdown.Divider />
                <NavLink>
                  <Dropdown.Item onClick={ onLogout }>
                    Cerrar Sesión
                  </Dropdown.Item>
                </NavLink>
              </Dropdown> 

              
            </div>

      </div>
    </>
 )
}
