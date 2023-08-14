import * as React from 'react'
import { Formik, Form, } from 'formik'
import { object, string } from 'yup';
import { TextInput } from './forms/TextInput';
import { AlternateEmail, Key } from '@mui/icons-material';
import { useAuthStore } from '../hooks/useAuthStore';

const Loginform = () => {
  const { onLogin } = useAuthStore()
  return (
    <div className='w-full p-10'>
    <h1 className='text-3xl font-bold text-center'>Inicio de sesión</h1>

      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={ (values) => {
          onLogin( values );
        }}
        validationSchema = { 
          object({
            email: string().required('Ingrese su correo electronico').email('Ingrese un correo valido'),
            password: string().required('Ingrese su contraseña')
          })
        }
      >
        {
          () => (
            <div className='px-5 py-10 mt-10 text-center bg-white'>
              <Form>
                
                <TextInput label="Email" name='email' placeholder='Email' type='email' icon={ <AlternateEmail /> } />
                <TextInput label="Password" name='password' placeholder='Contraseña' type='password' icon={ <Key /> } />
                
                <div className='mt-4'>                
                  <button 
                    type="submit"
                    className='p-3 font-medium text-white bg-red-800 rounded-3xl hover:bg-red-950'
                  >
                    Iniciar sesión
                  </button>
                </div>
                
              </Form>
            </div>

          )
        }
      </Formik>
    </div>
  )
}

export default Loginform;

