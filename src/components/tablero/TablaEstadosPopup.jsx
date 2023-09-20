import { Table } from 'flowbite-react';
import { HiFolderOpen, HiOutlineServer } from 'react-icons/hi';

import { useTableroStore } from '../../hooks/useTableroStore';

export default function TablaEstadosPopup() {
    const { denunciasEstatus, statusTotales } = useTableroStore()
    return (
      <>
        <div className='flex justify-around'>
          <div className='text-center'>
            <div className='flex justify-center'>
              <div className='p-3 bg-red-900 block w-12 h-12 rounded-lg text-center text-white text-1xl shadow-lg font-bold'>
                OIC
              </div>
            </div>
            <p className='mt-3 font-semibold text-gray-700 text-center'>{statusTotales[0]?.oic}</p>
          </div>

          <div className='text-center'>
            <div className='flex justify-center'>
              <div className='p-3 bg-red-900 block w-12 h-12 rounded-lg text-center text-white text-1xl shadow-lg font-bold'>
                UIF
              </div>
            </div>
            <p className='mt-3 font-semibold text-gray-700 text-center'>{statusTotales[0]?.uif}</p>
          </div>
        </div>

        <Table hoverable>
        <Table.Head>
          <Table.HeadCell>
            Estatus
          </Table.HeadCell>
          <Table.HeadCell className='whitespace-nowrap text-center'>
            Total de denuncias
          </Table.HeadCell>         
        </Table.Head>
        <Table.Body className="divide-y">
        {
              denunciasEstatus.map((denuncia, index) => (
                <Table.Row className="bg-white" key={ index }>                           
                  
                  <Table.Cell className="whitespace-nowrap">                       
                       { denuncia.estatus }
                  </Table.Cell>

                  <Table.Cell className='whitespace-nowrap text-center'>
                       { denuncia.total }
                  </Table.Cell>
                </Table.Row>
            ))
        }
        </Table.Body>
      </Table>
      </>
    )
}
