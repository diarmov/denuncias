import { useEffect, useState } from "react";
import { useDenunciasStore } from "../hooks/useDenunciasStore";
import { Tooltip } from "flowbite-react";
import { PopUp } from "../components/ui";
import { useUiStore } from "../hooks/useUiStore";
import { TableTipo } from "../components/tipos";

const images = ['cohecho','desacato','nepotismo','abuso_funciones','desvio_recursos','obstruccion_justicia','obstruccion_justicia','encubrimiento',
                'simulacion_acto','contratacion_indebida','enriquecimiento_oculto','trafico_influencias','utilizacion_indebida_informaci','violaciones','omision','peculado'
               ]

export default function Tipo() {
  const { clasificacion, onGetDataClasificacion, onGetDataClasificacionById } = useDenunciasStore()
  const { onModal } = useUiStore()
  const [tipo, setTipo] = useState({tipo:'', id: 0})

  useEffect(() => {
   if(clasificacion.length === 0) onGetDataClasificacion()
  },[])

  const sizeText = ( text ) => { 
    if( text?.length > 50  )
        return ( 
                <Tooltip content={ text }>
                  <span>
                    { text.substring(0, 50)  + '...'} 
                  </span>
                 </Tooltip>
                )
    else return (<span>{text}</span>)
  }

  const onDetails = async( title, id ) => {
    await onGetDataClasificacionById(id)
    setTipo({ title, id })
    onModal( 'default' )
  }



  return (
    <>
    <div className="md:flex md:p-3 p-1 flex-wrap">
      <div className="w-full mb-3 text-sm font-black text-center md:text-3xl">Tipos de Denuncia</div>
      <div className="w-full mb-3 text-xs font-semibold text-center md:text-lg">Resumen de denuncias captadas por tipo</div>
      <div className="w-full p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-sm md:text-md lg:text-lg">

        <PopUp 
         title = { tipo.title }
        >
          <TableTipo id = { tipo.id }/>
        </PopUp>
        
        {
          clasificacion.map(item => (
            <div className="h-auto mt-2 mb-2 md:justify-center" key={item.id}>
              <a  onClick={() => onDetails( item.clasificacion, item.id )} className="flex items-center justify-center w-[70%] m-auto  rounded-xl shadow-lg h-min p-3 transition ease-in-out delay-150 bg-gray-50 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
                <div className="w-[30%]">
                  <img src={`../img/${ images[ item.id -1 ]}.png`} alt=" Logo de Cohecho" className="rounded-full shadow-lg dark:shadow-black/30" />
                </div>
                <div className="text-center w-[100%] grid grid-cols-1">
                  <span className="ml-2 text-xs leading-none tracking-widest text-center md:text-xl">
                    { item.total }
                  </span>
                  { sizeText( item.clasificacion ) }
                </div>
              </a>
            </div>
          ))
          }
      </div>
    </div>
    
    </>
  )
}
