import React, { useEffect } from 'react'
import { useTableroStore } from '../hooks/useTableroStore'
import { TableroItem, EtapaItem, TableDependencias } from '../components/tablero'
import { HiAnnotation, HiOutlineClipboardList, HiOutlineCloudDownload } from 'react-icons/hi';
import LinesChartDenuncias from '../components/LinesChartDenuncias';
import TablaDependenciasPopup from '../components/tablero/TablaDependenciasPopup';
import TablaEstadosPopup from '../components/tablero/TablaEstadosPopup';
import { PopUp } from '../components/ui';
import { Button, Tooltip } from 'flowbite-react';


const Tablero = ({ onSetSelectedLink, link }) => {
    const { datamodal, tablero, onGetDenunciasTotal, onSyncDenuncias } = useTableroStore()


    useEffect(() => {
        onSetSelectedLink(link)
        if (Object.keys(tablero).length === 0) onGetDenunciasTotal()
    }, [])

    return (
        <>
            <PopUp title={datamodal.titulo}>
                {
                    datamodal.tipo === 1
                        ? <TablaDependenciasPopup />
                        : <TablaEstadosPopup />
                }
            </PopUp>
            <div className="grid w-full grid-cols-1 p-10 mb-5 md:grid-cols-2 lg:grid-cols-5">
                <TableroItem
                    title='Total de Denuncias Recibidas'
                    total={tablero.denuncias}
                    icon={<HiAnnotation />}
                    colorIcon='text-blue-500 bg-blue-300'
                >
                    <div className="flex justify-around p-1 mt-2 text-base font-semibold border-t-2">
                        <span>Remitidas:</span>
                        <span>{`${tablero?.remitidasuif + tablero?.remitidasoic}`}</span>
                    </div>
                </TableroItem>

                <TableroItem
                    title='Denuncias en Iniciadas por UIF'
                    total={tablero.uif}
                    icon={<HiOutlineClipboardList />}
                    colorIcon='text-yellow-400 bg-yellow-100 '
                >
                    <div className="flex justify-around p-1 mt-2 text-base font-semibold border-t-2">
                        <span>Remitidas:</span>
                        <span>{tablero.remitidasuif}</span>
                    </div>
                </TableroItem>

                <TableroItem
                    title='Denuncias Iniciadas OIC'
                    total={tablero.oic}
                    icon={<HiOutlineClipboardList />}
                    colorIcon='text-red-800 bg-red-300 '
                >
                    <div className="flex justify-around p-1 mt-2 text-base font-semibold border-t-2">
                        <span>Remitidas:</span>
                        <span>{tablero.remitidasoic}</span>
                    </div>
                </TableroItem>

                <TableroItem
                    title='Inconformidades'
                    total={tablero.inconformidades}
                    icon={<HiOutlineClipboardList />}
                    colorIcon='text-green-500 bg-green-200'
                >
                </TableroItem>

                <TableroItem
                    title='Procesos Administrativos Sancionatorios'
                    total={tablero.sancionatorios}
                    icon={<HiOutlineClipboardList />}
                    colorIcon='text-purple-500 bg-purple-200'
                >
                </TableroItem>
            </div>

            <div className="text-lg md:text-2xl lg:text-3xl font-bold bg-[#BF5854] mt-10 justify-center flex text-white p-3 w-full">Histórico de Seguimiento a Denuncias</div>
            <div className="flex items-center justify-center w-full grid-cols-1 p-4">
                <div className="justify-center w-full md:w-[80%] lg:w-[50%]">
                    <div>
                        <LinesChartDenuncias />
                    </div>
                </div>
            </div>

            <div className="text-lg md:text-2xl lg:text-3xl font-bold bg-[#BF5854] mt-10 justify-center flex text-white p-3 w-full">Etapa Procesal</div>
            <div className="grid w-full grid-cols-1 p-10 md:grid-cols-3 lg:grid-cols-6">
                <EtapaItem
                    title='Investigación'
                    etapa={tablero.investigacion}
                    denuncias={tablero.denuncias}
                    color="#FFBF00"
                    id={1}
                />

                <EtapaItem
                    title='Substanciación'
                    etapa={tablero.substanciacion}
                    denuncias={tablero.denuncias}
                    color="#BAFF49"
                    id={2}
                />

                <EtapaItem
                    title='Resolución'
                    etapa={tablero.resolucion}
                    denuncias={tablero.denuncias}
                    color="#0FFF3C"
                    id={3}
                />

                <EtapaItem
                    title='Con Resolución o Sentencia'
                    etapa={tablero.sentencia}
                    denuncias={tablero.denuncias}
                    color="#FF803E"
                    id={4}
                />

                <EtapaItem
                    title='Impugnación'
                    etapa={tablero.impugnacion}
                    denuncias={tablero.denuncias}
                    color="#FF5396"
                    id={5}
                />

                <EtapaItem
                    title='Amparo'
                    etapa={tablero.amparo}
                    denuncias={tablero.denuncias}
                    color="#DB8CFF"
                    id={6}
                />

                <EtapaItem
                    title='Firme'
                    etapa={tablero.firme}
                    denuncias={tablero.denuncias}
                    color="#FF00BF"
                    id={7}
                />

                <EtapaItem
                    title='Conclusión y Archivo'
                    etapa={tablero.conclusion}
                    denuncias={tablero.denuncias}
                    color="#5D3EFF"
                    id={8}
                />

                <EtapaItem
                    title='Improcedentes'
                    etapa={tablero.improcedentes}
                    denuncias={tablero.denuncias}
                    color="#0040FF"
                    id={9}
                />

                <EtapaItem
                    title='Sobreseimiento'
                    etapa={tablero.sobreseimiento}
                    denuncias={tablero.denuncias}
                    color="#70D3FF"
                    id={10}
                />

                <EtapaItem
                    title='En Proceso'
                    etapa={tablero.proceso}
                    denuncias={tablero.denuncias}
                    color="#4BFFFF"
                    id={11}
                />
            </div>

            <div className="text-lg md:text-2xl lg:text-3xl font-bold bg-[#BF5854] mt-10 justify-center flex text-white p-3 w-full">Denuncias por Dependencia</div>
            <div className="flex justify-center w-full p-5">
                <TableDependencias />
            </div>

            <div className='fixed bottom-32 right-12'>
                <Tooltip content="Actualizar Denuncias">
                    <Button onClick={onSyncDenuncias}>
                        <HiOutlineCloudDownload className="h-6 w-6" />
                    </Button>
                </Tooltip>
            </div>
        </>
    )
}

export default Tablero
