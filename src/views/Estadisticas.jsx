import * as React from 'react'
import { Formik, Form, Field, ErrorMessage} from 'formik'
import PieChartEstadistica from '../components/PieChartEstadistica';
import DenunciasxMesChart from '../components/DenunciasxMesChart';
import OrigenDenunciasChart from '../components/OrigenDenunciasChart';
import DenunciasRadicadasChart from '../components/DenunciasRadicadasChart';
import DependenciasMasChart from '../components/DependenciasMasChart';
import GeneroDenunciadoChart from '../components/GeneroDenunciadoChart';

export default function Estadisticas() {
  
  const buscar = (values) => {
    window.location = '/estadisticas';
    }
    const validar=(values) => {
      const errors= {};
      if (!values.periodo) {
        errors.periodo = 'Selecciona el periodo para la búsqueda'
      }
      if(!values.entidad){
        errors.entidad = 'Selecciona una entidad'
          }
      else if (values.entidad.length <5) errors.entidad = 'La contraseña debe ser mayor de 5 digitos'
      return errors;
    }

  return (
    <>
    <div className="md:flex md:p-5 p-3 flex-wrap justify-center">
      <div className="w-full font-black text-center md:text-3xl text-sm mb-3">Estadísticas</div>
      <div className='w-full'>
        <Formik
        initialValues={{ 
          periodo:"",
          entidad:""
          }}
          onSubmit={ buscar }
          validate={ validar }
        >
          {( {values, handleSubmit, handleChange} ) => (

            
            <div className='flex justify-center flex-row'>
              <Form onSubmit={handleSubmit}>
                <div className='w-full'>
                <label htmlFor="periodo" className='font-bold'>Periodo  </label>
                  desde: <Field 
                    name="periodo"
                    id="periodo"
                    type="date" 
                    placeholder="Periodo desde"
                    aria-label="Búsqueda de por periodo" 
                    className="rounded-lg m-2" 
                    value={values.periodo}
                    onChange={handleChange}
                  />
                  hasta: <Field 
                        name="periodos"
                        id="periodos"
                        type="date" 
                        placeholder="Periodo hasta"
                        aria-label="Búsqueda de por periodo" 
                        className="rounded-lg m-2" 
                        value={values.periodos}
                        onChange={handleChange}
                      />
                <Field 
                    as="select" 
                    name="entidad" 
                    className="rounded-lg m-2"
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
                <div className='text-red-600 flex w-full'>
                  <div className='m-3'><ErrorMessage name='periodo'/></div>
                  <div className='m-3'><ErrorMessage name='entidad'/></div>
                 </div>
                 <div className='justify-center text-center flex w-full'>
                 <button type='submit' className=' w-[50%] p-3 font-medium text-white bg-red-800 rounded-xl hover:bg-red-950 m-7'>Buscar</button>
                 </div>
              </Form>
            </div>
            )}
        </Formik>
      </div>
      <div className='md:flex w-full h-96 justify-center text-center'>
          <div className='w-[50%]  justify-center font-semibold text-center text-xs md:text-xl'>
              <PieChartEstadistica/>
          </div>
          <div className='w-[50%] justify-center font-semibold text-center text-xs md:text-xl'>
              <DenunciasxMesChart />
          </div>
      </div>
      <div className='md:flex w-full h-96 justify-center text-center'>
          <div className='w-[50%]  justify-center font-semibold text-center text-xs md:text-xl'>
              <OrigenDenunciasChart />
          </div>
          <div className='w-[50%] justify-center font-semibold text-center text-xs md:text-xl'>
              <DenunciasRadicadasChart />
          </div>
      </div>
      <div className='md:flex w-full h-96 justify-center text-center'>
          <div className='w-[50%]  justify-center font-semibold text-center text-xs md:text-xl'>
              <DependenciasMasChart />
          </div>
          <div className='w-[50%] justify-center font-semibold text-center text-xs md:text-xl'>
              <GeneroDenunciadoChart />
          </div>
      </div>
    </div>
    </>
  )
}
