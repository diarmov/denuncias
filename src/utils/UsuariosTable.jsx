import React, { createRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage} from 'formik';
import * as yup from 'yup';
import useDenuncias from "../hooks/useDenuncias";
import { MagnifyingGlassIcon, ChevronUpDownIcon } from "@heroicons/react/24/solid";
import { PencilIcon, UserPlusIcon, TrashIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { Card, CardHeader,  Input, div,  Button, CardBody, Chip, CardFooter, Tabs, TabsHeader, Tab, Avatar, IconButton, Tooltip } from "@material-tailwind/react";

const SUPPORTED_FORMATS =["image/jpg", "image/jpeg", "image/png"];

const TABLE_HEAD = ["Usuario", "Email", "Rol", "Estatus", "Acciones"];

const isRequired ="Campo obligatorio"
const FormSchema = yup.object().shape({

  name: yup.string().required(isRequired),
  apellidos: yup.string().required(isRequired),
  email: yup.string().required(isRequired).email('El correo es invalido'),
  rol: yup.string().required(isRequired),
  direccion: yup.string().required(isRequired),
  foto: yup.mixed()
      .nullable()
      .required(isRequired)
      .test(
        "FILE_SIZE", 
        "La imagen no puede ser superior a 5MB.",
         (value) => !value || (value && value.size <= 1024 * 1024)
      )
      .test(
        "FILE_FORMAT",
        "Tipo de archivo inválido. Solo se permiten imágenes en formato .jpg, .jpeg y .png",
        (value) => !value || (value && SUPPORTED_FORMATS.includes(value?.type))
      )
      ,
  password: yup
    .string()
    .required(isRequired)
    .min(8, 'El password debe contener al menos 8 caracteres')
    .matches(/[0-9]/, 'El password requiere un número')
    .matches(/[a-z]/, 'El password requiere una minúscula al menos')
    .matches(/[A-Z]/, 'El password requiere una mayúscula al menos')
    .matches(/[^\w]/, 'El password requiere un simbolo'),
  password_confirmation: yup
    .string()
    .required(isRequired)
    .oneOf([yup.ref('password'), null], 'Debe coincidir con el valor del campo "password"'),
});

//const ITEMS_PER_PAGE = 10;
 
export default function UsuariosTable() {
  const { usuarios } = useDenuncias();

  const handleSubmit = (values) =>{
    if (values && values.preventDefault) { values.preventDefault(); }
    
    const datos = {
      nombre : values?.nombre,
      apellidos : values?.apellidos,
      email : values?.email,
      rol : values?.rol,
      foto : values?.foto.nombre,
      direccion : values?.direccion,
      password : values?.password,
      password_confirmation : values?.password_confirmation,
    }

    console.log(datos);

  }

    const editar = (values) => {
        window.alert('Probando Editar');
        }
    const eliminar = (id) => {
        window.alert('Probando Eliminar');
        }
    const [showModal, setShowModal] = React.useState(false);


  return (
    <>
    <div>
      <Card className="flex w-full">
      <CardHeader className="p-3 rounded-sm">
        <div className="flex items-center justify-between gap-8 mb-8">
          <div className="flex flex-col gap-2 shrink-0 sm:flex-row">
            <Button className="flex items-center gap-3 bg-blue-600"  size="sm" onClick={() => setShowModal(true)}>
              <UserPlusIcon strokeWidth={2} className="w-4 h-4" /> Crear Usuario
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 p-3 md:flex-row">
          <div className="w-1/4 ">
            <Input  icon={<MagnifyingGlassIcon className="w-5 h-5 p-" />} className="rounded-xl" title="Buscar"/>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-5">
        <table className="w-full mt-4 text-left table-auto min-w-max">
          <thead>
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th
                  key={head}
                  className="p-4 transition-colors cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 hover:bg-blue-gray-50"
                >
                  <div
                    variant="small"
                    className="flex items-center justify-between gap-2 font-normal leading-none blue-gray opacity-70"
                  >
                    {head}{" "}
                    {index !== TABLE_HEAD.length - 1 && (
                      <ChevronUpDownIcon strokeWidth={2} className="w-4 h-4" />
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {usuarios?.map(({id, foto, name, apellidos, direccion, email, rol, estatus}, index) => {
              const isLast = index === usuarios.length - 1;
              const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
              return (
                <tr key={id} className="hover:bg-gray-500 hover:text-white">
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      <Avatar src={foto} alt={name} className="rounded-full sm" />
                      <div className="flex flex-col">
                        <div variant="small" className="font-normal blue-gray">
                          {name} {apellidos}
                        </div>
                        <div
                          variant="small"
                          className="font-normal blue-gray opacity-70"
                        >
                          {direccion}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="flex flex-col">
                      <div variant="small" className="font-normal blue-gray">
                        {email}
                      </div>
                      <div
                        variant="small"
                        className="font-normal blue-gray opacity-70"
                      >

                      </div>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="flex flex-col">
                      <div variant="small" className="font-normal blue-gray">
                        {rol}
                      </div>
                      <div
                        variant="small"
                        className="font-normal blue-gray opacity-70"
                      >
                        
                      </div>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="w-max">
                      <div variant="ghost" size="sm">
                        {estatus}
                      </div>
                    </div>
                  </td>
                  <td className={classes}>
                    <Tooltip content="Editar Usuario">
                      <IconButton className="blue-gray" title="Editar Usuario" onClick={editar}>
                        <PencilIcon className="w-4 h-4" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip content="Eliminar Usuario">
                      <IconButton className="bg-red-700"  title="Eliminar Usuario" onClick={eliminar.bind(this, id)}>
                        <TrashIcon className="w-4 h-4" />
                      </IconButton>
                    </Tooltip>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between p-4 border-t border-blue-gray-50">
        <div variant="small" className="font-normal blue-gray">
          Pagina 1 of 10
        </div>
        <div className="flex gap-2">
          <Button variant="outlined" className="blue-gray" size="sm">
            Anterior
          </Button>
          <Button variant="outlined" className="blue-gray" size="sm">
            Siguiente
          </Button>
        </div>
      </CardFooter>
      </Card>
      {showModal ? (
            <div
            className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
          >
            <div className="relative w-auto max-w-3xl mx-auto my-6 shadow-2xl">
              {/*content*/}
              <div className="relative flex flex-col w-full bg-white border-0 shadow-2xl outline-none focus:outline-none ">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-slate-200 bg-slate-300">
                  <h3 className="text-3xl font-semibold">
                    Crear nuevo usuario
                  </h3>
                  <button
                    className="float-right text-3xl font-semibold leading-none text-gray-500 border-0 outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="">
                      X
                    </span>
                  </button>
                  
                </div>
                {/*body*/}
                <Formik
                    initialValues={{ 
                        name:"",
                        apellidos:"",
                        email:"",
                        rol:"",
                        password:"",
                        password_confirmation:"",
                        foto:null,
                        direccion:"",
                        }}
                        validationSchema={FormSchema}
                        onSubmit={handleSubmit}
                    >
                    {( {values, handleSubmit, handleChange, errors, setFieldValue} ) => (
                          <div className='flex-col px-5 text-center bg-white'>
                            <Form>
                                <div className="relative flex-auto p-6">
                                  <div className="flex flex-grow w-full my-4 text-lg leading-relaxed text-slate-500">
                                    <div className="m-1">
                                        <Field 
                                            type="input" 
                                            name="name" 
                                            placeholder="Nombre de usuario" 
                                            className="p-3 border rounded-lg"
                                            value={values.name}
                                            onChange={handleChange}
                                        />
                                        <div className='text-red-600'>{errors.name && errors.name }</div>
                                    </div>
                                    <div className="m-1">
                                        <Field 
                                            type="input" 
                                            name="apellidos" 
                                            placeholder="Apellidos de usuario" 
                                            className="p-3 border rounded-lg" 
                                            value={values.apellidos}
                                            onChange={handleChange}
                                        />
                                        <div className='text-red-600'>{errors.apellidos && errors.apellidos }</div>
                                    </div>
                                    <div className="m-1">
                                        <Field 
                                            type="email" 
                                            name="email" 
                                            placeholder="Email" 
                                            className="p-3 rounded-lg"
                                            value={values.email}
                                            onChange={handleChange}
                                        />
                                        <div className='text-red-600'>{errors.email && errors.email }</div>
                                    </div>
                                  </div>
                                  <div className="flex flex-grow w-full my-4 text-lg leading-relaxed text-slate-500">
                                      <div className="m-1">
                                        <Field 
                                          as="select" 
                                          name="rol" 
                                          className="p-3 rounded-lg"
                                          aria-label="Rol de usuario"
                                          value={values.rol}
                                          onChange={handleChange}>
                                          <option value="">Rol de usuario</option>
                                          <option value="rol1">Rol 1</option>
                                          <option value="rol2">Rol 2</option>
                                          <option value="rol3">Rol 3</option>
                                          <option value="rol4">Rol 4</option>
                                          <option value="rol5">Rol 5</option>
                                        </Field>
                                        <div className='text-red-600'>{errors.rol && errors.rol }</div>
                                      </div>
                                      <div className="m-1">
                                      <label htmlFor="foto" className="mr-2">Foto de perfil</label>
                                        <input
                                        type="file"
                                        name="foto"
                                        className="border rounded-lg"
                                        aria-label="Fotografía"
                                        onChange={(event) => {
                                            setFieldValue("foto", event.target.files[0])
                                          }
                                        }
                                        />
                                        <div div className='text-red-600'>{errors.foto && errors.foto }</div>
                                      </div>
                                  </div>
                                  <div className="flex flex-grow w-full my-4 text-lg leading-relaxed text-slate-500">
                                      <div className="m-1">
                                        <Field 
                                          type="text"
                                          name="direccion"
                                          placeholder="Departamento o Dirección"
                                          className="p-3 rounded-lg"
                                          autoComplete="on"
                                          value={values.direccion}
                                          onChange={handleChange}
                                        />
                                        <div div className='text-red-600'>{errors.direccion && errors.direccion }</div>
                                      </div>
                                      <div className="m-1">
                                        <Field 
                                            type="password" 
                                            name="password" 
                                            placeholder="Contraseña" 
                                            className="p-3 rounded-lg"
                                            autoComplete="on"
                                            value={values.password}
                                            onChange={handleChange}
                                        />
                                        <div className='text-red-600'>{errors.password && errors.password }</div>
                                      </div>
                                      <div className="m-1">
                                        <Field 
                                            type="password" 
                                            name="password_confirmation" 
                                            placeholder="Repite tu Contraseña" 
                                            className="p-3 border rounded-lg"
                                            autoComplete="on"
                                            value={values.password_confirmation}
                                            onChange={handleChange}
                                        />
                                      <div div className='text-red-600'>{errors.password_confirmation && errors.password_confirmation }</div>
                                      </div>
                                  </div>
                                </div>
                                <div className="flex items-center justify-end p-6 border-t border-solid rounded-b border-slate-200">
                                  <button
                                    className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-red-500 rounded shadow outline-none active:bg-red-600 hover:shadow-lg focus:outline-none"
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                  >
                                    Close
                                  </button>
                                  <button
                                    className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 rounded shadow outline-none active:bg-blue-600 hover:shadow-lg focus:outline-none"
                                    type="submit">
                                    Guardar
                                  </button>
                                </div>
                            </Form>         
                          </div>
                    )}
                    </Formik>                                                            
              </div>
            </div>
            </div>
        ) : null}
    </div>
    </>   
    
  );
}