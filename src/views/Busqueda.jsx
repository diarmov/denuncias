import { useEffect } from 'react'
import { useFormik} from 'formik'
import { Button, Label } from 'flowbite-react'

import { useCatalogoStore } from '../hooks/useCatalogoStore'
import { SelectControl } from '../components/forms'
import { Details, TableBusqueda } from '../components/busqueda'
import { useBusquedaStore } from '../hooks/useBusquedaStore'


export default function Busqueda() {
  const { origen, tipo, dependencia, onGetCatalogos, onGetEstatus  } = useCatalogoStore()
  const { paginate, search, onGetDenuncias   } = useBusquedaStore()

  const { handleSubmit, values, setFieldValue, resetForm } = useFormik({
    initialValues: search,      
    onSubmit: async values => {
      await onGetDenuncias( values )
    }
  });

  useEffect(() => {
    if(paginate.length === 0) onGetDenuncias( values )
    if(origen.length === 0) onGetCatalogos()
  },[])

  useEffect(() => {
     if( values.idEtapa) onGetEstatus( values.idEtapa )
  }, [values.idEtapa])


  const filtersOff = async () => {
    resetForm()
    await onGetDenuncias({
      idOrigen: '',
      idTipoFalta:'',
      idDependencia:'',
    })
    onSetCustomSearch({
      idOrigen: '',
      idTipoFalta:'',
      idDependencia:'',
    })
  }

  return (
    <>
      <div className="md:p-9 p-3 ">
        <div className="w-full text-center md:text-4xl text-sm mb-3">Búsqueda Avanzada</div>
        <div className="w-full font-semibold text-center md:text-lg text-xs mb-3">Aquí podrás realizar búsquedas específicas</div>
        
        <div className="w-full md:text-base text-xs mb-3 p-6 rounded-md shadow-md mt-3">
            <form onSubmit={handleSubmit} className='mb-4'> 
                  <div className='grid grid-cols-1 sm:grid-cols-3 gap-x-4 gap-y-2'>
                      <div>
                        <Label htmlFor="idDependencia" value="Dependencia"/>
                        <SelectControl 
                          options={dependencia}
                          value={values.idDependencia}
                          onChange={value=>setFieldValue('idDependencia', value.value)}
                        />
                      </div>


                      <div>
                        <Label htmlFor="idOrigen" value="Origen de la denuncia"/>
                        <SelectControl 
                          options={origen}
                          value={values.idOrigen}
                          onChange={value=>setFieldValue('idOrigen', value.value)}
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

                      <div>
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
                         > Quitar filtros
                        </Button>
                        </div>
                      </div>                    

                  </div>
            </form>          
        </div>

        <Details />

        <div className="w-fulltext-center md:text-sm text-xs mb-3 mt-5">
          <TableBusqueda />
        </div>
      </div>
    </>
  )
}
