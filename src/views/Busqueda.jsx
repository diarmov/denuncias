import { useEffect } from 'react'
import { useFormik} from 'formik'
import { Button, Label, TextInput } from 'flowbite-react'

import { useCatalogoStore } from '../hooks/useCatalogoStore'
import { SelectControl } from '../components/forms'
import { Details, TableBusqueda } from '../components/busqueda'
import { useBusquedaStore } from '../hooks/useBusquedaStore'

const informes = [
  {value: 1, label: 'Informe 2021'},
  {value: 2, label: 'Informe 2022'}
]


export default function Busqueda({ onSetSelectedLink, link }) {
  const { captacion, tipo, dependencia, clasificacion, estatus, onGetCatalogos, onGetEstatus  } = useCatalogoStore()
  const { paginate, search, onGetDenuncias, onResetSearch   } = useBusquedaStore()

  const { handleSubmit, values, setValues, handleChange, setFieldValue  } = useFormik({
    initialValues: search,      
    onSubmit: async values => {
      await onGetDenuncias( values )
    }
  });

  useEffect(() => {
    onSetSelectedLink(link)
    if(paginate.length === 0) onGetDenuncias( values )
    if(captacion.length === 0) onGetCatalogos()
  },[])

  useEffect(() => {
    if( estatus.length === 0) onGetEstatus( 13 )
  }, [])


  const filtersOff = async () => {
    await onGetDenuncias({
      idCaptacion: '',
      idTipoFalta:'',
      idDependencia:'',
      idClasificacion:'',
      informe:'',
    })
    setValues({
      idCaptacion: '',
      idTipoFalta:'',
      idDependencia:'',
      idClasificacion:'',
      informe:'',
    })
    onResetSearch()
  }

  return (
    <>
      <div className="md:p-9 p-3 ">
        <div className="w-full text-center md:text-4xl text-2xl mb-3">Búsqueda Avanzada</div>
        <div className="w-full font-semibold text-center md:text-lg text-1xl mb-3">Aquí podrás realizar búsquedas específicas</div>

        
        
        <div className="w-full text-base  mb-3 p-6 rounded-md shadow-md mt-3">
            <form onSubmit={handleSubmit} className='mb-4'> 
                  <div className='grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2'>
                      <div>
                        <Label htmlFor="idDependencia" value="Dependencia"/>
                        <SelectControl 
                          options={dependencia}
                          value={values.idDependencia}
                          onChange={value=>setFieldValue('idDependencia', value.value)}
                        />
                      </div>

                      <div>
                        <Label htmlFor="idCaptacion" value="Medio de Captación"/>
                        <SelectControl 
                          options={captacion}
                          value={values.idCaptacion}
                          onChange={value=>setFieldValue('idCaptacion', value.value)}
                        />                       
                      </div>

                      <div>
                        <Label htmlFor="idTipoFalta" value="Tipo de falta"/>
                        <SelectControl 
                          options={tipo}
                          value={values.idTipoFalta}
                          onChange={value=>setFieldValue('idTipoFalta', value.value)}
                        />                      
                      </div>

                      <div className='mt-2'>
                        <Label htmlFor="idClasificacion" value="Clasificación"/>
                        <SelectControl 
                          options={clasificacion}
                          value={values.idClasificacion}
                          onChange={value=>setFieldValue('idClasificacion', value.value)}
                        />                  
                      </div>

                      <div className='mt-2'>
                        <Label htmlFor="informe" value="# Informe"/>
                        <SelectControl 
                          options={informes}
                          value={values.informe}
                          onChange={value=>setFieldValue('informe', value.value)}
                        />                       
                      </div>

                      <div className='mt-2 w-64'>
                        <div className="flex">
                        <Button 
                          type="submit" 
                          className='bg-red-900 hover:bg-red-950 mt-5'
                         > Buscar
                        </Button>

                        <Button 
                          type="button" 
                          className='mt-5 ml-2'
                          color="light"
                          onClick={ filtersOff }
                         > 
                         Quitar filtros
                        </Button>
                        </div>
                      </div>                    

                  </div>
            </form>          
        </div>

        <Details />

        <div className="overflow-x-auto text-center md:text-sm text-xs mb-3 mt-5">
          <TableBusqueda />
        </div>
      </div>
    </>
  )
}
