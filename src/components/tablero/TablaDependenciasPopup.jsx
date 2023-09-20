
import { Pagination, Table, Tooltip } from 'flowbite-react';
import { useTableroStore } from '../../hooks/useTableroStore';

export default function TablaDependenciasPopup() {
    const { denunciasEtapa, etapaTotales } = useTableroStore()

    return (
        <>
            <div className='flex justify-around'>
                <div className='text-center'>
                    <div className='flex justify-center'>
                        <div className='p-3 bg-red-900 block w-12 h-12 rounded-lg text-center text-white text-1xl shadow-lg font-bold'>
                            OIC
                        </div>
                    </div>
                    <p className='mt-3 font-semibold text-gray-700 text-center'>{etapaTotales[0]?.oic}</p>
                </div>

                <div className='text-center'>
                    <div className='flex justify-center'>
                        <div className='p-3 bg-red-900 block w-12 h-12 rounded-lg text-center text-white text-1xl shadow-lg font-bold'>
                            UIF
                        </div>
                    </div>
                    <p className='mt-3 font-semibold text-gray-700 text-center'>{etapaTotales[0]?.uif}</p>
                </div>
            </div>
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
                            <Table.Row className="bg-white" key={index}>

                                <Table.Cell className="whitespace-nowrap">
                                    {denuncia.dependencia}
                                </Table.Cell>

                                <Table.Cell className='whitespace-nowrap text-center'>
                                    {denuncia.oic}
                                </Table.Cell>

                                <Table.Cell className='whitespace-nowrap text-center'>
                                    {denuncia.uif}
                                </Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
        </>
    )
}
