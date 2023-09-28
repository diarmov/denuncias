import { Alert, Table } from 'flowbite-react';
import { HiFolderOpen, HiOutlineServer } from 'react-icons/hi';

import { useTableroStore } from '../../hooks/useTableroStore';

export default function TablaEstadosPopup() {
  const { datamodal, denunciasEstatus, statusTotales, impugnaciones } = useTableroStore()

  return (
    <>

      <div className='flex justify-around'>
        {statusTotales[0]?.oic != 0 &&
          <div className='text-center'>
            <div className='flex justify-center'>
              <div className='block w-12 h-12 p-3 font-bold text-center text-white bg-red-900 rounded-lg shadow-lg text-1xl'>
                OIC
              </div>
            </div>
            <p className='mt-3 font-semibold text-center text-gray-700'>{statusTotales[0]?.oic}</p>
          </div>
        }
        {statusTotales[0]?.uif != 0 &&
          <div className='text-center'>
            <div className='flex justify-center'>
              <div className='block w-12 h-12 p-3 font-bold text-center text-white bg-red-900 rounded-lg shadow-lg text-1xl'>
                UIF
              </div>
            </div>
            <p className='mt-3 font-semibold text-center text-gray-700'>{statusTotales[0]?.uif}</p>
          </div>
        }
        {statusTotales[0]?.dr != 0 &&
          <div className='text-center'>
            <div className='flex justify-center'>
              <div className='block w-12 h-12 p-3 font-bold text-center text-white bg-red-900 rounded-lg shadow-lg text-1xl'>
                DR
              </div>
            </div>
            <p className='mt-3 font-semibold text-center text-gray-700'>{statusTotales[0]?.dr}</p>
          </div>
        }
        {statusTotales[0]?.drsp != 0 &&
          <div className='text-center'>
            <div className='flex justify-center'>
              <div className='block w-12 h-12 p-1 font-bold text-center text-white bg-red-900 rounded-lg shadow-lg text-1xl'>
                DRSP
              </div>
            </div>
            <p className='mt-3 font-semibold text-center text-gray-700'>{statusTotales[0]?.drsp}</p>
          </div>}
        {statusTotales[0]?.tja != 0 &&
          <div className='text-center'>
            <div className='flex justify-center'>
              <div className='block w-12 h-12 p-3 font-bold text-center text-white bg-red-900 rounded-lg shadow-lg text-1xl'>
                TJA
              </div>
            </div>
            <p className='mt-3 font-semibold text-center text-gray-700'>{statusTotales[0]?.tja}</p>
          </div>}
        {statusTotales[0]?.jfc != 0 &&
          <div className='text-center'>
            <div className='flex justify-center'>
              <div className='block w-12 h-12 p-3 font-bold text-center text-white bg-red-900 rounded-lg shadow-lg text-1xl'>
                JFC
              </div>
            </div>
            <p className='mt-3 font-semibold text-center text-gray-700'>{statusTotales[0]?.jfc}</p>
          </div>}
        {statusTotales[0]?.dc != 0 &&
          <div className='text-center'>
            <div className='flex justify-center'>
              <div className='block w-12 h-12 p-3 font-bold text-center text-white bg-red-900 rounded-lg shadow-lg text-1xl'>
                DC
              </div>
            </div>
            <p className='mt-3 font-semibold text-center text-gray-700'>{statusTotales[0]?.dc}</p>
          </div>}

      </div>

      {
        datamodal.idEtapa === 5 && (
          <div className="container px-20">
            <Alert color="success">
              <span className=''>
                <p className='text-center'>
                  De los  <span className="font-medium">{statusTotales[0]?.uif + statusTotales[0]?.oic + statusTotales[0]?.dr + statusTotales[0]?.drsp + statusTotales[0]?.tja + statusTotales[0]?.jfc + statusTotales[0]?.dc}</span> expedientes Se generaron  <span className="font-medium">{impugnaciones}</span> impugnaciones
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
          {statusTotales[0]?.oic != 0 &&
            <Table.HeadCell className='text-center whitespace-nowrap'>
              OIC
            </Table.HeadCell>}
          {statusTotales[0]?.uif != 0 &&
            <Table.HeadCell className='text-center whitespace-nowrap'>
              UIF
            </Table.HeadCell>}
          {statusTotales[0]?.dr != 0 &&
            <Table.HeadCell className='text-center whitespace-nowrap'>
              DR
            </Table.HeadCell>}
          {statusTotales[0]?.drsp != 0 &&
            <Table.HeadCell className='text-center whitespace-nowrap'>
              DRSP
            </Table.HeadCell>}
          {statusTotales[0]?.tja != 0 &&
            <Table.HeadCell className='text-center whitespace-nowrap'>
              TJA
            </Table.HeadCell>}
          {statusTotales[0]?.jfc != 0 &&
            <Table.HeadCell className='text-center whitespace-nowrap'>
              JFC
            </Table.HeadCell>}
          {statusTotales[0]?.dc != 0 &&
            <Table.HeadCell className='text-center whitespace-nowrap'>
              DC
            </Table.HeadCell>}
        </Table.Head>
        <Table.Body className="divide-y">
          {
            denunciasEstatus.map((denuncia, index) => (
              <Table.Row className="bg-white" key={index}>

                <Table.Cell className="whitespace-nowrap">
                  {denuncia.estatus}
                </Table.Cell>

                {statusTotales[0]?.oic != 0 &&
                  <Table.Cell className='text-center whitespace-nowrap'>
                    {denuncia.oic}
                  </Table.Cell>}
                {statusTotales[0]?.uif != 0 &&
                  <Table.Cell className='text-center whitespace-nowrap'>
                    {denuncia.uif}
                  </Table.Cell>}
                {statusTotales[0]?.dr != 0 &&
                  <Table.Cell className='text-center whitespace-nowrap'>
                    {denuncia.dr}
                  </Table.Cell>}
                {statusTotales[0]?.drsp != 0 &&
                  <Table.Cell className='text-center whitespace-nowrap'>
                    {denuncia.drsp}
                  </Table.Cell>}
                {statusTotales[0]?.tja != 0 &&
                  <Table.Cell className='text-center whitespace-nowrap'>
                    {denuncia.tja}
                  </Table.Cell>}
                {statusTotales[0]?.jfc != 0 &&
                  <Table.Cell className='text-center whitespace-nowrap'>
                    {denuncia.jfc}
                  </Table.Cell>}
                {statusTotales[0]?.dc != 0 &&
                  <Table.Cell className='text-center whitespace-nowrap'>
                    {denuncia.dc}
                  </Table.Cell>}
              </Table.Row>
            ))
          }
        </Table.Body>
      </Table>
    </>
  )
}
