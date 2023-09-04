import * as React from 'react'
import { Formik, Form, Field, ErrorMessage} from 'formik'
import PieChartEstadistica from '../components/PieChartEstadistica';
import DenunciasxMesChart from '../components/DenunciasxMesChart';
import OrigenDenunciasChart from '../components/OrigenDenunciasChart';
import DenunciasRadicadasChart from '../components/DenunciasRadicadasChart';
import DependenciasMasChart from '../components/DependenciasMasChart';

export default function Estadisticas() {
  
  const buscar = (values) => {
    window.location = '/estadisticas';
    }

  return (
    <>
    <div className="flex-wrap justify-center p-3 md:flex md:p-5">
      <div className="w-full mb-3 text-sm font-black text-center md:text-3xl">Estadísticas</div>
      <div className='w-full'>
        <Formik
        initialValues={{ 
          periodo:"",
          entidad:""
          }}
          onSubmit={ buscar }
        >
          {( {values, handleSubmit, handleChange} ) => (

            
            <div className='flex flex-row justify-center'>
              <Form onSubmit={handleSubmit}>
                <div className='w-full'>
                <label htmlFor="periodo" className='font-bold'>Periodo  </label>
                  desde: <Field 
                    name="periodo"
                    id="periodo"
                    type="date" 
                    placeholder="Periodo desde"
                    aria-label="Búsqueda de por periodo" 
                    className="m-2 rounded-lg" 
                    value={values.periodo}
                    onChange={handleChange}
                  />
                  hasta: <Field 
                        name="periodos"
                        id="periodos"
                        type="date" 
                        placeholder="Periodo hasta"
                        aria-label="Búsqueda de por periodo" 
                        className="m-2 rounded-lg" 
                        value={values.periodo}
                        onChange={handleChange}
                      />
                <Field 
                    as="select" 
                    name="entidad" 
                    className="m-2 rounded-lg"
                    aria-label="Categoría de la entidad"
                    value={values.entidad}
                    onChange={handleChange}>
                    <option value="">Establecer entidad</option>
                    <option value="denuncia1">Denuncia 1</option>
                    <option value="denuncia2">Denuncia 2</option>
                    <option value="denuncia3">Denuncia 3</option>
                    <option value="denuncia4">Denuncia 4</option>
                    <option value="denuncia5">Denuncia 5</option>
                  </Field>
                </div>
                <div className='flex w-full text-red-600'>
                  <div className='m-3'><ErrorMessage name='periodo'/></div>
                  <div className='m-3'><ErrorMessage name='entidad'/></div>
                 </div>
                 <div className='flex justify-center w-full text-center'>
                 <button type='submit' className=' w-[50%] p-3 font-medium text-white bg-red-800 rounded-xl hover:bg-red-950 m-7'>Buscar</button>
                 </div>
              </Form>
            </div>
            )}
        </Formik>
      </div>
      <div className='justify-center w-full text-center md:flex h-96'>
          <div className='w-[50%]  justify-center font-semibold text-center text-xs md:text-xl'>
              <PieChartEstadistica/>
          </div>
          <div className='w-[50%] justify-center font-semibold text-center text-xs md:text-xl'>
              <DenunciasxMesChart />
          </div>
      </div>
      <div className='justify-center w-full text-center md:flex h-96'>
          <div className='w-[50%]  justify-center font-semibold text-center text-xs md:text-xl'>
              <OrigenDenunciasChart />
          </div>
          <div className='w-[50%] justify-center font-semibold text-center text-xs md:text-xl'>
              <DenunciasRadicadasChart />
          </div>
      </div>
      <div className='justify-center w-full text-center md:flex h-96'>
          <div className='w-[50%]  justify-center font-semibold text-center text-xs md:text-xl'>
              <DependenciasMasChart />
          </div>
      </div>
    </div>
    </>
  )
}
