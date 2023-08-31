
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Table, Tooltip,  Pagination, Button} from 'flowbite-react';
import { HiPlusCircle } from 'react-icons/hi';

import { useDenunciasStore } from '../hooks/useDenunciasStore';
import { useCatalogoStore } from '../hooks/useCatalogoStore';
import { Search } from '../components/ui';
import { useUiStore } from '../hooks/useUiStore';

const Denuncias = () => {
  const { denuncias, onGetDenuncias, onSetDenuncia, onSearch } = useDenunciasStore()
  const { origen, onGetCatalogos } = useCatalogoStore()
  const { search } = useUiStore()
  const navigate = useNavigate();
 
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
    onSetDenuncia( denuncia )
    navigate('/denuncias-manage')
  }
  
  return (
  <div className='container px-4 relative overflow-x-auto mb-6'>
      <div className=' text-center pt-6 pb-10'>
        <p className='text-2xl md:text-4xl'>Listado de Denuncias</p>
        <p className='text-2xl hidden md:block'>Podras buscar agregar y modificar carpetas de denuncia </p>
      </div>
    
      <div className='flex justify-between'>
        <Search 
          onGetData={ onGetDenuncias }
          onSearch={ onSearch }
        /> 
        <Button onClick={() => navigate('/denuncias-manage') }> 
         <span className='text-lg mr-1'><HiPlusCircle /></span>Denuncia
        </Button>
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
                          onClick={() => onEdit(denuncia) }
                        >
                          <p className='cursor-pointer'>Edit</p>
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
