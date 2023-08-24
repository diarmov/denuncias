'use client';
import { useNavigate } from 'react-router-dom';
import { Sidebar } from 'flowbite-react';
import ListPages from '../routes/ListPages';


export default function Sidebarmenu() {
  const { list } = ListPages();
  const navigate = useNavigate('')

  return (
    <Sidebar className='bg-gray-500 h-screen'>
      <Sidebar.Items>
        <Sidebar.ItemGroup>  
        {
          list.map((item) => (
              <Sidebar.Item
                key={item.title}
                className="cursor-pointer"
                onClick={() => navigate(item.link) }
              >
                <div className='md:visible'>
                  <div className='flex items-center'>
                    <span className='text-2xl text-gray-500 mr-2'>{ item.icon }</span>
                    <span>{ item.title }</span>
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
