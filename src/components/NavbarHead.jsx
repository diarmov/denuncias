'use client';

import { Dropdown, Navbar, Avatar } from 'flowbite-react';
import { NavLink } from 'react-router-dom';
import { useAuthStore } from '../hooks/useAuthStore';

export default function NavbarHead() {
  const { onLogout, active } = useAuthStore()
  return (
    <Navbar
      fluid
      rounded
      className='w-auto text-white'
      style={{ background: '#7E212C'}}
    >
      <Navbar.Brand href="/">
        <img
          alt="Logo Gobierno del Estado de Zacatecas"
          className="mr-8 h-6 sm:h-9"
          src="../img/logo_blanco.png"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold">
          Sistema Integral de Seguimiento a Denuncias
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
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
          <NavLink to="/inicio">
            <Dropdown.Item>
              Tablero
            </Dropdown.Item>
          </NavLink>
          <Dropdown.Divider />
          <NavLink to="/">
            <Dropdown.Item onClick={ onLogout }>
              Cerrar Sesión
            </Dropdown.Item>
          </NavLink>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className='justify-end'>
       {/* <Navbar.Link
          active
          href="#"
        >
          <p>
            Inicio
          </p>
        </Navbar.Link>
        <Navbar.Link href="/acerca">
          Acerca de
        </Navbar.Link>
        <Navbar.Link href="/servicios">
          Servicios
  </Navbar.Link>*/}
      </Navbar.Collapse>
    </Navbar>
 )
}
