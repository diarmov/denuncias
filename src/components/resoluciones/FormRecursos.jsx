import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useFormik } from "formik";
import { object, string } from 'yup';

import { useUiStore } from "../../hooks/useUiStore";
import { useResolucionStore } from "../../hooks/useResolucionStore";


export const FormRecursos = () => {
    const { resolucion, onStoreRecurso } = useResolucionStore()
    const { loading } = useUiStore()

    const validations = object({
        folio: string().required('Indicar el folio de la impugnación'),
        fecha: string().required('Indicar la fecha de la impugnación'),
    });

    const { handleSubmit,  handleChange, values, touched, errors, resetForm } = useFormik({
        initialValues: {
            folio: '',
            fecha: '',
            folio_amparo: ''
        },      
        onSubmit: async values => {
            await onStoreRecurso({ ...values, idresolucion: resolucion.id })
            resetForm()
            document.getElementById("amparo").checked = false;
        },
        validationSchema: validations
    });

  return (
    <form onSubmit={handleSubmit} className='mb-4'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>  
            <div className='mt-2'>
                <Label htmlFor="folio" value="Folio de la impugnación"/>
                <TextInput               
                    placeholder="Folio del impugnación"
                    type="text"
                    name='folio'
                    onChange={handleChange}
                    value={values.folio}
                />
                { touched.folio && errors.folio ? (<div className='text-sm text-red-600'>{errors.folio}</div>) : null }
            </div>

            <div className='mt-2'>
                <Label htmlFor="fecha" value="Fecha de interposición de la impugnación"/>
                <TextInput 
                    type="date"
                    name='fecha'
                    onChange={handleChange}
                    value={values.fecha}
                />
                { touched.fecha && errors.fecha ? (<div className='text-sm text-red-600'>{errors.fecha}</div>) : null }
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
            </div>
    </form>
  )
}
