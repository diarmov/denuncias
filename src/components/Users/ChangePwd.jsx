import { useFormik } from "formik";
import { object, string, ref } from 'yup';
import { Button, Label, TextInput } from "flowbite-react";

import { useUsersStore } from "../../hooks/useUsersStore";
import { useUiStore } from "../../hooks/useUiStore";
import { useAuthStore } from "../../hooks/useAuthStore";


const ChangePwd = () => {
    const { onUpdate } = useUsersStore()
    const { onModalPwd } = useUiStore()
    const { active } = useAuthStore()

    const onValidation = () => {        
        return object({
            password: string().required('Este campo es requerido')
                        .min(8, 'la contraseña debe contener al menos 8 caracteres')
                        .matches(/[0-9]/, 'La contraseña debe contener un número al menos')
                        .matches(/[a-z]/, 'La contraseña debe contener una minúscula al menos')
                        .matches(/[A-Z]/, 'La contraseña debe contener una mayúscula al menos')
                        .matches(/[^\w]/, 'La contraseña debe contener un simbolo al menos'),
            confirm: string().required('Este campo es requerido').oneOf([ref('password'), null], 'Las contraseñas no coinciden'),
        });
        
    }

    const { handleSubmit,  handleChange, values, touched, errors, resetForm } = useFormik({
        initialValues: {
            action: 'change-pass',
            password:'',
            confirm: '',
        },      
        onSubmit: async values => {
          await onUpdate({ ...values, id: active.id })
          onModalPwd(undefined)
          resetForm()
        },
        validationSchema: onValidation()
      });
    
  return (
    <form onSubmit={handleSubmit} className='mb-4'>  
    <div className='grid grid-cols-1'>
       <input type='hidden' value={values.action} />       
       <div>
         <Label htmlFor="password" value="Nueva contraseña"/>
         <TextInput               
             placeholder="Contraseña"
             type="password"
             name='password'
             onChange={handleChange}
             value={values.password}
         />
         { touched.password && errors.password ? (<div className='text-sm text-red-600'>{errors.password}</div>) : null }
       </div>

       <div className="mt-3">
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
    </div>

     <div className='mt-3'>
       <Button 
         type="submit" 
         className='bg-red-900 hover:bg-red-950 ml-2'>
             Guardar
         </Button>
     </div>


</form>
  )
}

export default ChangePwd
