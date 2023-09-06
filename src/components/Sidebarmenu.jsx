'use client';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sidebar } from 'flowbite-react';
import ListPages from '../routes/ListPages';
import { HiMenu, HiArrowLeft } from 'react-icons/hi';
import { useUiStore } from '../hooks/useUiStore';


export default function Sidebarmenu() {
  const { list } = ListPages();
  const navigate = useNavigate('')
  const [isOpen, setIsOpen] = useState(true);
  const { selectedLink } = useUiStore()

  return (
    <>
      {!isOpen ?
        (
          <button onClick={() => setIsOpen(!isOpen)}
            className='fixed z-30 items-center cursor-pointer top-20 left-1 w-[100%]'
            fill='#440412'
            viewBox='0 0 100 80'
            title='Mostrar Menú'
          >
            <HiMenu className='rounded-full shadow-sm shadow-gray-500 text-black h-7 w-7' />
          </button>
        ) :
        (
          <Sidebar className='bg-gray-500 h-screen'>
            <button onClick={() => setIsOpen(!isOpen)}
              className='font-bold cursor-pointer top-20 left-4 w-[100%]'
              fill='#440412'
              viewBox='0 0 100 80'
              title='Ocultar Menú'>
              <HiArrowLeft className='rounded-full shadow-sm shadow-gray-500 text-black h-7 w-7' />
            </button>
            <Sidebar.Items>
              <Sidebar.ItemGroup>
                {
                  list.map((item) => (
                    <Sidebar.Item
                      key={item.title}
                      className={`cursor-pointer ${selectedLink === item.link ? 'bg-gray-200' : ''}`}
                      onClick={() => navigate(item.link)}
                    >
                      <div className='md:visible'>
                        <div className='flex items-center'>
                          <span className='text-2xl text-gray-500 mr-2'>{item.icon}</span>
                          <span>{item.title}</span>
                        </div>

                      </div>
                    </Sidebar.Item>
                  ))
                }
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </Sidebar>
        )
      }
    </>
  )
}
