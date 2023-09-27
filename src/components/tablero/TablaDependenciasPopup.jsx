
import { Pagination, Table, Tooltip } from 'flowbite-react';
import { useTableroStore } from '../../hooks/useTableroStore';

export default function TablaDependenciasPopup() {
    const { denunciasEtapa, etapaTotales } = useTableroStore()

    return (
        <>
            <div className='flex justify-around'>
                {etapaTotales[0]?.oic != 0 &&
                    <div className='text-center'>
                        <div className='flex justify-center'>
                            <div className='block w-12 h-12 p-3 font-bold text-center text-white bg-red-900 rounded-lg shadow-lg text-1xl'>
                                OIC
                            </div>
                        </div>
                        <p className='mt-3 font-semibold text-center text-gray-700'>{etapaTotales[0]?.oic}</p>
                    </div>
                }
                {etapaTotales[0]?.uif != 0 &&
                    <div className='text-center'>
                        <div className='flex justify-center'>
                            <div className='block w-12 h-12 p-3 font-bold text-center text-white bg-red-900 rounded-lg shadow-lg text-1xl'>
                                UIF
                            </div>
                        </div>
                        <p className='mt-3 font-semibold text-center text-gray-700'>{etapaTotales[0]?.uif}</p>
                    </div>
                }
                {etapaTotales[0]?.dr != 0 &&
                    <div className='text-center'>
                        <div className='flex justify-center'>
                            <div className='block w-12 h-12 p-3 font-bold text-center text-white bg-red-900 rounded-lg shadow-lg text-1xl'>
                                DR
                            </div>
                        </div>
                        <p className='mt-3 font-semibold text-center text-gray-700'>{etapaTotales[0]?.dr}</p>
                    </div>
                }
                {etapaTotales[0]?.drsp != 0 &&
                    <div className='text-center'>
                        <div className='flex justify-center'>
                            <div className='block w-12 h-12 p-1 font-bold text-center text-white bg-red-900 rounded-lg shadow-lg text-1xl'>
                                DRSP
                            </div>
                        </div>
                        <p className='mt-3 font-semibold text-center text-gray-700'>{etapaTotales[0]?.drsp}</p>
                    </div>}
                {etapaTotales[0]?.tja != 0 &&
                    <div className='text-center'>
                        <div className='flex justify-center'>
                            <div className='block w-12 h-12 p-3 font-bold text-center text-white bg-red-900 rounded-lg shadow-lg text-1xl'>
                                TJA
                            </div>
                        </div>
                        <p className='mt-3 font-semibold text-center text-gray-700'>{etapaTotales[0]?.tja}</p>
                    </div>}
                {etapaTotales[0]?.jfc != 0 &&
                    <div className='text-center'>
                        <div className='flex justify-center'>
                            <div className='block w-12 h-12 p-3 font-bold text-center text-white bg-red-900 rounded-lg shadow-lg text-1xl'>
                                JFC
                            </div>
                        </div>
                        <p className='mt-3 font-semibold text-center text-gray-700'>{etapaTotales[0]?.jfc}</p>
                    </div>}
                {etapaTotales[0]?.dc != 0 &&
                    <div className='text-center'>
                        <div className='flex justify-center'>
                            <div className='block w-12 h-12 p-3 font-bold text-center text-white bg-red-900 rounded-lg shadow-lg text-1xl'>
                                DC
                            </div>
                        </div>
                        <p className='mt-3 font-semibold text-center text-gray-700'>{etapaTotales[0]?.dc}</p>
                    </div>}
            </div>
            <Table hoverable>
                <Table.Head>
                    <Table.HeadCell>
                        Dependencia
                    </Table.HeadCell>
                    <Table.HeadCell>
                        OIC
                    </Table.HeadCell>
                    <Table.HeadCell>
                        UIF
                    </Table.HeadCell>
                    <Table.HeadCell>
                        DR
                    </Table.HeadCell>
                    <Table.HeadCell>
                        DRSP
                    </Table.HeadCell>
                    <Table.HeadCell>
                        TJA
                    </Table.HeadCell>
                    <Table.HeadCell>
                        JFC
                    </Table.HeadCell>
                    <Table.HeadCell>
                        DC
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {
                        denunciasEtapa.map((denuncia, index) => (
                            <Table.Row className="bg-white" key={index}>

                                <Table.Cell className="whitespace-nowrap">
                                    {denuncia.dependencia}
                                </Table.Cell>

                                <Table.Cell className='text-center whitespace-nowrap'>
                                    {denuncia.oic}
                                </Table.Cell>

                                <Table.Cell className='text-center whitespace-nowrap'>
                                    {denuncia.uif}
                                </Table.Cell>

                                <Table.Cell className='text-center whitespace-nowrap'>
                                    {denuncia.dr}
                                </Table.Cell>

                                <Table.Cell className='text-center whitespace-nowrap'>
                                    {denuncia.drsp}
                                </Table.Cell>

                                <Table.Cell className='text-center whitespace-nowrap'>
                                    {denuncia.tja}
                                </Table.Cell>

                                <Table.Cell className='text-center whitespace-nowrap'>
                                    {denuncia.jfc}
                                </Table.Cell>

                                <Table.Cell className='text-center whitespace-nowrap'>
                                    {denuncia.dc}
                                </Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
        </>
    )
}
