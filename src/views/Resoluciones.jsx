import { useEffect, useState } from 'react';
import { Table, Tooltip,  Pagination } from 'flowbite-react';
import { HiPencil, HiOutlineFolderOpen, HiOutlineExclamationCircle } from 'react-icons/hi';

import { FormResolucion} from '../components/denuncias';
import { Search } from '../components/ui'
import { useResolucionStore } from '../hooks/useResolucionStore';
import { useCatalogoStore } from '../hooks/useCatalogoStore';
import { PopUp } from '../components/ui/PopUp';
import { useUiStore } from '../hooks/useUiStore';
import { FormRecursos, DetailResolucion } from '../components/resoluciones';

const Resoluciones = () => {
  const { resoluciones, onGetResoluciones, onSetResolucion, onSearch  } = useResolucionStore()
  const { origen, estatus, onGetCatalogos, onGetEstatus} = useCatalogoStore()
  const [pageModal, setPageModal] = useState({option:0, title: ''})
  const { onModal } = useUiStore()

  const sizeText = ( text ) => { 
    if( text?.length > 15  )
        return text.substring(0, 15)  + '...'
    else return text
  }

  useEffect(() => {
    if(resoluciones.length === 0) onGetResoluciones()
    if(origen.length === 0) onGetCatalogos()
    if(estatus.length === 0) onGetEstatus(3)
  },[])

  const handleModal = ({ resolucion, option, title  }) => {
    onGetEstatus(3)
    setPageModal({option, title})
    onSetResolucion( resolucion )
    onModal('default')
  }

  const onChagePage = ( page ) => {
    onGetResoluciones( page )
  }
 
  return (
    <div className='container px-4 relative overflow-x-auto mb-6'>
    <div className=' text-center pt-6 pb-10'>
      <p className='text-2xl md:text-4xl'> Resoluciones a las Carpetas de Investigación </p>
      <p className='text-2xl hidden md:block'>Podras buscar y modificar las resoluciones a las carpetas de resolucion </p>
    </div>

    <PopUp title={pageModal.title}>
        {{
            1: <FormResolucion />,
            2: <FormRecursos />,
            3: <DetailResolucion />
        }[pageModal.option]}
    </PopUp>
  
    <div className='flex justify-between'>
      <Search 
        onGetData={ onGetResoluciones }
        onSearch={ onSearch }
      /> 
    </div>

    <Table hoverable>
      <Table.Head>
        <Table.HeadCell>          
          Folio          
        </Table.HeadCell>
        <Table.HeadCell>          
          fecha          
        </Table.HeadCell>
        <Table.HeadCell>
          Estatus          
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
            resoluciones.data?.map((resolucion, index) => (
                <Table.Row className="bg-white" key={ index }>                 
                  
                  <Table.Cell className="whitespace-nowrap">
                      <Tooltip content={ resolucion.folio }>
                          { sizeText( resolucion.folio) }
                      </Tooltip>
                  </Table.Cell>

                  <Table.Cell className="whitespace-nowrap">                      
                        { resolucion.fecha }
                  </Table.Cell>

                  <Table.Cell className='whitespace-nowrap'>
                      <Tooltip content={ resolucion.estatus }>
                          { sizeText( resolucion.estatus ) }
                      </Tooltip>
                  </Table.Cell>

                  <Table.Cell className='whitespace-nowrap'>
                      <Tooltip content={ resolucion.ubicacion }>
                          { sizeText( resolucion.ubicacion ) }
                      </Tooltip>
                  </Table.Cell>
                  
                  <Table.Cell>
                  <div className='flex'>
                        <a
                            className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mx-1"
                            onClick={() => handleModal({resolucion, option: 1, title: 'Modificar Resolucion'}) }
                        >
                            <Tooltip content="Editar">
                            <p className='cursor-pointer text-xl text-gray-500'><HiPencil /></p>
                            </Tooltip>
                        </a>

                        <a
                            className="font-medium text-cyan-600 hover:underline dark:text-cyan-500  mx-1"
                            onClick={() => handleModal({resolucion, option: 2,  title: 'Agregar Impugnación'}) }
                        >
                            <Tooltip content="Agregar recurso"  >
                                <p className='cursor-pointer text-xl text-gray-500'><HiOutlineFolderOpen /></p>
                            </Tooltip>
                        </a>

                        <a
                            className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mx-1"
                            onClick={() => handleModal({resolucion, option: 3, title: 'Información detallada de la resolución'}) }
                        >
                            <Tooltip content="Ver detalle">
                                <p className='cursor-pointer text-xl text-gray-500'><HiOutlineExclamationCircle /></p>
                            </Tooltip>
                        </a>
                      </div>
                  </Table.Cell>
                </Table.Row>
            ))

        }
      </Table.Body>

    </Table>
    {
      (resoluciones.current_page )  && (
         <div className='flex flex-row-reverse mt-2'>
           <Pagination
              currentPage={resoluciones.current_page}
              nextLabel="Siguiente"
              onPageChange={(page) => onChagePage(page)}
              previousLabel="Anterior"
              totalPages={resoluciones.last_page}
            />
         </div>  
      )
      }    

</div>
  )
}

export default Resoluciones
