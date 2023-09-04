import React from 'react'
import { Table, Pagination, Button, Tooltip } from 'flowbite-react';
import { HiPlusCircle, HiPencil, HiOutlineCheck, HiOutlineBan } from 'react-icons/hi';

export default function Recibidas() {
  return (
    <div className='container'>
        <div className='flex w-full bg-[#440412] text-white text-sm font-bold md:text-lg lg:text:3xl'>
            Denuncias Recibidas
        </div>
        <div className='w-full p-5 flex items-center justify-center'>
            <Table>
                <Button 
                name='Aquí Andamos'
                alt="Boton de prueba"
                />
            </Table>
        </div>
    </div>
  )
}
