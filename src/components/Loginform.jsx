import * as React from 'react'
import { Formik, Form, Field, ErrorMessage} from 'formik'

export default function Loginform() {
    
    const login = (values) => {
      window.location = '/inicio';
      }
      const validar=(values) => {
        const errors= {};
        if (!values.email) {
          errors.email = 'Ingresa tu correo electrónico';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Dirección de correo no válida';
        }
        if(!values.password){
          errors.password = 'Ingresa tu contraseña'
            }
        else if (values.password.length <5) errors.password = 'La contraseña debe ser mayor de 5 digitos'
        return errors;
      }
      
  return (
    <div className='w-full p-10'>
    <h1 className='text-3xl font-bold text-center'>Inicio de sesión</h1>
    <Formik 
    initialValues={{ 
        email:"",
        password:""
        }}
        onSubmit={ login }
        validate={ validar }
    >
    {( {values, handleSubmit, handleChange} ) => (
          <div className='px-5 py-10 mt-10 text-center bg-white'>
            <Form onSubmit={handleSubmit}>
              <label htmlFor="email" className='flex font-bold'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                  </svg>
                  Email:
              </label>
              <Field 
              name="email" 
              type="email" 
              id="email" 
              className="w-full p-2 m-2 border-x-2 border-y-2" 
              placeholder="correo@correo.com" 
              value={values.email}
              onChange={handleChange}
              />
              <div className='text-red-600'><ErrorMessage name='email'/></div><br/>
              <label htmlFor="password" className='flex font-bold'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                  </svg>
                  Password:
              </label>
              <Field 
              name="password"
              type="password" 
              id="password" 
              className="w-full p-2 m-2 border-x-2 border-y-2" 
              placeholder="contraseña"  
              value={values.password}
              onChange={handleChange}
              />
              <div className='text-red-600'><ErrorMessage name='password'/></div><br />
              <button type='submit' className='p-3 font-medium text-white bg-red-800 rounded-3xl hover:bg-red-950'>Iniciar Sesión</button>
            </Form>          
          </div>
      
    )}
    </Formik>
</div>
  )
}
