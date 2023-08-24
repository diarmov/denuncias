'use client';

import { useEffect } from 'react';

import { Table, Tooltip,  Pagination} from 'flowbite-react';
import{ HiPlusCircle } from 'react-icons/hi';

import { useDenunciasStore } from '../hooks/useDenunciasStore';
import { useCatalogoStore } from '../hooks/useCatalogoStore';
import { useUiStore } from '../hooks/useUiStore';
import { FormDenuncia, Search } from '../components/denuncias';
import { PopUp } from '../components/ui';

const Denuncias = () => {
  const { denuncias, search, onGetDenuncias, onSetDenuncia } = useDenunciasStore()
  const { origen, onGetCatalogos } = useCatalogoStore()
  const { onModal } = useUiStore()
 
  useEffect(() => {
    if(denuncias.length === 0) onGetDenuncias()
    if(origen.length === 0) onGetCatalogos()
  },[])

  const sizeText = ( text ) => { 
    if( text.length > 15  )
        return text.substring(0, 15)  + '...'
    else return text
  }

  const onChagePage = ( page ) => {
    onGetDenuncias( page )
  }

  const onEdit = ( denuncia ) => {
    onSetDenuncia(denuncia)
    onModal('default')
  }
  
  return (
  <div className='container px-4 relative overflow-x-auto mb-6'>
      <div className=' text-center pt-6 pb-10'>
        <p className='text-2xl md:text-4xl'>Listado de Denuncias</p>
        <p className='text-2xl hidden md:block'>Podras buscar agregar y modificar carpetas de denuncia </p>
      </div>
    
      <div className='flex justify-between'>
        <Search /> 

        <PopUp
          title='Agregar Denuncia'
          icon={<HiPlusCircle  className='text-lg'/>} 
          textButton='Denuncia'
        >
          <FormDenuncia />
        </PopUp>  
      </div>

      <Table hoverable>
        <Table.Head>
        <Table.HeadCell>
            Origen
          </Table.HeadCell>
          <Table.HeadCell>
            Etapa
          </Table.HeadCell>
          <Table.HeadCell>          
            Estatus          
          </Table.HeadCell>
          <Table.HeadCell>          
            Asunto          
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
              denuncias.data?.map((denuncia, index) => (
                  <Table.Row className="bg-white" key={ index }>
                    <Table.Cell className="whitespace-nowrap text-gray-900 ">
                        <Tooltip content={ denuncia.origen }>
                            { sizeText( denuncia.origen) }
                        </Tooltip>
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

                    <Table.Cell className="whitespace-nowrap">
                        <Tooltip content={ denuncia.asunto }>
                            { sizeText( denuncia.asunto) }
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
                        href="#"
                        onClick={() => onEdit(denuncia) }
                        >
                          <p>Edit</p>
                        </a> 
                    </Table.Cell>
                  </Table.Row>
              ))

          }
        </Table.Body>
      </Table>
      {
        (denuncias.current_page && !search)  && (
           <div className='flex flex-row-reverse mt-2'>
             <Pagination
                currentPage={denuncias.current_page}
                nextLabel="Siguiente"
                onPageChange={(page) => onChagePage(page)}
                previousLabel="Anterior"
                totalPages={denuncias.last_page}
              />
           </div>  
        )
      }    

  </div>
  )
}

export default Denuncias
