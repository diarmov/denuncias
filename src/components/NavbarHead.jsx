'use client';

import { Dropdown, Navbar, Avatar } from 'flowbite-react';
import { NavLink } from 'react-router-dom';

export default function NavbarHead() {
  return (
    <Navbar
      fluid
      rounded
      className='bg-slate-300 w-auto'
    >
      <Navbar.Brand href="/">
        <img
          alt="Flowbite React Logo"
          className="mr-3 h-6 sm:h-9"
          src="../img/logo.svg"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Sistema Integral de Seguimiento a Denuncias
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          inline
          label={<Avatar alt="User settings" img="../img/Humbelina.png" rounded/>}
        >
          <Dropdown.Header>
            <span className="block text-sm">
              Nombre de Usuario
            </span>
            <span className="block truncate text-sm font-medium">
              correo@correo.com
            </span>
          </Dropdown.Header>
          <NavLink to="/inicio">
            <Dropdown.Item >
              Tablero
            </Dropdown.Item>
          </NavLink>
          <Dropdown.Divider />
          <NavLink to="/">
            <Dropdown.Item>
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
