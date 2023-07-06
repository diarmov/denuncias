import React from "react";
import { Formik, Form, Field, ErrorMessage} from 'formik';
import { MagnifyingGlassIcon, ChevronUpDownIcon } from "@heroicons/react/24/solid";
import { PencilIcon, UserPlusIcon, TrashIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
 
const TABS = [
  {
    label: "Todos",
    value: "todos",
  },
  {
    label: "Activos",
    value: "activos",
  },
  {
    label: "Inactivos",
    value: "inactivos",
  },
];
 
const TABLE_HEAD = ["Usuario", "Rol", "Estatus", "Puesto", ""];
 
const TABLE_ROWS = [
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
    name: "John Michael",
    email: "john@creative-tim.com",
    job: "Manager",
    org: "Organization",
    online: true,
    date: "23/04/18",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
    name: "Alexa Liras",
    email: "alexa@creative-tim.com",
    job: "Programator",
    org: "Developer",
    online: false,
    date: "23/04/18",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
    name: "Laurent Perrier",
    email: "laurent@creative-tim.com",
    job: "Executive",
    org: "Projects",
    online: false,
    date: "19/09/17",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
    name: "Michael Levi",
    email: "michael@creative-tim.com",
    job: "Programator",
    org: "Developer",
    online: true,
    date: "24/12/08",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
    name: "Richard Gran",
    email: "richard@creative-tim.com",
    job: "Manager",
    org: "Executive",
    online: false,
    date: "04/10/21",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-6.jpg",
    name: "Diego Morua",
    email: "diarmov@hotmail.com",
    job: "Developer",
    org: "Executive",
    online: true,
    date: "04/10/21",
  },
];
 
export default function UsuariosTable() {

    const crear = (values) => {
        window.location = '/busqueda';
        }
        const validar=(values) => {
          const errors= {};
          if(!values.nombre){
            errors.nombre = 'Ingresa tu nombre'
              }
          if(!values.apellidos){
             errors.apellidos = 'Ingresa tus apellidos'
              }
          if (!values.email) {
             errors.email = 'Ingresa tu correo electrónico';
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
                    errors.email = 'Dirección de correo no válida';
            }
            if(!values.rol){
                errors.rol = 'Elije el rol de usuario'
            }
          return errors;
        }

    const editar = (values) => {
        window.alert('Probando Editar');
        }
    const eliminar = (values) => {
        window.alert('Probando Eliminar');
        }

        const [showModal, setShowModal] = React.useState(false);
    
  return (
    <>
    <Card className="flex w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Button className="flex items-center gap-3 bg-blue-600"  size="sm" onClick={() => setShowModal(true)}>
              <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Crear Usuario
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Tabs value="all" className="w-full md:w-max">
            <TabsHeader>
              {TABS.map(({ label, value }) => (
                <Tab key={value} value={value}>
                  &nbsp;&nbsp;{label}&nbsp;&nbsp;
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
          <div className="w-full md:w-72">
            <Input label="Search" icon={<MagnifyingGlassIcon className="h-5 w-5" />} />
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th
                  key={head}
                  className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                >
                  <Typography
                    variant="small"
                    className="blue-gray flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                  >
                    {head}{" "}
                    {index !== TABLE_HEAD.length - 1 && (
                      <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                    )}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(({ img, name, email, job, org, online, date }, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
              return (
                <tr key={name}>
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      <Avatar src={img} alt={name} className="sm" />
                      <div className="flex flex-col">
                        <Typography variant="small" className="blue-gray font-normal">
                          {name}
                        </Typography>
                        <Typography
                          variant="small"
                          className="blue-gray font-normal opacity-70"
                        >
                          {email}
                        </Typography>
                      </div>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="flex flex-col">
                      <Typography variant="small" color="blue-gray font-normal">
                        {job}
                      </Typography>
                      <Typography
                        variant="small"
                        className="blue-gray font-normal opacity-70"
                      >
                        {org}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="w-max">
                      <Chip
                        variant="ghost"
                        size="sm"
                        value={online ? "online" : "offline"}
                        className={online ? "green" : "blue-gray"}
                      />
                    </div>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" className="blue-gray font-normal">
                      {date}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Tooltip content="Editar Usuario">
                      <IconButton variant="text" color="blue-gray" title="Editar Usuario" onClick={editar}>
                        <PencilIcon className="h-4 w-4" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip content="Eliminar Usuario">
                      <IconButton variant="text" color="red"  title="Eliminar Usuario" onClick={eliminar}>
                        <TrashIcon className="h-4 w-4" />
                      </IconButton>
                    </Tooltip>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" className="blue-gray font-normal">
          Pagina 1 of 10
        </Typography>
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
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl shadow-2xl">
              {/*content*/}
              <div className="border-0 rounded-2xl shadow-2xl relative flex flex-col w-full bg-white outline-none focus:outline-none ">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t bg-slate-300">
                  <h3 className="text-3xl font-semibold">
                    Crear nuevo usuario
                  </h3>
                  <button
                    className="border-0 text-gray-500 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
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
                        rol:"",
                        }}
                        onSubmit={crear}
                        validate={validar}
                    >
                    {( {values, handleSubmit, handleChange} ) => (
                          <div className='px-5 py-10 mt-10 text-center bg-white flex-col'>
                            <Form onSubmit={handleSubmit}>
                                <div className="relative p-6 flex-auto">
                                <p className="my-4 text-slate-500 text-lg leading-relaxed w-full flex flex-grow">
                                <div className="m-1">
                                    <Field 
                                        type="input" 
                                        name="nombre" 
                                        placeholder="Nombre de usuario" 
                                        className="p-3 rounded-lg border"
                                        value={values.nombre}
                                        onChange={handleChange}
                                    />
                                    <div className='text-red-600'><ErrorMessage name='nombre'/></div>
                                </div>
                                <div className="m-1">
                                    <Field 
                                        type="input" 
                                        name="apellidos" 
                                        placeholder="Apellidos de usuario" 
                                        className="p-3 rounded-lg border" 
                                        value={values.pellidos}
                                        onChange={handleChange}
                                    />
                                    <div className='text-red-600'><ErrorMessage name='apellidos'/></div>
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
                                    <div className='text-red-600'><ErrorMessage name='email'/></div>
                                </div>
                                </p>
                                <p className="my-4 text-slate-500 text-lg leading-relaxed w-full flex flex-grow">
                                    <div className="m-1">
                                    <Field 
                                      as="select" 
                                      name="rol" 
                                      className="rounded-lg p-3"
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
                                    <div className='text-red-600'><ErrorMessage name='rol'/></div>
                                    </div>
                                </p>
                                </div>
                                {/*footer*/}
                             <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                  <button
                                    className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                  >
                                    Close
                                  </button>
                                  <button
                                    className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="submit"
                                  >
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
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>   
  );
}