import Select from 'react-select';

export const SelectControl = ({ onChange, options, value, className }) => {

  const defaultValue = (options, value) => {
    if( options.find(option => option.value === value) ) 
      return  options.find(option => option.value === value) 
    else 
     return ""
  }
  
  return (
    <div className='custom-select'>
      <Select 
        value={defaultValue(options, value)}
        onChange={ value => onChange(value) }
        options={ options }
      />
    </div>
  )
}