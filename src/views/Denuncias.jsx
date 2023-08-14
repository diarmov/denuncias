
import { useEffect } from 'react';

import { Table, Tooltip } from 'flowbite-react';
import { useDenunciasStore } from '../hooks/useDenunciasStore';

const Denuncias = () => {
  const { denuncias, onGetDenuncias } = useDenunciasStore()
 
  useEffect(() => {
    if(denuncias.length === 0) onGetDenuncias()
  },[])

  const sizeText = ( text ) => { 
    if( text.length > 15  )
        return text.substring(0, 10)  + '...'
    else return text
  }


  return (
  <div className='container p-6'>
      <div className=' text-center pt-6 pb-10'>
        <p className='text-2xl md:text-4xl'>Listado de Denuncias</p>
        <p className='text-2xl hidden md:block'>Podras realizar la actualización de las carpetas de denuncia </p>
      </div>

      <Table className='text-center'>
      <Table.Head>
        <Table.HeadCell>
          Origen
        </Table.HeadCell>
        <Table.HeadCell>
          Folio OIC
        </Table.HeadCell>
        <Table.HeadCell>
          Folio Uif
        </Table.HeadCell>
        <Table.HeadCell>
          Etapa
        </Table.HeadCell>
        <Table.HeadCell>          
           Estatus          
        </Table.HeadCell>
        <Table.HeadCell>
            Clasificación          
        </Table.HeadCell>
        <Table.HeadCell>
           Dependencia
        </Table.HeadCell>
        <Table.HeadCell>
           Ubicación
        </Table.HeadCell>
        <Table.HeadCell>
           Acciones
        </Table.HeadCell>
      </Table.Head>

      <Table.Body className="divide-y">
        {
            denuncias?.map((denuncia, index) => (
                <Table.Row className="bg-white" key={ index }>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 ">
                    <Tooltip content={ denuncia.origen }>
                        { sizeText( denuncia.origen) }
                    </Tooltip>
                </Table.Cell>

                <Table.Cell>
                    { denuncia.numExpOic }
                </Table.Cell>

                <Table.Cell>
                    { denuncia.numExpUif }
                </Table.Cell>

                <Table.Cell className='whitespace-nowrap'>
                    <Tooltip content={ denuncia.etapa }>
                        { sizeText( denuncia.etapa) }
                    </Tooltip>
                </Table.Cell>
                
                
                <Table.Cell className="whitespace-nowrap">
                    <Tooltip content={ denuncia.estatus }>
                        { sizeText( denuncia.estatus) }
                    </Tooltip>
                </Table.Cell>

                <Table.Cell className='whitespace-nowrap'>
                    <Tooltip content={ denuncia.clasificacion }>
                        { sizeText( denuncia.clasificacion ) }
                    </Tooltip>
                </Table.Cell>

                <Table.Cell className='whitespace-nowrap'>
                    <Tooltip content={ denuncia.dependencia }>
                        { sizeText( denuncia.dependencia ) }
                    </Tooltip>
                </Table.Cell>

                <Table.Cell className='whitespace-nowrap'>
                    <Tooltip content={ denuncia.ubicacion }>
                        { sizeText( denuncia.ubicacion ) }
                    </Tooltip>
                </Table.Cell>
                
                <Table.Cell>
                    <a
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                    href="/tables"
                    >
                    <p>
                        Edit
                    </p>
                    </a>
                </Table.Cell>
                </Table.Row>
            ))

        }
      </Table.Body>
    </Table>
  </div>
  )
}

export default Denuncias
