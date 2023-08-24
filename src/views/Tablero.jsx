import { useEffect } from "react";
import LinesChart from "../components/LinesChart";
import LinesChartDenuncias from "../components/LinesChartDenuncias";
import { useDenunciasStore } from "../hooks/useDenunciasStore";

export default function tablero() {
  const { denuncias, onGetDenuncias } = useDenunciasStore()
  //console.log(denuncias);
  useEffect(() => {
    if(denuncias.length === 0) onGetDenuncias()
  },[])

  const { proceso, onGetDataProceso } = useDenunciasStore()
  //console.log(proceso);
    useEffect(() => {
      if(proceso.length === 0) onGetDataProceso()
    },[])

    const { improcedente, onGetDataImprocedente } = useDenunciasStore()
  //console.log(improcedente);
    useEffect(() => {
      if(improcedente.length === 0) onGetDataImprocedente()
    },[])

    const { chart, onGetDataChart } = useDenunciasStore()
    //console.log(chart);
      useEffect(() => {
        if(chart.length === 0) onGetDataChart()
      },[])

    const { concluida, onGetDataConcluida } = useDenunciasStore()
    //console.log(concluida);
      useEffect(() => {
          if(concluida.length === 0) onGetDataConcluida()
      },[])

    const { atendidasSFP, onGetDataAtendidasSFP } = useDenunciasStore()
    //console.log(atendidasSFP);
      useEffect(() => {
          if(atendidasSFP.length === 0) onGetDataAtendidasSFP()
      },[])

      const { etapas, onGetDataEtapa } = useDenunciasStore()
      //console.log(etapas);
        useEffect(() => {
            if(etapas.length === 0) onGetDataEtapa()
        },[])
    

  return (
    <>
      <div className="flex-wrap m-5 md:flex">
        <div className="h-min md:w-[25%]">
          
            <a href="/denunciasrecibidas" className="h-min">
              <div className="p-3 m-2 transition duration-300 ease-in-out delay-150 rounded-lg shadow-lg shadow-gray-500 h-min bg-gray-50 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200">
                <div className="flex justify-center w-full text-lg font-bold">
                  <h1>Total de Denuncias Recibidas</h1>
                </div>
                <hr/><br />
                <div className="columns-2">
                  <div className="flex justify-center w-full">
                    <svg className="w-10 h-10 p-2 text-blue-500 bg-blue-300 rounded-md shadow-sm " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18"><path d="M18 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3.546l3.2 3.659a1 1 0 0 0 1.506 0L13.454 14H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-8 10H5a1 1 0 0 1 0-2h5a1 1 0 1 1 0 2Zm5-4H5a1 1 0 0 1 0-2h10a1 1 0 1 1 0 2Z" /></svg>
                  </div>
                  <div className="flex justify-center w-full">
                    <p>{ denuncias.length }</p>
                  </div>
                </div>
              </div>
            </a>
        </div>
        <div className="h-min md:w-[25%]">
            <a href="/denunciasproceso" className="h-min">
              <div className="p-3 m-2 transition duration-300 ease-in-out delay-150 rounded-lg shadow-lg shadow-gray-500 h-min bg-gray-50 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200">
                <div className="flex justify-center w-full text-lg font-bold">
                  <h1>Denuncias en Proceso</h1>
                </div>
                <hr/><br />
                <div className="columns-2 ">
                  <div className="flex justify-center w-full">
                  <svg className="w-10 h-10 p-2 text-yellow-400 bg-yellow-100 rounded-md shadow-sm" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20"><path fill="currentColor" d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-5 1v2H7V2h4Zm5 16H2V3h3v1a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2V3h3v15Z"/><path fill="currentColor" d="M13 9H8a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2Zm0 4H8a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2Zm-8-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/></svg>
                  </div>
                  <div className="flex justify-center w-full">
                    <p>{ proceso.length }</p>
                  </div>
                </div>
              </div>
            </a>
        </div>
        <div className="h-min md:w-[25%]">
            <a href="/denunciasimprocedente" className="h-min">
              <div className="p-3 m-2 transition duration-300 ease-in-out delay-150 rounded-lg shadow-lg shadow-gray-500 h-min bg-gray-50 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200">
                <div className="flex justify-center w-full text-lg font-bold">
                  <h1>Denuncias Improcedentes</h1>
                </div>
                <hr/><br />
                <div className="columns-2 ">
                  <div className="flex justify-center w-full">
                  <svg className="w-10 h-10 p-2 text-red-800 bg-red-300 rounded-md shadow-sm" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20"><path fill="currentColor" d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-5 1v2H7V2h4Zm5 16H2V3h3v1a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2V3h3v15Z"/><path fill="currentColor" d="M13 9H8a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2Zm0 4H8a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2Zm-8-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/></svg>
                  </div>
                  <div className="flex justify-center w-full">
                    <p>{ improcedente.length }</p>
                  </div>
                </div>
              </div>
            </a>
        </div>
        <div className="h-min md:w-[25%]">
            <a href="/denunciasconcluidas" className="h-min">
              <div className="p-3 m-2 transition duration-300 ease-in-out delay-150 rounded-lg shadow-lg shadow-gray-500 h-min bg-gray-50 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200">
                <div className="flex justify-center w-full text-lg font-bold">
                  <h1>Denuncias Concluidas</h1>
                </div>
                <hr/><br />
                <div className="columns-2 ">
                  <div className="flex justify-center w-full">
                    <svg className="w-10 h-10 p-2 text-green-500 bg-green-200 rounded-md shadow-sm" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20"><path fill="currentColor" d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-5 1v2H7V2h4Zm5 16H2V3h3v1a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2V3h3v15Z"/><path fill="currentColor" d="M13 9H8a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2Zm0 4H8a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2Zm-8-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/></svg>
                  </div>
                  <div className="flex justify-center w-full">
                    <p>{ concluida.length }</p>
                  </div>
                </div>
              </div>  
            </a>    
        </div>
      </div>
      <div className="flex-row md:flex">
            <div className="flex-wrap m-5 md:w-[50%]">
              <div className="flex-row w-full md:flex">
                <div className="md:w-[50%]">
                  <a href="#" className="h-min">
                    <div className="p-3 m-2 transition duration-300 ease-in-out delay-150 rounded-lg shadow-lg shadow-gray-500 h-min bg-gray-50 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200">
                      <div className="flex justify-center w-full text-lg font-bold">
                        <h1>Denuncias en Atención por la SFP</h1>
                      </div>
                      <hr/><br />
                      <div className="columns-2 ">
                        <div className="flex justify-center w-full">
                          <p>{ atendidasSFP.length }</p>
                        </div>
                        <div className="flex justify-center w-full">
                          <svg className="w-10 h-10 p-2 text-green-500 bg-green-200 rounded-md shadow-sm" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20"><path fill="currentColor" d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-5 1v2H7V2h4Zm5 16H2V3h3v1a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2V3h3v15Z"/><path fill="currentColor" d="M13 9H8a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2Zm0 4H8a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2Zm-8-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/></svg>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="md:w-[50%] justify-center">
                  <a href="#" className="h-min">
                    <div className="p-3 m-2 transition duration-300 ease-in-out delay-150 rounded-lg shadow-lg shadow-gray-500 h-min bg-gray-50 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200">
                      <div className="flex justify-center w-full text-lg font-bold">
                        <h1>Denuncias en atención por los OIC</h1>
                      </div>
                      <hr/><br />
                      <div className="flex flex-row w-full ">
                        <div className="w-[20%] text-right">
                          <p>127</p>
                        </div>
                        <div className="w-[70%] text-left pl-2">
                          <LinesChart />
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="justify-center w-full">
                  <div>
                      <LinesChartDenuncias />
                  </div>
              </div>
            </div>
            <div className="flex-wrap m-5 md:w-[50%] shadow-md rounded-xl p-10">
              <label className="text-2xl font-bold text-justify text-blue-800">Etapas</label>
              <div className="p-3 m-2 transition duration-300 ease-in-out delay-150 rounded-lg shadow-lg shadow-gray-500 h-min bg-gray-50 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200">
                <div className="flex flex-row w-full p-2">
                  <div className="font-semibold text-left w-[50%]">
                    Investigación
                  </div>
                  <div className="text-right w-[50%]">
                  {
                    etapas.filter(item => item.idEtapa == '1')
                    .map(item => (
                      <div key={item.totaletapa}>{item.totaletapa}</div>))
                  }
                  </div>
                </div>
                { etapas.filter(item => item.idEtapa == '1')
                      .map(item => (
                        ((item.totaletapa*100)/denuncias.length)+'%')) }
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-3">
                  <div className="bg-[#ff0000] h-2.5 rounded-full" style={{ width: etapas.filter(item => item.idEtapa == '1')
                      .map(item => (
                        ((item.totaletapa*100)/denuncias.length)+'%')) }}></div>
                </div>
              </div>
              <div className="p-3 m-2 transition duration-300 ease-in-out delay-150 rounded-lg shadow-lg shadow-gray-500 h-min bg-gray-50 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200">
                <div className="flex flex-row w-full p-2">
                  <div className="font-semibold text-left w-[50%]">
                    Sustanciación
                  </div>
                  <div className="text-right w-[50%]">
                  {
                    etapas.filter(item => item.idEtapa == '2')
                    .map(item => (
                      <div key={item.totaletapa}>{item.totaletapa}</div>))
                  }
                  </div>
                </div>
                { etapas.filter(item => item.idEtapa == '2')
                      .map(item => (
                        ((item.totaletapa*100)/denuncias.length)+'%')) }
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-3">
                  <div className="bg-[#ff00b6] h-2.5 rounded-full" style={{ width: etapas.filter(item => item.idEtapa == '2')
                      .map(item => (
                        ((item.totaletapa*100)/denuncias.length)+'%')) }}></div>
                </div>
              </div>
              <div className="p-3 m-2 transition duration-300 ease-in-out delay-150 rounded-lg shadow-lg shadow-gray-500 h-min bg-gray-50 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200">
                <div className="flex flex-row w-full p-2">
                  <div className="font-semibold text-left w-[50%]">
                    Resolución
                  </div>
                  <div className="text-right w-[50%]">
                  {
                    etapas.filter(item => item.idEtapa == '3')
                    .map(item => (
                      <div key={item.totaletapa}>{item.totaletapa}</div>))
                  }
                  </div>
                </div>
                { etapas.filter(item => item.idEtapa == '3')
                      .map(item => (
                        ((item.totaletapa*100)/denuncias.length)+'%')) }
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-3">
                  <div className="bg-[#d400ff] h-2.5 rounded-full" style={{ width: etapas.filter(item => item.idEtapa == '3')
                      .map(item => (
                        ((item.totaletapa*100)/denuncias.length)+'%')) }}></div>
                </div>
              </div>
              <div className="p-3 m-2 transition duration-300 ease-in-out delay-150 rounded-lg shadow-lg shadow-gray-500 h-min bg-gray-50 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200">
                <div className="flex flex-row w-full p-2">
                  <div className="font-semibold text-left w-[50%]">
                  Con Resolución o Sentencia
                  </div>
                  <div className="text-right w-[50%]">
                  {
                    etapas.filter(item => item.idEtapa == '4')
                    .map(item => (
                      <div key={item.totaletapa}>{item.totaletapa}</div>))
                  }
                  </div>
                </div>
                { etapas.filter(item => item.idEtapa == '4')
                      .map(item => (
                        ((item.totaletapa*100)/denuncias.length)+'%')) }
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-3">
                  <div className="bg-[#8700ff] h-2.5 rounded-full" style={{ width: etapas.filter(item => item.idEtapa == '4')
                      .map(item => (
                        ((item.totaletapa*100)/denuncias.length)+'%')) }}></div>
                </div>
              </div>
              <div className="p-3 m-2 transition duration-300 ease-in-out delay-150 rounded-lg shadow-lg shadow-gray-500 h-min bg-gray-50 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200">
                <div className="flex flex-row w-full p-2">
                  <div className="font-semibold text-left w-[50%]">
                  Impugnación
                  </div>
                  <div className="text-right w-[50%]">
                  {
                    etapas.filter(item => item.idEtapa == '5')
                    .map(item => (
                      <div key={item.totaletapa}>{item.totaletapa}</div>))
                  }
                  </div>
                </div>
                { etapas.filter(item => item.idEtapa == '5')
                      .map(item => (
                        ((item.totaletapa*100)/denuncias.length)+'%')) }
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-3">
                  <div className="bg-[#3300ff] h-2.5 rounded-full" style={{ width: etapas.filter(item => item.idEtapa == '5')
                      .map(item => (
                        ((item.totaletapa*100)/denuncias.length)+'%')) }}></div>
                </div>
              </div>
              <div className="p-3 m-2 transition duration-300 ease-in-out delay-150 rounded-lg shadow-lg shadow-gray-500 h-min bg-gray-50 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200">
                <div className="flex flex-row w-full p-2">
                  <div className="font-semibold text-left w-[50%]">
                  Amparo
                  </div>
                  <div className="text-right w-[50%]">
                  {
                    etapas.filter(item => item.idEtapa == '6')
                    .map(item => (
                      <div key={item.totaletapa}>{item.totaletapa}</div>))
                  }
                  </div>
                </div>
                { etapas.filter(item => item.idEtapa == '6')
                      .map(item => (
                        ((item.totaletapa*100)/denuncias.length)+'%')) }
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-3">
                  <div className="bg-[#00a1ff] h-2.5 rounded-full" style={{ width: etapas.filter(item => item.idEtapa == '6')
                      .map(item => (
                        ((item.totaletapa*100)/denuncias.length)+'%')) }}></div>
                </div>
              </div>
              <div className="p-3 m-2 transition duration-300 ease-in-out delay-150 rounded-lg shadow-lg shadow-gray-500 h-min bg-gray-50 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200">
                <div className="flex flex-row w-full p-2">
                  <div className="font-semibold text-left w-[50%]">
                  Firme
                  </div>
                  <div className="text-right w-[50%]">
                  {
                    etapas.filter(item => item.idEtapa == '7')
                    .map(item => (
                      <div key={item.totaletapa}>{item.totaletapa}</div>))
                  }
                  </div>
                </div>
                { etapas.filter(item => item.idEtapa == '7')
                      .map(item => (
                        ((item.totaletapa*100)/denuncias.length)+'%')) }
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-3">
                  <div className="bg-[#00ffd8] h-2.5 rounded-full" style={{ width: etapas.filter(item => item.idEtapa == '7')
                      .map(item => (
                        ((item.totaletapa*100)/denuncias.length)+'%')) }}></div>
                </div>
              </div>
              <div className="p-3 m-2 transition duration-300 ease-in-out delay-150 rounded-lg shadow-lg shadow-gray-500 h-min bg-gray-50 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200">
                <div className="flex flex-row w-full p-2">
                  <div className="font-semibold text-left w-[50%]">
                  Conclusión y Archivo
                  </div>
                  <div className="text-right w-[50%]">
                  {
                    etapas.filter(item => item.idEtapa == '8')
                    .map(item => (
                      <div key={item.totaletapa}>{item.totaletapa}</div>))
                  }
                  </div>
                </div>
                { etapas.filter(item => item.idEtapa == '8')
                      .map(item => (
                        ((item.totaletapa*100)/denuncias.length)+'%')) }
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-3">
                  <div className="bg-[#10ff00] h-2.5 rounded-full" style={{ width: etapas.filter(item => item.idEtapa == '8')
                      .map(item => (
                        ((item.totaletapa*100)/denuncias.length)+'%')) }}></div>
                </div>
              </div>
              <div className="p-3 m-2 transition duration-300 ease-in-out delay-150 rounded-lg shadow-lg shadow-gray-500 h-min bg-gray-50 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200">
                <div className="flex flex-row w-full p-2">
                  <div className="font-semibold text-left w-[50%]">
                  Improcedentes
                  </div>
                  <div className="text-right w-[50%]">
                  {
                    etapas.filter(item => item.idEtapa == '9')
                    .map(item => (
                      <div key={item.totaletapa}>{item.totaletapa}</div>))
                  }
                  </div>
                </div>
                { etapas.filter(item => item.idEtapa == '9')
                      .map(item => (
                        ((item.totaletapa*100)/denuncias.length)+'%')) }
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-3">
                  <div className="bg-[#e9ff00] h-2.5 rounded-full" style={{ width: etapas.filter(item => item.idEtapa == '9')
                      .map(item => (
                        ((item.totaletapa*100)/denuncias.length)+'%')) }}></div>
                </div>
              </div>
              <div className="p-3 m-2 transition duration-300 ease-in-out delay-150 rounded-lg shadow-lg shadow-gray-500 h-min bg-gray-50 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200">
                <div className="flex flex-row w-full p-2">
                  <div className="font-semibold text-left w-[50%]">
                  Sobreseimiento
                  </div>
                  <div className="text-right w-[50%]">
                  {
                    etapas.filter(item => item.idEtapa == '10')
                    .map(item => (
                      <div key={item.totaletapa}>{item.totaletapa}</div>))
                  }
                  </div>
                </div>
                { etapas.filter(item => item.idEtapa == '10')
                      .map(item => (
                        ((item.totaletapa*100)/denuncias.length)+'%')) }
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-3">
                  <div className="bg-[#ff8c00] h-2.5 rounded-full" style={{ width: etapas.filter(item => item.idEtapa == '10')
                      .map(item => (
                        ((item.totaletapa*100)/denuncias.length)+'%')) }}></div>
                </div>
              </div>
              <div className="p-3 m-2 transition duration-300 ease-in-out delay-150 rounded-lg shadow-lg shadow-gray-500 h-min bg-gray-50 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200">
                <div className="flex flex-row w-full p-2">
                  <div className="font-semibold text-left w-[50%]">
                  En Proceso
                  </div>
                  <div className="text-right w-[50%]">
                  {
                    etapas.filter(item => item.idEtapa == '11')
                    .map(item => (
                      <div key={item.totaletapa}>{item.totaletapa}</div>))
                  }
                  </div>
                </div>
                { etapas.filter(item => item.idEtapa == '11')
                      .map(item => (
                        ((item.totaletapa*100)/denuncias.length)+'%')) }
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-3">
                  <div className="bg-[#82e6ff] h-2.5 rounded-full" style={{ width: etapas.filter(item => item.idEtapa == '11')
                      .map(item => (
                        ((item.totaletapa*100)/denuncias.length)+'%')) }}></div>
                </div>
              </div>
            </div>
          </div>
  </>
  )
}
