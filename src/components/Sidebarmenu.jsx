'use client';
import { useNavigate } from 'react-router-dom';
import { Sidebar } from 'flowbite-react';
import { HiInbox, HiUser, HiMenuAlt1, HiClipboardList, HiSearch, HiAnnotation, HiChartSquareBar } from 'react-icons/hi';


export default function Sidebarmenu() {
  const navigate = useNavigate('')

  return (
    <Sidebar className='bg-gray-500 h-screen'>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item
            icon={HiMenuAlt1}
          >
            <p className='md:visible'>
              Menú
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            href="#"
            onClick={() => navigate('inicio') }
            icon={HiInbox}
          >
            <p>
              Tablero
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            href="#"
            onClick={() => navigate('busqueda') }
            icon={HiSearch}
          >
            <p>
              Búsqueda
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            href="#"
            onClick={() => navigate('tipo') }
            icon={HiAnnotation}
          >
            <p>
              Tipo de Denuncia
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            href="#"
            onClick={() => navigate('estadisticas') }
            icon={HiChartSquareBar}
          >
            <p>
              Estadísticas
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            href="#"
            onClick={() => navigate('usuarios') }
            icon={HiUser}
          >
            <p>
              Users
            </p>
          </Sidebar.Item>
          <Sidebar.Collapse
            icon={HiClipboardList}
            label="Catálogos"
          >
            <Sidebar.Item href="#">
            Tipo de Auditorías
            </Sidebar.Item>
            <Sidebar.Item href="#">
              Periodos
            </Sidebar.Item>
            <Sidebar.Item href="#">
              Dependencias
            </Sidebar.Item>
            <Sidebar.Item href="#">
              Programa o Fondo
            </Sidebar.Item>
          </Sidebar.Collapse>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>                                                                                                                                                                                                                               
  )
}
