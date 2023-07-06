import * as React from 'react'
import { Formik, Form, Field, ErrorMessage} from 'formik'
import { HiSearch } from 'react-icons/hi';

export default function Busqueda() {
  const buscar = (values) => {
    window.location = '/busqueda';
    }
    const validar=(values) => {
      const errors= {};
      if(!values.buscar){
        errors.buscar = 'Ingresa la información que deseas buscar'
          }
      return errors;
    }

  return (
    <>
      <div class="md:flex md:p-5 p-3 flex-wrap">
        <div className="w-full font-black text-center md:text-3xl text-sm mb-3">Búsqueda Avanzada</div>
        <div className="w-full font-semibold text-center md:text-lg text-xs mb-3">Aquí podrás realizar búsquedas específicas</div>
        <div className="w-full font-semibold text-center md:text-lg text-xs mb-3">
            <Formik 
            initialValues={{ 
                buscar:"",
                }}
                onSubmit={ buscar }
                validate={ validar }
            >
            {( {values, handleSubmit, handleChange} ) => (
                  <div className='px-5 py-10 mt-10 text-center bg-white flex-col'>
                    <Form onSubmit={handleSubmit}>
                    <label htmlFor="buscar" className='flex font-bold'>Buscar:</label>
                      <Field 
                        name="buscar"
                        id="buscar"
                        type="search" 
                        aria-label="Búsqueda de información" 
                        placeholder="Ingresa la información a buscar"
                        class="block w-full appearance-none rounded-lg bg-transparent text-base text-slate-900 transition placeholder:text-slate-400 focus:outline-none sm:text-[0.8125rem] sm:leading-6 [&amp;::-webkit-search-cancel-button]:appearance-none [&amp;::-webkit-search-decoration]:appearance-none [&amp;::-webkit-search-results-button]:appearance-none [&amp;::-webkit-search-results-decoration]:appearance-none" 
                        autoComplete="on"
                        value={values.buscar}
                      onChange={handleChange}
                      InputProps={{
                        endAdornment: (
                          <HiSearch />
                        ),
                      }}
                      />
                      <div className='text-red-600'><ErrorMessage name='buscar'/></div><br />
                      <Field 
                        as="select" 
                        name="categoria" 
                        className="rounded-lg m-2"
                        aria-label="Categoría de la denuncia"
                        value={values.categoria}
                        onChange={handleChange}>
                        <option value="">Categoría de la Denuncia</option>
                        <option value="denuncia1">Denuncia 1</option>
                        <option value="denuncia2">Denuncia 2</option>
                        <option value="denuncia3">Denuncia 3</option>
                        <option value="denuncia4">Denuncia 4</option>
                        <option value="denuncia5">Denuncia 5</option>
                      </Field>
                      <Field as="select" name="dependencia" className="rounded-lg m-2">
                        <option value="">Dependencia</option>
                        <option value="dependencia1">Dependencia 1</option>
                        <option value="dependencia1">Dependencia 2</option>
                        <option value="dependencia1">Dependencia 3</option>
                        <option value="dependencia1">Dependencia 4</option>
                        <option value="dependencia1">Dependencia 5</option>
                      </Field>
                      <Field as="select" name="autoridad" className="rounded-lg m-2">
                        <option value="">Autoridad Encargada</option>
                        <option value="autoridad1">Autoridad 1</option>
                        <option value="autoridad2">Autoridad 2</option>
                        <option value="autoridad3">Autoridad 3</option>
                        <option value="autoridad4">Autoridad 4</option>
                        <option value="autoridad5">Autoridad 5</option>
                      </Field>
                      <Field as="select" name="ejercicio" className="rounded-lg m-2">
                        <option value="">Ejercicio</option>
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                      </Field>
                      <Field as="select" name="estatus" className="rounded-lg m-2">
                        <option value="">Estatus de la Denuncia</option>
                        <option value="estatus1">Estatus 1</option>
                        <option value="estatus2">Estatus 2</option>
                        <option value="estatus3">Estatus 3</option>
                        <option value="estatus4">Estatus 4</option>
                        <option value="estatus5">Estatus 5</option>
                      </Field>
                      <br/>
                      <button type='submit' className='p-3 font-medium text-white bg-red-800 rounded-xl hover:bg-red-950 m-7'>Buscar</button>
                    </Form>         
                  </div>
            )}
            </Formik>          
        </div>
        <div className="w-full font-semibold text-center md:text-lg text-xs mb-3">
          
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Asunto
                    </th>
                    <th scope="col" class="px-6 py-3">
                        <div class="flex items-center">
                            Tipo
                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                        </div>
                    </th>
                    <th scope="col" class="px-6 py-3">
                        <div class="flex items-center">
                            Estatus
                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                        </div>
                    </th>
                    <th scope="col" class="px-6 py-3">
                        <div class="flex items-center">
                            Ejercicio
                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                        </div>
                    </th>
                    <th scope="col" class="px-6 py-3">
                      <div class="text-center">
                        Detalle
                      </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-green-400 hover:text-white">
                    <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
                        Denuncia 1
                    </th>
                    <td class="px-6 py-4">
                        Abuso de Funciones
                    </td>
                    <td class="px-6 py-4">
                        Invetigación
                    </td>
                    <td class="px-6 py-4">
                        2019
                    </td>
                    <td class="px-6 py-4 text-center">
                      <a href="#" class="p-3 bg-blue-800 hover:bg-blue-950 rounded-lg text-white"> Ver detalle</a>
                    </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Denuncia 2
                    </th>
                    <td class="px-6 py-4">
                        Enriquecimiento ilícito
                    </td>
                    <td class="px-6 py-4">
                        Invetigación
                    </td>
                    <td class="px-6 py-4">
                        2020
                    </td>
                    <td class="px-6 py-4 text-center">
                      <a href="#" class="p-3 bg-blue-800 hover:bg-blue-950 rounded-lg text-white"> Ver detalle</a>
                    </td>
                </tr>
                <tr class="bg-white dark:bg-gray-800">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Denuncia 3
                    </th>
                    <td class="px-6 py-4">
                        Cochecho
                    </td>
                    <td class="px-6 py-4">
                        Invetigación
                    </td>
                    <td class="px-6 py-4">
                        2021
                    </td>
                    <td class="px-6 py-4 text-center">
                      <a href="#" class="p-3 bg-blue-800 hover:bg-blue-950 rounded-lg text-white"> Ver detalle</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

        </div>
      </div>
    </>
  )
}
