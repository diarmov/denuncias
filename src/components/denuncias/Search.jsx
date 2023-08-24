import { useFormik } from 'formik'
import { HiDocumentSearch } from 'react-icons/hi';
import { FilterAltOff } from '@mui/icons-material';

import { useDenunciasStore } from '../../hooks/useDenunciasStore';
import { Button, TextInput } from 'flowbite-react';

export const Search = () => {
  const { search, onGetDenuncias, onSearch, onSetSearch } = useDenunciasStore()

  const formik = useFormik({
    initialValues: {
       search: '',
    },
    onSubmit: values => {
        onSearch( values );
    },
  });

  const handleSearch = async() => {
    await onGetDenuncias()
    onSetSearch( false )
  }

  return (
    <>
     <form onSubmit={formik.handleSubmit} className='mb-4'>      
       <div className="flex">
        <TextInput
                className='flex-initial w-80'
                rightIcon={HiDocumentSearch}
                placeholder="Buscar carpeta de denuncia"
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
