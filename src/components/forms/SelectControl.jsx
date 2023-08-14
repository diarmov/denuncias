import { useField } from 'formik';


export const SelectControl = ({ label, ...props }) => {
  const [ field, meta ] = useField( props);

  return (
    <>
      <label htmlFor={ props.id || props.name }>{ label }</label>
      <select { ...field } { ...props } />
      {
        meta.touched && meta.error && (
           <span className='error'>{meta.error}</span> 
        )
      } 
    </>
  )
}