import { ErrorMessage, useField } from 'formik';


export const TextInput = ({ label, icon, ...props }) => {
  const [ field ] = useField( props);

  return (
    <>
      <label htmlFor={ props.id || props.name } className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        { icon } <span className='ml-2'>{ label }</span>
        </label>
      <input 
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
        { ...field } 
        { ...props }
      />
      <ErrorMessage name={props.name} component='span' className='text-sm text-red-600'/>
    </>
  )
}
