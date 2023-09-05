import { Table } from 'flowbite-react';
import { useDenunciasStore } from '../../hooks/useDenunciasStore';


export const TableTipo = ({ total }) => {
  const { clasificacionId } = useDenunciasStore()



  return (
    <Table hoverable>
        <Table.Head>
          <Table.HeadCell>
            Dependencia
          </Table.HeadCell>
          <Table.HeadCell>
            Total de denuncias
          </Table.HeadCell>
          
        </Table.Head>
        <Table.Body className="divide-y">
          {
              clasificacionId.map((denuncia, index) => (
                  <Table.Row className="bg-white" key={ index }>                           
                    
                    <Table.Cell className="whitespace-nowrap">                       
                         { denuncia.dependencia }
                    </Table.Cell>

                    <Table.Cell className='whitespace-nowrap text-center'>
                         { denuncia.total }
                    </Table.Cell>
                  </Table.Row>
              ))
          }
        </Table.Body>
    </Table>
  )
}


