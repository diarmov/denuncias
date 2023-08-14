import React from 'react'
import UsuariosTable from '../../utils/UsuariosTable'

export default function Listado() {
  return (
    <>
      <div className="md:flex md:p-5 p-3 flex-wrap">
          <div className="w-full font-black text-center md:text-3xl text-sm mb-3">Listado de Usuarios</div>
          <div className="w-full font-semibold text-center md:text-lg text-xs mb-3">Aquí podrás realizar búsquedas específicas</div>
          <div className="w-full text-center md:text-lg text-xs">
              {/* <UsuariosTable /> */}
          </div>
      </div>
    </>
  )
}
