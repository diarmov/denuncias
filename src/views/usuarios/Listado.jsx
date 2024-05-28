import { useEffect } from 'react';
import { Table, Button, Tooltip } from 'flowbite-react';
import { HiPlusCircle, HiPencil, HiOutlineCheck, HiOutlineBan } from 'react-icons/hi';

import { PopUp } from '../../components/ui';
import { useUsersStore } from '../../hooks/useUsersStore';
import { useUiStore } from '../../hooks/useUiStore';
import { FormUsers } from '../../components/Users/FormUsers';

export default function Listado({ onSetSelectedLink, link }) {
  const { users, onGetUser, onSetUser, onDestroy } = useUsersStore()
  const { onModal } = useUiStore()

  useEffect(() => {
    onSetSelectedLink(link)
    if(users.length === 0) onGetUser()
  },[])

  const onEdit = ( user ) => {
    onSetUser(user)
    onModal('default')
  }

  return (
    <div className='container px-4 relative overflow-x-auto mb-6'>
      <div className="md:flex md:p-5 p-3 flex-wrap">
          <p className="w-full  text-center md:text-4xl text-sm mb-3">Listado de Usuarios</p>
      </div>

      <PopUp title='Agregar usuario'>
        <FormUsers />
      </PopUp>
          
      <div className='flex justify-between flex-row-reverse mb-5'>
        {/* <Search />  */}
        <Button onClick={() => onModal('default') }> 
        <span className='text-lg mr-1'><HiPlusCircle /></span>Usuario
        </Button>
      </div>

      <Table hoverable className='mb-5'>
        <Table.Head>
        <Table.HeadCell>
            Nombre
          </Table.HeadCell>
          <Table.HeadCell>
            Apellidos
          </Table.HeadCell>
          <Table.HeadCell>          
            Email          
          </Table.HeadCell>
          <Table.HeadCell>
            Estatus          
          </Table.HeadCell>
          <Table.HeadCell>
            Perfil          
          </Table.HeadCell>
          <Table.HeadCell>
            Acciones
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {
              users.map(user => (
                  <Table.Row className="bg-white" key={ user.id }>
                    <Table.Cell className="whitespace-nowrap text-gray-900 ">                      
                         {  user.name }
                    </Table.Cell>
                    <Table.Cell className='whitespace-nowrap'>
                        {  user.apellidos }
                    </Table.Cell>                   
                    
                    <Table.Cell className="whitespace-nowrap">
                          {  user.email }
                    </Table.Cell>

                    <Table.Cell>
                         {  
                           user.estatus === "online"
                           ? (  
                              <span className='bg-green-300 text-green-800 font-semibold px-2 py-0.5 rounded-lg'>
                                { user.estatus }
                              </span>
                             )
                           : (  
                            <span className='bg-red-300 text-red-800 font-semibold px-2 py-0.5 rounded-lg'>
                              { user.estatus }
                            </span>
                           )
                         }
                    </Table.Cell>   

                     <Table.Cell className="whitespace-nowrap">
                         {  user.role }
                    </Table.Cell>                   
                    
                    <Table.Cell>
                       <div className="flex">
                       <a
                          className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                          onClick={() => onEdit(user) }
                        >
                          <Tooltip content="Editar">
                            <p className='cursor-pointer text-xl text-gray-500'><HiPencil /></p>
                          </Tooltip>
                        </a> 

                        <a
                          className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                          onClick={() => onDestroy(user) }
                        >
                          {  
                            user.estatus === "online" 
                            ? (
                                <Tooltip content="Inhabilitar">
                                  <p className='cursor-pointer text-xl text-green-700'><HiOutlineCheck /></p>
                                </Tooltip>
                            )
                            : (
                                <Tooltip content="habilitar">
                                  <p className='cursor-pointer text-xl text-red-700'><HiOutlineBan /></p>
                                </Tooltip>
                            )
                           }
                        </a> 
                       </div>
                    </Table.Cell>
                  </Table.Row>
              ))

          }
        </Table.Body>
      </Table>      
    </div>
  )
}
