import { Alert, Table } from 'flowbite-react';
import { HiFolderOpen, HiOutlineServer } from 'react-icons/hi';

import { useTableroStore } from '../../hooks/useTableroStore';

export default function TablaEstadosPopup() {
  const { datamodal, denunciasEstatus, statusTotales, impugnaciones } = useTableroStore()

  return (
    <>
      <div className='flex justify-around'>
        <div className='text-center'>
          <div className='flex justify-center'>
            <div className='block w-12 h-12 p-3 font-bold text-center text-white bg-red-900 rounded-lg shadow-lg text-1xl'>
              OIC
            </div>
          </div>
          <p className='mt-3 font-semibold text-center text-gray-700'>{statusTotales[0]?.oic}</p>
        </div>

        <div className='text-center'>
          <div className='flex justify-center'>
            <div className='block w-12 h-12 p-3 font-bold text-center text-white bg-red-900 rounded-lg shadow-lg text-1xl'>
              UIF
            </div>
          </div>
          <p className='mt-3 font-semibold text-center text-gray-700'>{statusTotales[0]?.uif}</p>
        </div>
      </div>

     {
      datamodal.idEtapa === 5 && (
        <div className="container px-20">
          <Alert color="success">
            <span className=''>
              <p className='text-center'>               
                De los  <span className="font-medium">{statusTotales[0]?.uif +statusTotales[0]?.oic }</span> expedientes Se generaron  <span className="font-medium">{ impugnaciones }</span> impugnaciones
              </p>
            </span>
          </Alert>
        </div>
      )
     }
      
   

      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>
            Estatus
          </Table.HeadCell>
          <Table.HeadCell className='text-center whitespace-nowrap'>
            Total de denuncias OIC
          </Table.HeadCell>
          <Table.HeadCell className='text-center whitespace-nowrap'>
            Total de denuncias UIF
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {
            denunciasEstatus.map((denuncia, index) => (
              <Table.Row className="bg-white" key={index}>

                <Table.Cell className="whitespace-nowrap">
                  {denuncia.estatus}
                </Table.Cell>

                <Table.Cell className='text-center whitespace-nowrap'>
                  {denuncia.oic}
                </Table.Cell>
                <Table.Cell className='text-center whitespace-nowrap'>
                  {denuncia.uif}
                </Table.Cell>
              </Table.Row>
            ))
          }
        </Table.Body>
      </Table>
    </>
  )
}
