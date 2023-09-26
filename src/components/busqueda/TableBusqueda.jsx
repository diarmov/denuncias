import { useState } from 'react';
import { Pagination, Table, Tooltip} from 'flowbite-react';
import { useBusquedaStore } from '../../hooks/useBusquedaStore';
import { HiExclamation } from 'react-icons/hi';

import { PopUp } from "../../components/ui";
import { useUiStore } from '../../hooks/useUiStore';

export const TableBusqueda = () => {
  const { paginate, search, onGetPaginate  } = useBusquedaStore()
  const { onModal } = useUiStore()
  const [asunto, setAsunto] = useState('')

  const sizeText = ( text ) => { 
    if( text?.length > 15  )
        return text.substring(0, 15)  + '...'
    else return text
  }

  const onChagePage = ( page ) => {
    onGetPaginate( search, page  )
  }

  const handleModal = ( asunto ) => {
      setAsunto( asunto )
      onModal( 'default' )
  }

  return (
    <>

     <PopUp
        title ='Asunto/Motivo/Denominacion'
     >
      <p>{asunto}</p>
     </PopUp>
     {
        (paginate.current_page )  && (
           <div className='flex flex-row-reverse mt-2 mb-2'>
             <Pagination
                currentPage={paginate.current_page}
                nextLabel="Siguiente"
                onPageChange={(page) => onChagePage(page)}
                previousLabel="Anterior"
                totalPages={paginate.last_page}
              />
           </div>  
        )
      }   
    <Table hoverable>
        <Table.Head>
          <Table.HeadCell>
            Dependencia
          </Table.HeadCell>
          <Table.HeadCell>
            Ubicación
          </Table.HeadCell>
          <Table.HeadCell>
            Etapa
          </Table.HeadCell>
          {/* <Table.HeadCell>          
            Estatus          
          </Table.HeadCell>           */}
          <Table.HeadCell>
            Clasificación          
          </Table.HeadCell>
          <Table.HeadCell>
                      
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {
              paginate.data?.map((denuncia, index) => (
                  <Table.Row className="bg-white" key={ index }>
                    <Table.Cell className='whitespace-nowrap'>                        
                            { denuncia.dependencia }
                    </Table.Cell>

                    <Table.Cell className="whitespace-nowrap text-gray-900 ">
                        <Tooltip content={ denuncia.ubicacion }>
                            { sizeText( denuncia.ubicacion) }
                        </Tooltip>
                    </Table.Cell>
                    <Table.Cell className='whitespace-nowrap'>
                        <Tooltip content={ denuncia.etapa }>
                            { sizeText( denuncia.etapa) }
                        </Tooltip>
                    </Table.Cell>                   
                    
                    {/* <Table.Cell className="whitespace-nowrap">
                        <Tooltip content={ denuncia.estatus }>
                            { sizeText( denuncia.estatus) }
                        </Tooltip>
                    </Table.Cell> */}

                    <Table.Cell className='whitespace-nowrap'>
                        <Tooltip content={ denuncia.clasificacion }>
                            { sizeText( denuncia.clasificacion ) }
                        </Tooltip>
                    </Table.Cell>

                    <Table.Cell className='whitespace-nowrap'>
                      <a className='cursor-pointer' onClick={() =>  handleModal(denuncia.asunto)}><span className='text-2xl text-yellow-500'><HiExclamation /></span></a>
                    </Table.Cell>
                  </Table.Row>
              ))
          }
        </Table.Body>
    </Table>
    </>
    
  )
}


