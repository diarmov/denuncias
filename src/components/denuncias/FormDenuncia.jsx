import { useFormik } from 'formik';
import { object, string } from 'yup';
import { Button, Label, TextInput, Textarea } from 'flowbite-react';


import { SelectControl } from '../forms/SelectControl';
import { useCatalogoStore } from '../../hooks/useCatalogoStore';
import { useDenunciasStore } from '../../hooks/useDenunciasStore';
import { useUiStore } from '../../hooks/useUiStore';
import { useEffect } from 'react';

export const FormDenuncia = () => {
    const { origen, etapa,  estatus, tipo, clasificacion, dependencia, ubicacion  } = useCatalogoStore()
    const { denuncia, onStore, onUpdate } = useDenunciasStore()
    const { loading } = useUiStore()


    const validations = object({
      fechaIniRadi: string().required('Ingrese la fecha de radicación e inicio'),
      asunto: string().required('Ingrese el asunto de la denuncia'),
      idOrigen: string().required('Indicar el origen de la denuncia'),
      idEtapa: string().required('Indicar la etapa de la denuncia'),
      idEstatus: string().required('Indicar el estatus de la denuncia'),
      idTipoFalta: string().required('Indicar el tipo de falta'),
      idClasificacion: string().required('Indicar la clasificación'),
      idDependencia: string().required('Indicar la dependencia'),
      idUbicacion: string().required('Indicar la ubicación actual'),
    });

    const { handleSubmit,  handleChange, values, setFieldValue, touched, errors, resetForm, setValues } = useFormik({
      initialValues: denuncia,      
      onSubmit: async values => {
        denuncia.id > 0
        ? await onUpdate( values )
        : await onStore( values )
        resetForm()
      },
      validationSchema: validations
    });

    useEffect(() => {
        if( denuncia.id > 0 ) setValues(denuncia)
    }, [denuncia])
    
  return (
    <>
      <form onSubmit={handleSubmit} className='mb-4'>  
         <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>

            <div className='mt-2'>
              <Label htmlFor="numExpUif" value="Folio Uif"/>
              <TextInput               
                  placeholder="Folio Uif"
                  type="text"
                  name='numExpUif'
                  onChange={handleChange}
                  value={values.numExpUif}
              />
            </div>
            
            <div className='mt-2'>
              <Label htmlFor="numExpOic" value="Folio Oic"/>
              <TextInput               
                  placeholder="Folio Oic"
                  type="text"
                  name='numExpOic'
                  onChange={handleChange}
                  value={values.numExpOic}
              />
            </div>
            {
              denuncia.id > 0 && (
                <div className='mt-2'>
                  <Label htmlFor="numExpSubs" value="Folio Substanciación"/>
                  <TextInput               
                      placeholder="Folio Substanciación"
                      type="text"
                      name='numExpSubs'
                      onChange={handleChange}
                      value={values.numExpSubs}
                  />
                </div> 
              )
              }
               

            {
              denuncia.id === 0 && (
                <>
                   <div className='mt-2'>
                    <Label htmlFor="fechaIniRadi" value="Fecha de radicación e inicio"/>
                    <TextInput               
                        placeholder="Fecha de radicación e inicio"
                        type="date"
                        name='fechaIniRadi'
                        onChange={handleChange}
                        value={values.fechaIniRadi}
                    />
                    { touched.fechaIniRadi && errors.fechaIniRadi ? (<div className='text-sm text-red-600'>{errors.fechaIniRadi}</div>) : null }
                  </div>

                  <div className='mt-2'>
                    <Label htmlFor="idOrigen" value="Origen de la denuncia"/>
                    <SelectControl 
                      options={origen}
                      value={values.idOrigen}
                      onChange={value=>setFieldValue('idOrigen', value.value)}
                    />
                    { touched.idOrigen && errors.idOrigen ? (<div className='text-sm text-red-600'>{errors.idOrigen}</div>) : null }
                  </div>

                  <div className='mt-2'>
                    <Label htmlFor="asunto" value="Asunto"/>
                    <TextInput               
                        placeholder="Indique el asusto"
                        type="text"
                        name='asunto'
                        onChange={handleChange}
                        value={values.asunto}
                    />
                    { touched.asunto && errors.asunto ? (<div className='text-sm text-red-600'>{errors.asunto}</div>) : null }
                  </div>


                  <div className='mt-2'>
                    <Label htmlFor="idTipoFalta" value="Tipo de falta"/>
                    <SelectControl 
                      options={tipo}
                      value={values.idTipoFalta}
                      onChange={value=>setFieldValue('idTipoFalta', value.value)}
                    />
                    { touched.idTipoFalta && errors.idTipoFalta ? (<div className='text-sm text-red-600'>{errors.idTipoFalta}</div>) : null }
                  </div>

                  <div className='mt-2'>
                    <Label htmlFor="idClasificacion" value="Clasificación"/>
                    <SelectControl 
                      options={clasificacion}
                      value={values.idClasificacion}
                      onChange={value=>setFieldValue('idClasificacion', value.value)}
                    />
                    { touched.idClasificacion && errors.idClasificacion ? (<div className='text-sm text-red-600'>{errors.idClasificacion}</div>) : null }
                  </div>

                  <div className='mt-2'>
                    <Label htmlFor="idDependencia" value="Dependencia"/>
                    <SelectControl 
                      options={dependencia}
                      value={values.idDependencia}
                      onChange={value=>setFieldValue('idDependencia', value.value)}
                    />
                    { touched.idDependencia && errors.idDependencia ? (<div className='text-sm text-red-600'>{errors.idDependencia}</div>) : null }
                  </div>
                </>
              ) 
            }
           

            <div className='mt-2'>
              <Label htmlFor="idEtapa" value="Etapa actual de la denuncia"/>
              <SelectControl 
                options={etapa}
                value={values.idEtapa}
                onChange={value=>setFieldValue('idEtapa', value.value)}
              />
              { touched.idEtapa && errors.idEtapa ? (<div className='text-sm text-red-600'>{errors.idEtapa}</div>) : null }
            </div>
         
            <div className='mt-2'>
              <Label htmlFor="idEstatus" value="Estatus actual de la denuncia"/>
              <SelectControl 
                options={estatus}
                value={values.idEstatus}
                onChange={value=>setFieldValue('idEstatus', value.value)}
              />
              { touched.idEstatus && errors.idEstatus ? (<div className='text-sm text-red-600'>{errors.idEstatus}</div>) : null }
            </div>

            <div className='mt-2'>
              <Label htmlFor="idUbicacion" value="Ubicación"/>
              <SelectControl 
                options={ubicacion}
                value={values.idUbicacion}
                onChange={value=>setFieldValue('idUbicacion', value.value)}               
              />
               { touched.idUbicacion && errors.idUbicacion ? (<div className='text-sm text-red-600'>{errors.idUbicacion}</div>) : null }
            </div>  

            

            <div className="col-span-3 mt-2">
              <Label htmlFor="observacion" value="Observaciones"/>
               <Textarea               
                placeholder="Observaciones a la denuncia"               
                rows={3}
                name='observacion'
                onChange={handleChange}
                value={values.observacion}
              />
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
    </>
  )
}

