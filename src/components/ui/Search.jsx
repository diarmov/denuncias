import { useFormik } from 'formik'
import { HiDocumentSearch } from 'react-icons/hi';
import { FilterAltOff } from '@mui/icons-material';

import { Button, TextInput } from 'flowbite-react';
import { useUiStore } from '../../hooks/useUiStore';

export const Search = ({ onGetData, onSearch }) => {
  const { search, onSetSearch } = useUiStore()

  const formik = useFormik({
    initialValues: {
       search: '',
    },
    onSubmit: values => {
        onSearch( values );
    },
  });

  const handleSearch = async() => {
    await onGetData()
    onSetSearch( false )
    formik.resetForm()
  }

  return (
    <>
     <form onSubmit={formik.handleSubmit} className='mb-4'>      
       <div className="flex">
        <TextInput
                className='flex-initial w-80'
                rightIcon={HiDocumentSearch}
                placeholder="Buscar ...."
                required
                type="text"
                name='search'
                onChange={formik.handleChange}
                value={formik.values.search}
            />

           {
            search && (
                <div className='ml-2' onClick={ handleSearch }>
                    <FilterAltOff className='text-red-900 cursor-pointer'/>
                </div>
            )
           }

    
            <Button type="submit" className='ml-2'>
                Buscar
            </Button>
       </div>
     </form>

    </>
  )
}
