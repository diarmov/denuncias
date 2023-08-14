import { ErrorMessage, useField } from 'formik';


export const TextInput = ({ label, icon, ...props }) => {
  const [ field ] = useField( props);

  return (
    <>
      <label htmlFor={ props.id || props.name } className='flex font-bold'>
        { icon } <span className='ml-2'>{ label }</span>
        </label>
      <input className='w-full p-2 m-2 border-x-2 border-y-2' { ...field } { ...props }/>
      <ErrorMessage name={props.name} component='span' className='text-sm text-red-600'/>
    </>
  )
}
