import { Pagination, Table, Tooltip} from 'flowbite-react';
import { useBusquedaStore } from '../../hooks/useBusquedaStore';

export const TableBusqueda = () => {
  const { paginate, search, onGetPaginate  } = useBusquedaStore()

  const sizeText = ( text ) => { 
    if( text?.length > 15  )
        return text.substring(0, 15)  + '...'
    else return text
  }

  const onChagePage = ( page ) => {
    onGetPaginate( search, page  )
  }

  return (
    <>
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
            Folios
          </Table.HeadCell>
          <Table.HeadCell>
            Dependencia
          </Table.HeadCell>
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
            Clasificación          
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {
              paginate.data?.map((denuncia, index) => (
                  <Table.Row className="bg-white" key={ index }>
                    <Table.Cell className="whitespace-nowrap text-gray-900 ">
                        {
                          denuncia.numExpOic !== '' && (
                            <Tooltip content={ denuncia.numExpOic }>
                                { sizeText( denuncia.numExpOic) }
                            </Tooltip>
                          )
                        }

                        {
                          denuncia.numExpUif !== '' && (
                            <Tooltip content={ denuncia.numExpUif }>
                                { sizeText( denuncia.numExpUif) }
                            </Tooltip>
                          )
                        }

                        {
                          denuncia.numExpSubs !== '' && (
                            <Tooltip content={ denuncia.numExpSubs }>
                                { sizeText( denuncia.numExpSubs) }
                            </Tooltip>
                          )
                        }
                    </Table.Cell>

                    <Table.Cell className='whitespace-nowrap'>
                        <Tooltip content={ denuncia.dependencia }>
                            { sizeText( denuncia.dependencia ) }
                        </Tooltip>
                    </Table.Cell>

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

                    <Table.Cell className='whitespace-nowrap'>
                        <Tooltip content={ denuncia.clasificacion }>
                            { sizeText( denuncia.clasificacion ) }
                        </Tooltip>
                    </Table.Cell>
                  </Table.Row>
              ))
          }
        </Table.Body>
    </Table>
    </>
    
  )
}


