import { HiFolderOpen, HiOutlineServer } from 'react-icons/hi';
import { useBusquedaStore } from '../../hooks/useBusquedaStore';

export const Details = () => {
  const { details } = useBusquedaStore()
  return (
    <div className='flex flex-wrap justify-around my-10'>
      <div className='mb-4 text-center'>
        <div className='flex justify-center'>
          <div className='block w-12 h-12 p-3 text-2xl text-center text-white bg-red-900 rounded-lg shadow-lg'>
            <HiFolderOpen />
          </div>
        </div>

        <p className='mt-3 font-semibold text-gray-700 '>Detalle de denuncias</p>
        <div className='mt-3 text-sm'>
          <p>Numero de denuncias a la fecha: <span className='font-semibold'>{details.denuncias}</span></p> <br />
          <span className='font-bold'>En atención por: </span><br />
          <hr />
          <p>OIC: <span className='font-semibold'>{details.oics}      </span>
            UIF: <span className='font-semibold'>{details.sfp}      </span>
            DR: <span className='font-semibold'>{details.dr}      </span></p>
          <p> DRSP: <span className='font-semibold'>{details.drsp}</span>
            TJA: <span className='font-semibold'>{details.tja}      </span>
            JFC: <span className='font-semibold'>{details.jfc}     </span>
            DC: <span className='font-semibold'>{details.dc}</span></p><br />
          <hr />
          <p>Por falta grave: <span className='font-semibold'>{details.grave}</span></p>
          <p>Por falta no grave: <span className='font-semibold'>{details.noGrave}</span></p>
          <p>Expedientes con ambos tipos de falta: <span className='font-semibold'>{details.ambos}</span></p>
        </div>
      </div>


      <div className='text-center'>
        <div className='flex justify-center'>
          <div className='block w-12 h-12 p-3 text-2xl text-center text-white bg-red-900 rounded-lg shadow-lg'>
            <HiOutlineServer />
          </div>
        </div>

        <p className='mt-3 font-semibold text-center text-gray-700'>Por Etapa</p>
        <div className='grid grid-cols-2 mt-3 text-sm text-left'>
          <div>Investigación: <span className='ml-2 font-semibold'>{details.investigacion}</span></div>
          <div>Substanciación: <span className='ml-2 font-semibold'>{details.substanciacion}</span> </div>
          <div>En Resolución: <span className='ml-2 font-semibold'>{details.resolucion}</span></div>
          <div>Resolución o Sentencia: <span className='ml-2 font-semibold'>{details.resSent}</span></div>
          <div>Impugnación: <span className='ml-2 font-semibold'>{details.impugnacion}</span></div>
          <div>Amparo: <span className='ml-2 font-semibold'>{details.amparo}</span></div>
          <div>Firme: <span className='ml-2 font-semibold'>{details.firme}</span></div>
          <div>Conclusión y Archivo: <span className='ml-2 font-semibold'>{details.conArch}</span></div>
          <div>Inprocedentes: <span className='ml-2 font-semibold'>{details.inprocedentes}</span></div>
          <div>Sobreseimiento: <span className='ml-2 font-semibold'>{details.Sobreseimiento}</span></div>
          <div>En Proceso: <span className='ml-2 font-semibold'>{details.proceso}</span></div>
        </div>
      </div>

    </div>
  )
}

