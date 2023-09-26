import { HiOutlineOfficeBuilding, HiOutlineClipboardList } from 'react-icons/hi';
import { useTableroStore } from '../../hooks/useTableroStore';
import { useUiStore } from '../../hooks/useUiStore';

export const EtapaItem = ({ title, etapa, denuncias, color, id }) => { 
  const { onSetDataModal, onGetDataDepenCount, onGetDataStatCount } = useTableroStore()
  const { onModal } = useUiStore()

  const handleModal = async( datamodal ) => {
        datamodal.tipo === 1
        ? await onGetDataDepenCount(id)
        : await onGetDataStatCount(id)

        onSetDataModal(datamodal)
        onModal('default')
  } 

  return (
    <>
        <div className="p-3 m-2 transition duration-300 ease-in-out delay-150 rounded-lg shadow-lg shadow-gray-500 h-min bg-gray-50 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200">
            <div className="flex flex-row w-full p-2">
                <div className="font-semibold text-center">
                    <p className='text-center'>{ title }</p>
                    <label className="text-[#7E272C]">{ etapa }</label>
                </div>
            </div>
            {Math.round((etapa * 100) / denuncias) + '%'}
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-3">
                <div className={`h-2.5 rounded-full`}  style={{ width: ((etapa * 100) /  denuncias) + '%', background: color }}></div>
            </div>
            <div className="grid w-full grid-cols-1 md:grid-cols-2">
                <div 
                className="flex justify-center transition duration-300 ease-in-out delay-150 rounded-full cursor-pointer hover:-translate-y-1 hover:scale-110 hover:bg-gray-200" 
                title="Dependencias" 
                onClick={() => handleModal({ titulo: `Denuncias en ${ title } por Dependencia`, tipo: 1 })} >
                    <HiOutlineOfficeBuilding />
                </div>

                <div 
                    className="flex justify-center transition duration-300 ease-in-out delay-150 rounded-full cursor-pointer hover:-translate-y-1 hover:scale-110 hover:bg-gray-200" 
                    title="Estatus" 
                    onClick={() => handleModal({ titulo: `Denuncias en ${ title } por Estatus`, tipo: 2, idEtapa: id })} >
                    <HiOutlineClipboardList />
                </div>
            </div>
        </div>
        </>
    
  )
}