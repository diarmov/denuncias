import { useEffect } from 'react';
import { useFormik} from 'formik'
import { Button, Label, TextInput } from 'flowbite-react';

import PieChartEstadistica from '../components/PieChartEstadistica';
import DenunciasxMesChart from '../components/DenunciasxMesChart';
import OrigenDenunciasChart from '../components/OrigenDenunciasChart';
import DependenciasMasChart from '../components/DependenciasMasChart';
import { useEstadisticaStore } from '../hooks/useEstadisticaStore';



export default function Estadisticas({ onSetSelectedLink, link }) {
  const { tipo, estadistica, onGetEstadisticas, onResetEstadistica } = useEstadisticaStore()

  const { handleSubmit, values, handleChange, setValues } = useFormik({
    initialValues: estadistica,      
    onSubmit: async values => {
      await onGetEstadisticas( values )
    }
  });

  useEffect(() => {
     onSetSelectedLink(link)
     if(tipo.data.length === 0 ) onGetEstadisticas( values )
  }, [])

  const filtersOff = async () => {
    setValues({
      fecha_inicio: '',
      fecha_fin: ''
    })
    await onGetEstadisticas({
      fecha_inicio: '',
      fecha_fin: ''
    })
    onResetEstadistica()
  }


  

  return (
    <>
    <div className="flex-wrap justify-center p-3 md:flex md:p-5">
      <div className="w-full mb-3 text-2xl font-black text-center md:text-3xl">Estadísticas</div>
      
      <div className='container flex justify-center'>
        <form onSubmit={handleSubmit} className='mb-8'> 
            <div className='text-center font-semibold text-xl'>Periodo de busqueda:</div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-x-4 gap-y-2'>
                  <div className='w-72'>
                    <Label htmlFor="fecha_inicio" value="Desde"/>
                    <TextInput      
                        type="date"
                        name='fecha_inicio'
                        onChange={handleChange}
                        value={values.fecha_inicio}
                    />
                  </div>

                  <div className='w-72'>
                    <Label htmlFor="fecha_fin" value="Hasta"/>
                    <TextInput      
                        type="date"
                        name='fecha_fin'
                        onChange={handleChange}
                        value={values.fecha_fin}
                    />
                  </div>

                  <div className="flex items-center gap-2">
                        <Button 
                          type="submit" 
                          className='bg-red-900 hover:bg-red-950 mt-7'
                         > Buscar
                        </Button>

                        <Button 
                          type="button" 
                          className='mt-7'
                          color="light"
                          onClick={ filtersOff }
                         > Quitar filtros
                        </Button>
                  </div>
            </div>
        </form>
      </div>
    </div>

    <div className='grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-5 p-10'>
      <div className='h-96'>
          <PieChartEstadistica/>
      </div>
      <div>
          <DenunciasxMesChart />
      </div> 

      <div>
          <OrigenDenunciasChart />
      </div>
      <div>
          <DependenciasMasChart />        
      </div>   
    </div>    
  
    </>
  )
}
