
import { Pagination, Table, Tooltip } from 'flowbite-react';
import { useTableroStore } from '../../hooks/useTableroStore';

export default function TablaDependenciasPopup() {
    const { denunciasEtapa } = useTableroStore()

    return (
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>
              Dependencia
            </Table.HeadCell>
            <Table.HeadCell>
              Total de OIC
            </Table.HeadCell>
            <Table.HeadCell>
              Total de UIF
            </Table.HeadCell>          
          </Table.Head>
        <Table.Body className="divide-y">
          {
                denunciasEtapa.map((denuncia, index) => (
                  <Table.Row className="bg-white" key={ index }>                           
                    
                    <Table.Cell className="whitespace-nowrap">                       
                         { denuncia.dependencia }
                    </Table.Cell>

                    <Table.Cell className='whitespace-nowrap text-center'>
                         { denuncia.oic }
                    </Table.Cell>

                    <Table.Cell className='whitespace-nowrap text-center'>
                         { denuncia.uif }
                    </Table.Cell>
                  </Table.Row>
              ))
          }
        </Table.Body>
        </Table>
    )
}
