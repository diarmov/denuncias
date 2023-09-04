import { HiFolderOpen, HiOutlineServer } from 'react-icons/hi';
import { useBusquedaStore } from '../../hooks/useBusquedaStore';

export const Details = () => {
  const { details } = useBusquedaStore()
  return (
    <div className='flex justify-around flex-wrap my-10'>
      <div className='text-center'>
        <div className='flex justify-center'>
         <div className='p-3 bg-red-900 block w-12 h-12 rounded-lg text-center text-white text-2xl shadow-lg'>
            <HiFolderOpen />
          </div>
        </div>

        <p className='mt-3 font-semibold text-gray-700'>Detalle de denuncias</p>
        <div className='mt-3 text-sm'>
            <p>Numero de denuncias a la fecha: <span className='font-semibold'>{ details.denuncias }</span></p>
            <p>En atención por los OIC: <span className='font-semibold'>{ details.oics }</span></p>
            <p>En atención por la SFP: <span className='font-semibold'>{ details.sfp }</span></p>
            <p>Por falta grave: <span className='font-semibold'>{ details.grave }</span></p>
            <p>Por falta no grave: <span className='font-semibold'>{ details.noGrave }</span></p>
            <p>Expedientes con ambos tipos de falta: <span className='font-semibold'>{ details.ambos }</span></p>
        </div>
      </div>


       <div className='text-center'>
        <div className='flex justify-center'>
         <div className='p-3 bg-red-900 block w-12 h-12 rounded-lg text-center text-white text-2xl shadow-lg'>
            <HiOutlineServer />
          </div>
        </div>

        <p className='mt-3 font-semibold text-gray-700 text-center'>Por Etapa</p>
            <div className='mt-3 text-sm grid grid-cols-2 text-left'>               
               <div>Investigación: <span className='font-semibold ml-2'>{ details.investigacion }</span></div>
               <div>Substanciación: <span className='font-semibold ml-2'>{ details.substanciacion }</span> </div>
               <div>En Resolución: <span className='font-semibold ml-2'>{ details.resolucion }</span></div>
               <div>Resolución o Sentencia: <span className='font-semibold ml-2'>{ details.resSent }</span></div>
               <div>Impugnación: <span className='font-semibold ml-2'>{ details.impugnacion }</span></div>
               <div>Amparo: <span className='font-semibold ml-2'>{ details.amparo }</span></div>
               <div>Firme: <span className='font-semibold ml-2'>{ details.firme }</span></div>
               <div>Conclusión y Archivo: <span className='font-semibold ml-2'>{ details.conArch }</span></div>
               <div>Inprocedentes: <span className='font-semibold ml-2'>{ details.inprocedentes }</span></div>
               <div>Sobreseimiento: <span className='font-semibold ml-2'>{ details.Sobreseimiento }</span></div>
               <div>En Proceso: <span className='font-semibold ml-2'>{ details.proceso }</span></div>
            </div>
        </div>

    </div>
  )
}

