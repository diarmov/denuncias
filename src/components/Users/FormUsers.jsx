import { useEffect } from 'react';
import { useFormik } from 'formik';
import { object, string, ref } from 'yup';
import { Button, Label, TextInput } from 'flowbite-react';

import { SelectControl } from '../forms';
import { useUiStore } from '../../hooks/useUiStore';
import { useUsersStore } from '../../hooks/useUsersStore';

export const FormUsers = () => {
  const { user, roles, onStore, onUpdate, onResetUser } = useUsersStore()
  const { loading, modal } = useUiStore()

  const onValidation = () => {
    if (user.id > 0 ) {
       return object({
        name: string().required('Ingrese la Contraseña'),
        apellidos: string().required('Ingrese el asunto de la denuncia'),
        email: string().required('Este campo es requerido').email('Ingrese un correo valido'),
        role_id: string().required('Indicar el perfil del usuario'),
      });
    } else {
      return object({
        name: string().required('Ingrese la Contraseña'),
        apellidos: string().required('Ingrese el asunto de la denuncia'),
        email: string().required('Este campo es requerido').email('Ingrese un correo valido'),
        password: string().required('Este campo es requerido')
                  .min(8, 'la contraseña debe contener al menos 8 caracteres')
                  .matches(/[0-9]/, 'La contraseña debe contener un número al menos')
                  .matches(/[a-z]/, 'La contraseña debe contener una minúscula al menos')
                  .matches(/[A-Z]/, 'La contraseña debe contener una mayúscula al menos')
                  .matches(/[^\w]/, 'La contraseña debe contener un simbolo al menos'),
        confirm: string().required('Este campo es requerido').oneOf([ref('password'), null], 'Las contraseñas no coinciden'),
        role_id: string().required('Indicar el perfil del usuario'),
      });
    }
  }

  const { handleSubmit,  handleChange, values, setFieldValue, touched, errors, resetForm, setValues } = useFormik({
    initialValues: user,      
    onSubmit: async values => {
      let res
      user.id > 0
        ? res = await onUpdate( values )
        : res = await onStore( values )

      res && resetForm()
      
    },
    validationSchema: onValidation()
  });

  useEffect(() => {
      if( user.id > 0 ) setValues(user)
  }, [user])

  useEffect(() => {
    if(modal === undefined) onResetUser()
  }, [modal])
  

  // useEffect(() => {
  //   values.role_id === 3 ? onSetOpen( true ) : onSetOpen( false )
  //   onGetEstatus( values.role_id )
  // }, [values.role_id])

  const handleBack = () => {
    onResetDenuncia()
    resetForm()
  }

return (
    <form onSubmit={handleSubmit} className='mb-4'>  
       <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>

          <div className=''>
            <Label htmlFor="name" value="Nombre"/>
            <TextInput               
                placeholder="Nombre"
                type="text"
                name='name'
                onChange={handleChange}
                value={values.name}
            />
            { touched.name && errors.name ? (<div className='text-sm text-red-600'>{errors.name}</div>) : null }
          </div>
          
          <div>
            <Label htmlFor="apellidos" value="Apellidos"/>
            <TextInput               
                placeholder="Apellidos"
                type="text"
                name='apellidos'
                onChange={handleChange}
                value={values.apellidos}
            />
            { touched.apellidos && errors.apellidos ? (<div className='text-sm text-red-600'>{errors.apellidos}</div>) : null }
          </div>

          <div>
            <Label htmlFor="email" value="Correo Electronico"/>
            <TextInput               
                placeholder="Correo Electronico"
                type="email"
                name='email'
                onChange={handleChange}
                value={values.email}
            />
            { touched.email && errors.email ? (<div className='text-sm text-red-600'>{errors.email}</div>) : null }
          </div>
          
          <div>
            <Label htmlFor="password" value="Contraseña"/>
            <TextInput               
                placeholder="Contraseña"
                type="password"
                name='password'
                onChange={handleChange}
                value={values.password}
            />
            { touched.password && errors.password ? (<div className='text-sm text-red-600'>{errors.password}</div>) : null }
          </div>

          <div>
            <Label htmlFor="confirm" value="Confirmar contraseña"/>
            <TextInput               
                placeholder="Confirmar contraseña"
                type="password"
                name='confirm'
                onChange={handleChange}
                value={values.confirm}
            />
            { touched.confirm && errors.confirm ? (<div className='text-sm text-red-600'>{errors.confirm}</div>) : null }
          </div>
         

          <div>
            <Label htmlFor="role_id" value="Perfil de usuario"/>
            <SelectControl
              options={roles}
              value={values.role_id}
              onChange={value=>setFieldValue('role_id', value.value)}
            />
            { touched.role_id && errors.role_id ? (<div className='text-sm text-red-600'>{errors.role_id}</div>) : null }
          </div>

       </div>

        <div className='mt-3'>
          <Button 
            isProcessing={loading}
            disabled={loading}
            type="submit" 
            className='ml-2'>
                Guardar
            </Button>
        </div>

  
   </form>
)
}

