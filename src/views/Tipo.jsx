import { useEffect } from "react";
import { useDenunciasStore } from "../hooks/useDenunciasStore";

export default function Tipo() {

  const { clasificacion, onGetDataClasificacion } = useDenunciasStore()
  //console.log(clasificacion)
  useEffect(() => {
    if(clasificacion.length === 0) onGetDataClasificacion()
  },[])

  return (
    <>
    <div className="md:flex md:p-3 p-1 flex-wrap">
      <div className="w-full mb-3 text-sm font-black text-center md:text-3xl">Tipos de Denuncia</div>
      <div className="w-full mb-3 text-xs font-semibold text-center md:text-lg">Resumen de denuncias captadas por tipo</div>
      <div className="w-full p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-sm md:text-md lg:text-lg">
        <div className="h-auto mt-2 mb-2 md:justify-center">
          <a href="denunciasclasificacion/1" className="flex items-center justify-center w-[70%] m-auto  rounded-xl shadow-lg h-min p-3 transition ease-in-out delay-150 bg-gray-50 hover:-translate-y-1 hover:scale-110 duration-300">
            <div className="w-[30%]">
              <img src="../img/cohecho.png" alt=" Logo de Cohecho" className="rounded-full shadow-lg dark:shadow-black/30" />
            </div>
            <div className="text-center w-[100%]">
              <span className="ml-2 text-xs leading-none tracking-widest text-center md:text-xl">
              {
                    clasificacion.filter(item => item.idClasificacion == '1')
                    .map(item => (
                      item.totalclasifica))
                  }
                <br/>Cohecho</span>
            </div>
          </a>
        </div>
        <div className="h-auto mt-2 mb-2 md:justify-center">
        <a href="#" className="flex items-center justify-center w-[70%] m-auto  rounded-xl shadow-lg h-min p-3 transition ease-in-out delay-150 bg-gray-50 hover:-translate-y-1 hover:scale-110 duration-300">
            <div className="w-[30%]">
              <img src="../img/desacato.png" alt=" Logo de desacato" className="rounded-full shadow-lg dark:shadow-black/30" />
            </div>
            <div className="text-center w-[70%]">
          <span className="ml-2 text-xs leading-none tracking-widest text-center md:text-xl">
          {
                    clasificacion.filter(item => item.idClasificacion == '2')
                    .map(item => (
                      item.totalclasifica))
                  }
             <br/>Desacato</span>
          </div>
          </a>
        </div>
        <div className="h-auto mt-2 mb-2 md:justify-center">
        <a href="#" className="flex items-center justify-center w-[70%] m-auto  rounded-xl shadow-lg h-min p-3 transition ease-in-out delay-150 bg-gray-50 hover:-translate-y-1 hover:scale-110 duration-300">
            <div className="w-[30%]">
              <img src="../img/nepotismo.png" alt=" Logo de nepotismo" className="rounded-full shadow-lg dark:shadow-black/30" />
            </div>
            <div className="text-center w-[70%]">
          <span className="ml-2 text-xs leading-none tracking-widest text-center md:text-xl">
          {
                    clasificacion.filter(item => item.idClasificacion == '3')
                    .map(item => (
                      item.totalclasifica))
                  }
            <br/>Nepotismo</span>
          </div>
          </a>
        </div>
        <div className="h-auto mt-2 mb-2 md:justify-center">
        <a href="#" className="flex items-center justify-center w-[70%] m-auto  rounded-xl shadow-lg h-min p-3 transition ease-in-out delay-150 bg-gray-50 hover:-translate-y-1 hover:scale-110 duration-300">
            <div className="w-[30%]">
              <img src="../img/abuso_funciones.png" alt=" Logo de Abuso de Funciones" className="rounded-full shadow-lg dark:shadow-black/30" />
            </div>
            <div className="text-center w-[70%]">
          <span className="ml-2 text-xs leading-none tracking-widest text-center md:text-xl">
          {
                    clasificacion.filter(item => item.idClasificacion == '4')
                    .map(item => (
                      item.totalclasifica))
                  }
             <br/>Abuso de Funciones</span>
          </div>
          </a>
        </div>
        <div className="h-auto mt-2 mb-2 md:justify-center">
        <a href="#" className="flex items-center justify-center w-[70%] m-auto  rounded-xl shadow-lg h-min p-3 transition ease-in-out delay-150 bg-gray-50 hover:-translate-y-1 hover:scale-110 duration-300">
            <div className="w-[30%]">
              <img src="../img/desvio_recursos.png" alt=" Logo de Desvío de Recursos" className="rounded-full shadow-lg dark:shadow-black/30" />
            </div>
            <div className="text-center w-[70%]">
          <span className="ml-2 text-xs leading-none tracking-widest text-center md:text-xl">
          {
                    clasificacion.filter(item => item.idClasificacion == '5')
                    .map(item => (
                      item.totalclasifica))
                  }
            <br/>Desvío de Recursos Públicos</span>
          </div>
          </a>
        </div>
        <div className="h-auto mt-2 mb-2 md:justify-center">
        <a href="#" className="flex items-center justify-center w-[70%] m-auto  rounded-xl shadow-lg h-min p-3 transition ease-in-out delay-150 bg-gray-50 hover:-translate-y-1 hover:scale-110 duration-300">
            <div className="w-[30%]">
              <img src="../img/obstruccion_justicia.png" alt=" Logo de Obstrucción de la Justicia" className="rounded-full shadow-lg dark:shadow-black/30" />
            </div>
            <div className="text-center w-[70%]">
          <span className="ml-2 text-xs leading-none tracking-widest text-center md:text-xl">
          {
                    clasificacion.filter(item => item.idClasificacion == '6')
                    .map(item => (
                      item.totalclasifica))
                  }
            <br/>Obstrucción de la Justicia</span>
          </div>
          </a>
        </div>
        <div className="h-auto mt-2 mb-2 md:justify-center">
        <a href="#" className="flex items-center justify-center w-[70%] m-auto  rounded-xl shadow-lg h-min p-3 transition ease-in-out delay-150 bg-gray-50 hover:-translate-y-1 hover:scale-110 duration-300">
            <div className="w-[30%]">
              <img src="../img/conflicto_intereses.png" alt=" Logo de Conflicto de Intereses" className="rounded-full shadow-lg dark:shadow-black/30" />
            </div>
            <div className="text-center w-[70%]">
          <span className="ml-2 text-xs leading-none tracking-widest text-center md:text-xl">
          {
                    clasificacion.filter(item => item.idClasificacion == '7')
                    .map(item => (
                      item.totalclasifica))
                  }
            <br/>Conflicto de Interés</span>
          </div>
          </a>
        </div>
        <div className="h-auto mt-2 mb-2 md:justify-center">
        <a href="#" className="flex items-center justify-center w-[70%] m-auto  rounded-xl shadow-lg h-min p-3 transition ease-in-out delay-150 bg-gray-50 hover:-translate-y-1 hover:scale-110 duration-300">
            <div className="w-[30%]">
              <img src="../img/encubrimiento.png" alt=" Logo de Encubrimiento" className="rounded-full shadow-lg dark:shadow-black/30" />
            </div>
            <div className="text-center w-[70%]">
          <span className="ml-2 text-xs leading-none tracking-widest text-center md:text-xl">
          {
                    clasificacion.filter(item => item.idClasificacion == '8')
                    .map(item => (
                      item.totalclasifica))
                  }
             <br/>Encubrimiento</span>
          </div>
          </a>
        </div>
        <div className="h-auto mt-2 mb-2 md:justify-center">
        <a href="#" className="flex items-center justify-center w-[70%] m-auto  rounded-xl shadow-lg h-min p-3 transition ease-in-out delay-150 bg-gray-50 hover:-translate-y-1 hover:scale-110 duration-300">
            <div className="w-[30%]">
              <img src="../img/simulacion_acto.png" alt=" Logo de Cohecho" className="rounded-full shadow-lg dark:shadow-black/30" />
            </div>
            <div className="text-center w-[70%]">
          <span className="ml-2 text-xs leading-none tracking-widest text-center md:text-xl">
          {
                    clasificacion.filter(item => item.idClasificacion == '9')
                    .map(item => (
                      item.totalclasifica))
                  }
            <br/>Simulación de Acto Jurídico</span>
          </div>
          </a>
        </div>
        <div className="h-auto mt-2 mb-2 md:justify-center">
        <a href="#" className="flex items-center justify-center w-[70%] m-auto  rounded-xl shadow-lg h-min p-3 transition ease-in-out delay-150 bg-gray-50 hover:-translate-y-1 hover:scale-110 duration-300">
            <div className="w-[30%]">
              <img src="../img/contratacion_indebida.png" alt=" Logo de Cohecho" className="rounded-full shadow-lg dark:shadow-black/30" />
            </div>
            <div className="text-center w-[70%]">
          <span className="ml-2 text-xs leading-none tracking-widest text-center md:text-xl">
          {
                    clasificacion.filter(item => item.idClasificacion == '10')
                    .map(item => (
                      item.totalclasifica))
                  }
            <br/>Contratación Indebida</span>
          </div>
          </a>
        </div>
        <div className="h-auto mt-2 mb-2 md:justify-center">
        <a href="#" className="flex items-center justify-center w-[70%] m-auto  rounded-xl shadow-lg h-min p-3 transition ease-in-out delay-150 bg-gray-50 hover:-translate-y-1 hover:scale-110 duration-300">
            <div className="w-[30%]">
              <img src="../img/enriquecimiento_oculto.png" alt=" Logo de Cohecho" className="rounded-full shadow-lg dark:shadow-black/30" />
            </div>
            <div className="text-center w-[70%]">
          <span className="ml-2 text-xs leading-none tracking-widest text-center md:text-xl">
          {
                    clasificacion.filter(item => item.idClasificacion == '11')
                    .map(item => (
                      item.totalclasifica))
                  }
             <br/>Enriquecimiento Oculto u ocultación de conflicto de Interés</span>
          </div>
          </a>
        </div>
        <div className="h-auto mt-2 mb-2 md:justify-center">
        <a href="#" className="flex items-center justify-center w-[70%] m-auto  rounded-xl shadow-lg h-min p-3 transition ease-in-out delay-150 bg-gray-50 hover:-translate-y-1 hover:scale-110 duration-300">
            <div className="w-[30%]">
              <img src="../img/trafico_influencias.png" alt=" Logo de Cohecho" className="rounded-full shadow-lg dark:shadow-black/30" />
            </div>
            <div className="text-center w-[70%]">
          <span className="ml-2 text-xs leading-none tracking-widest text-center md:text-xl">
          {
                    clasificacion.filter(item => item.idClasificacion == '12')
                    .map(item => (
                      item.totalclasifica))
                  }
            <br/>Tráfico de Influencias</span>
          </div>
          </a>
        </div>
        <div className="h-auto mt-2 mb-2 md:justify-center">
        <a href="#" className="flex items-center justify-center w-[70%] m-auto  rounded-xl shadow-lg h-min p-3 transition ease-in-out delay-150 bg-gray-50 hover:-translate-y-1 hover:scale-110 duration-300">
            <div className="w-[30%]">
              <img src="../img/utilizacion_indebida_informaci.png" alt=" Logo de Cohecho" className="rounded-full shadow-lg dark:shadow-black/30" />
            </div>
            <div className="text-center w-[70%]">
          <span className="ml-2 text-xs leading-none tracking-widest text-center md:text-xl">
          {
                    clasificacion.filter(item => item.idClasificacion == '13')
                    .map(item => (
                      item.totalclasifica))
                  }
             <br/>Utilización Indebida de Información Privilegiada</span>
          </div>
          </a>
        </div>
        <div className="h-auto mt-2 mb-2 md:justify-center">
        <a href="#" className="flex items-center justify-center w-[70%] m-auto  rounded-xl shadow-lg h-min p-3 transition ease-in-out delay-150 bg-gray-50 hover:-translate-y-1 hover:scale-110 duration-300">
            <div className="w-[30%]">
              <img src="../img/violaciones.png" alt=" Logo de Cohecho" className="rounded-full shadow-lg dark:shadow-black/30" />
            </div>
            <div className="text-center w-[70%]">
          <span className="ml-2 text-xs leading-none tracking-widest text-center md:text-xl">
          {
                    clasificacion.filter(item => item.idClasificacion == '14')
                    .map(item => (
                      item.totalclasifica))
                  }
             <br/>Violaciones a la Ley Federal de Austeridad Republicana</span>
          </div>
          </a>
        </div>
      </div>
    </div>
    
    </>
  )
}
