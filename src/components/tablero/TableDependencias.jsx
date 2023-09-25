import { Pagination, Table, Tooltip } from 'flowbite-react';
import { useEffect } from "react";
import { useTableroStore } from '../../hooks/useTableroStore';
import { useUiStore } from '../../hooks/useUiStore';


export const TableDependencias = () => {
    const { dependencias, onGetDataDependencias } = useTableroStore()
    const { search } = useUiStore();

    //console.log(dependencias)



    useEffect(() => {
        if (dependencias.length === 0) onGetDataDependencias()
    }, [])

    const onChagePage = (page) => {
        onGetDataDependencias(page)
    }


    return (
        <>
            <div className='container relative px-4 mb-6 overflow-x-auto'>
                <Table hoverable>
                    <Table.Head>
                        <Table.HeadCell>
                            Dependencia
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Investigadas
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Concluidas
                        </Table.HeadCell>
                        <Table.HeadCell>
                            IPRA
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Activas
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Remitidas
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {
                            dependencias.data?.map((denuncia, index) => (
                                <Table.Row className="bg-white" key={index}>
                                    <Table.Cell className='whitespace-nowrap'>
                                        {denuncia.dependencia}
                                    </Table.Cell>
                                    <Table.Cell className="text-gray-900 whitespace-nowrap ">
                                        <Tooltip content={denuncia.Investigacion}>
                                            {denuncia.Investigacion}
                                        </Tooltip>
                                    </Table.Cell>
                                    <Table.Cell className='whitespace-nowrap'>
                                        <Tooltip content={denuncia.Conclusion}>
                                            {denuncia.Conclusion}
                                        </Tooltip>
                                    </Table.Cell>
                                    <Table.Cell className='whitespace-nowrap'>
                                        <Tooltip content={denuncia.IPRA}>
                                            {denuncia.IPRA}
                                        </Tooltip>
                                    </Table.Cell>
                                    <Table.Cell className='whitespace-nowrap'>
                                        <Tooltip content={denuncia.Tramite}>
                                            {denuncia.Tramite}
                                        </Tooltip>
                                    </Table.Cell>
                                    <Table.Cell className='whitespace-nowrap'>
                                        <Tooltip content={denuncia.Remitidas}>
                                            {denuncia.Remitidas}
                                        </Tooltip>
                                    </Table.Cell>
                                </Table.Row>
                            ))
                        }
                    </Table.Body>
                </Table>
                {
                    (dependencias.current_page && !search) && (
                        <div className='flex flex-row-reverse mt-2'>
                            <Pagination
                                currentPage={dependencias.current_page}
                                nextLabel="Siguiente"
                                onPageChange={(page) => onChagePage(page)}
                                previousLabel="Anterior"
                                totalPages={dependencias.last_page}
                            />
                        </div>
                    )
                }
            </div>
        </>

    )
}


