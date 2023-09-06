import { memo, useEffect } from 'react';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { SelectControl } from '../forms';

import { useCatalogoStore } from '../../hooks/useCatalogoStore';
import { useUiStore } from '../../hooks/useUiStore';
import { useResolucionStore } from '../../hooks/useResolucionStore';

export const FormResolucion = memo(({ idDenuncia }) => {
    const { resolucion, onStore, onUpdate } = useResolucionStore()
    const { estatus,  ubicacion  } = useCatalogoStore()
    const { onModal } = useUiStore()
    const { loading } = useUiStore()

    const validations = object({
        folio: string().required('Ingrese el folio de la resolución'),
        fecha: string().required('Ingresela la fecha'),
        idEstatus: string().required('Indicar el estatus de la resolución'),
        idUbicacion: string().required('Indicar la ubicación actual'),
    });

    const { handleSubmit,  handleChange, values, setFieldValue, touched, errors, resetForm, setValues } = useFormik({
        initialValues: resolucion,      
        onSubmit: async values => {
            resolucion.id > 0
            ? await onUpdate( values )
            : await onStore({ ...values, idDenuncia })
            resetForm()
            document.getElementById("impugnacion").checked = false;
        },
        validationSchema: validations
    });

    useEffect(() => {
        if( resolucion.id > 0 ) setValues(resolucion)
    }, [resolucion])

  return (
    <div>        
        <form onSubmit={handleSubmit} className='mb-4'>  
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                <div className='mt-2'>
                    <Label htmlFor="folio" value="Folio"/>
                    <TextInput               
                        placeholder="Folio"
                        type="text"
                        name='folio'
                        onChange={handleChange}
                        value={values.folio}
                    />
                    { touched.folio && errors.folio ? (<div className='text-sm text-red-600'>{errors.folio}</div>) : null }
                </div>
        
                <div className='mt-2'>
                    <Label htmlFor="fecha" value="Fecha"/>
                    <TextInput               
                        placeholder="Fecha"
                        type="date"
                        name='fecha'
                        onChange={handleChange}
                        value={values.fecha}
                    />
                    { touched.fecha && errors.fecha ? (<div className='text-sm text-red-600'>{errors.fecha}</div>) : null }
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

                {
                    values.idEstatus === 12 && (
                        <div className="mt-2 pt-5 col-span-2">
                            <Checkbox 
                                id="impugnacion"
                                name='impugnacion'
                                onChange={handleChange}
                                value={values.impugnacion}
                            />
                            <Label htmlFor="impugnacion" className='ml-2'>
                                ¿La resolución esta impugnada?
                            </Label>
                        </div>
                    )
                }
                
                {
                    values.impugnacion && (
                        <>
                         <div className='mt-2'>
                            <Label htmlFor="folio_recurso" value="Folio del recurso"/>
                            <TextInput               
                                placeholder="Folio del recurso"
                                type="text"
                                name='folio_recurso'
                                onChange={handleChange}
                                value={values.folio_recurso}
                            />
                            { touched.folio_recurso && errors.folio_recurso ? (<div className='text-sm text-red-600'>{errors.folio_recurso}</div>) : null }
                        </div>
                
                        <div className='mt-2'>
                            <Label htmlFor="fecha_recurso" value="Fecha de interposición de recurso"/>
                            <TextInput               
                                placeholder="Fecha de interposición de recursocha"
                                type="date"
                                name='fecha_recurso'
                                onChange={handleChange}
                                value={values.fecha_recurso}
                            />
                            { touched.fecha_recurso && errors.fecha_recurso ? (<div className='text-sm text-red-600'>{errors.fecha_recurso}</div>) : null }
                        </div> 
                    
                        <div className="mt-2 pt-5">
                            <Checkbox 
                                id="amparo"
                                name='amparo'
                                onChange={handleChange}
                                value={values.amparo}
                            />
                            <Label htmlFor="amparo" className='ml-2'>
                                ¿La impugnación tiene amparo?
                            </Label>
                        </div>

                        {
                            values.amparo && (
                            <div className='mt-2'>
                                <Label htmlFor="folio_amparo" value="Folio del amparo"/>
                                <TextInput               
                                    placeholder="Folio del amparo"
                                    type="text"
                                    name='folio_amparo'
                                    onChange={handleChange}
                                    value={values.folio_amparo}
                                />
                               
                            </div>
                            )

                        }
                        
                        </>
                    )
                }
            </div>

            <div className='mt-3 flex'>
                <Button 
                    isProcessing={loading}
                    disabled={loading}
                    type="submit" 
                    className='ml-2'
                >
                        Guardar
                </Button>

                <Button              
                    type="button" 
                    className='ml-2'
                    color="gray"
                    onClick={()=>onModal(undefined)}
                >
                    Cancelar
                </Button>
            
            </div>
        
        </form>
    </div>
  )
})
