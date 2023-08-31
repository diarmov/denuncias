import { useEffect } from 'react'
import { useResolucionStore } from '../../hooks/useResolucionStore'
import { Table } from 'flowbite-react'

export const DetailResolucion = () => {
  const { resolucion, recursos, onGetRecursos } = useResolucionStore()

  useEffect(() => {
    if( resolucion ) onGetRecursos( resolucion.id )       
  }, [resolucion])

  return (
    <div className='text-center'>
        <p className="text-3xl font-bold">Resolución </p>
        <p className='text-1xl'>Se muestran la información a detalle de la resolución</p>
      
        <div className='flex mt-11 justify-evenly flex-nowrap'>
            <div className='flex-1 md:flex-none rounded-md shadow-lg mr-4 w-64 border'>
                <div>
                    <p className='relative px-5 py-6 z-10 bg-red-800 text-white font-semibold rounded-lg  w-max left-5 bottom-6 shadow-md'>Datos Generales</p>
                    <div className='ml-5 mt-3 text-left'>
                        <p><span className='font-semibold mr-3'>Folio UIF:</span> { resolucion.foliouif } </p>
                        <p><span className='font-semibold mr-3'>Folio:</span> { resolucion.folio } </p>
                        <p><span className='font-semibold mr-3'>Fecha:</span> { resolucion.fecha } </p>
                        <p><span className='font-semibold mr-3'>Estatus:</span> { resolucion.estatus } </p>
                        <p><span className='font-semibold mr-3'>Ubicación:</span> { resolucion.ubicacion } </p>
                    </div>
                </div>
            </div>
            <div className='flex-1 rounded-lg shadow-lg border'>
                <div className='relative px-5 py-6 z-10 bg-red-800 text-white font-semibold rounded-lg  w-max left-5 bottom-6 shadow-md'>Recursos de inconformidad</div>
                <div className='mt-4'>
                <Table>
                    <Table.Head>
                        <Table.HeadCell>
                            Folio
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Fecha
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Tipo
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {
                            recursos?.map(recurso => (
                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={recurso.id}>
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                      { recurso.folio }
                                    </Table.Cell>
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                      { recurso.fecha }
                                    </Table.Cell>
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                      { recurso.tipo }
                                    </Table.Cell>
                                </Table.Row>
                            ))
                        }
                    </Table.Body>
                </Table>
                </div>
            </div>
        </div>
    </div>
  )
}