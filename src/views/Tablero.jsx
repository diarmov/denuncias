import React, { useState } from "react";
import { useEffect } from "react";
import LinesChartDenuncias from "../components/LinesChartDenuncias";
import { useDenunciasStore } from "../hooks/useDenunciasStore";



export default function tablero() {

  const { denunciastotal, onGetDenunciasTotal } = useDenunciasStore()
  //console.log(denuncias);
  useEffect(() => {
    if (denunciastotal.length === 0) onGetDenunciasTotal()
  }, [])

  //console.log(denunciastotal)


  const denunciasUIF = denunciastotal.filter(item => item.numExpUif != null)
  const numRowsIniUIF = denunciasUIF.length


  const denunciasiniOIC = denunciastotal.filter(item => item.numExpOic != null)
  const numRowsIniOIC = denunciasiniOIC.length


  //************************************************************************* */

  const denunciasINC = denunciastotal.filter(item => item.idOrigen == '16')
  const numRowsINC = denunciasINC.length

  const denunciasPAS = denunciastotal.filter(item => item.idOrigen == '17')
  const numRowsPAS = denunciasPAS.length

  //************************************************************************* */

  const etapaInvestigacion = denunciastotal.filter(item => item.idEtapa == '1')
  const numRowsInvestigacion = etapaInvestigacion.length

  const denunciasInvesUIF = etapaInvestigacion.filter(item => item.numExpUif != null)
  const numRowsInvesUIF = denunciasInvesUIF.length

  const denunciasInvesOIC = etapaInvestigacion.filter(item => item.numExpOic != null)
  const numRowsInvesOIC = denunciasInvesOIC.length

  //************************************************************************* */

  const etapaSubstanciacion = denunciastotal.filter(item => item.idEtapa == '2')
  const numRowsSubstanciacion = etapaSubstanciacion.length

  const denunciasSubsUIF = etapaSubstanciacion.filter(item => item.numExpUif != null)
  const numRowsSubsUIF = denunciasSubsUIF.length

  const denunciasSubsOIC = etapaSubstanciacion.filter(item => item.numExpOic != null)
  const numRowsSubsOIC = denunciasSubsOIC.length

  //************************************************************************* */

  const etapaResolucion = denunciastotal.filter(item => item.idEtapa == '3')
  const numRowsResolucion = etapaResolucion.length

  const denunciasResolINC = etapaResolucion.filter(item => item.idOrigen == '16')
  const numRowsResolINC = denunciasResolINC.length

  const denunciasResolPAS = etapaResolucion.filter(item => item.idOrigen == '17')
  const numRowsResolPAS = denunciasResolPAS.length

  //************************************************************************* */

  const etapaResoSen = denunciastotal.filter(item => item.idEtapa == '4')
  const numRowsResoSen = etapaResoSen.length

  const denunciasReSenUIF = etapaResoSen.filter(item => item.numExpUif != null)
  const numRowsReSenUIF = denunciasReSenUIF.length

  const denunciasReSenOIC = etapaResoSen.filter(item => item.numExpOic != null)
  const numRowsReSenOIC = denunciasReSenOIC.length

  //************************************************************************* */

  const etapaImpugnacion = denunciastotal.filter(item => item.idEtapa == '5')
  const numRowsImpugnacion = etapaImpugnacion.length

  const denunciasImpugUIF = etapaImpugnacion.filter(item => item.numExpUif != null)
  const numRowsImpugUIF = denunciasImpugUIF.length

  const denunciasImpugOIC = etapaImpugnacion.filter(item => item.numExpOic != null)
  const numRowsImpugOIC = denunciasImpugOIC.length

  //************************************************************************* */

  const etapaAmparo = denunciastotal.filter(item => item.idEtapa == '6')
  const numRowsAmparo = etapaAmparo.length

  const denunciasAmpUIF = etapaAmparo.filter(item => item.numExpUif != null)
  const numRowsAmpUIF = denunciasAmpUIF.length

  const denunciasAmpOIC = etapaAmparo.filter(item => item.numExpOic != null)
  const numRowsAmpOIC = denunciasAmpOIC.length

  //************************************************************************* */

  const etapaFirme = denunciastotal.filter(item => item.idEtapa == '7')
  const numRowsFirme = etapaFirme.length

  const denunciasFirUIF = etapaFirme.filter(item => item.numExpUif != null)
  const numRowsFirUIF = denunciasFirUIF.length

  const denunciasFirOIC = etapaFirme.filter(item => item.numExpOic != null)
  const numRowsFirOIC = denunciasFirOIC.length

  //************************************************************************* */

  const etapaConcluidas = denunciastotal.filter(item => item.idEtapa == '8')
  const numRowsConcluidas = etapaConcluidas.length

  const denunciasConcUIF = etapaConcluidas.filter(item => item.numExpUif != null)
  const numRowsConcUIF = denunciasConcUIF.length

  const denunciasConcOIC = etapaConcluidas.filter(item => item.numExpOic != null)
  const numRowsConcOIC = denunciasConcOIC.length

  //************************************************************************* */

  const etapaImprocedente = denunciastotal.filter(item => item.idEtapa == '9')
  const numRowsImprocedente = etapaImprocedente.length

  const denunciasImproINC = etapaImprocedente.filter(item => item.idOrigen == '16')
  const numRowsImproINC = denunciasImproINC.length

  const denunciasImproPAS = etapaImprocedente.filter(item => item.idOrigen == '17')
  const numRowsImproPAS = denunciasImproPAS.length

  //************************************************************************* */

  const etapaSobreseimiento = denunciastotal.filter(item => item.idEtapa == '10')
  const numRowsSobreseimiento = etapaSobreseimiento.length

  const denunciasSobreINC = etapaSobreseimiento.filter(item => item.idOrigen == '16')
  const numRowsSobreINC = denunciasSobreINC.length

  const denunciasSobrePAS = etapaSobreseimiento.filter(item => item.idOrigen == '17')
  const numRowsSobrePAS = denunciasSobrePAS.length

  //************************************************************************* */

  const etapaProceso = denunciastotal.filter(item => item.idEtapa == '11')
  const numRowsProceso = etapaProceso.length

  const denunciasProceUIF = etapaProceso.filter(item => item.numExpUif != null)
  const numRowsProceUIF = denunciasProceUIF.length

  const denunciasProceOIC = etapaProceso.filter(item => item.numExpOic != null)
  const numRowsProceOIC = denunciasProceOIC.length

  //************************************************************************* */

  const [showModal, setShowModal] = React.useState(false);
  const [showModaldos, setShowModaldos] = React.useState(false);
  const [showModal3, setShowModal3] = React.useState(false);
  const [showModal4, setShowModal4] = React.useState(false);
  const [showModal5, setShowModal5] = React.useState(false);
  const [showModal6, setShowModal6] = React.useState(false);
  const [showModal7, setShowModal7] = React.useState(false);
  const [showModal8, setShowModal8] = React.useState(false);
  const [showModal9, setShowModal9] = React.useState(false);
  const [showModal10, setShowModal10] = React.useState(false);
  const [showModal11, setShowModal11] = React.useState(false);

  return (

    <><div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-5 mb-5 p-10">
      <div>
        <div className="p-3 m-2 transition duration-300 ease-in-out delay-150 rounded-lg shadow-lg shadow-gray-500 h-min bg-gray-50 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200">
          <div className="flex justify-center w-full text-lg font-bold">
            <h1>Total de Denuncias Recibidas</h1>
          </div>
          <hr /><br />
          <div className="columns-2">
            <div className="flex justify-end w-full items-center">
              <svg className="w-10 h-10 p-2 text-blue-500 bg-blue-300 rounded-md shadow-sm " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18"><path d="M18 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3.546l3.2 3.659a1 1 0 0 0 1.506 0L13.454 14H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-8 10H5a1 1 0 0 1 0-2h5a1 1 0 1 1 0 2Zm5-4H5a1 1 0 0 1 0-2h10a1 1 0 1 1 0 2Z" /></svg>
            </div>
            <div className="flex justify-center w-full items-center">
              <p>{denunciastotal.length}</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="p-3 m-2 transition duration-300 ease-in-out delay-150 rounded-lg shadow-lg shadow-gray-500 h-min bg-gray-50 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200">
          <div className="flex justify-center w-full text-lg font-bold">
            <h1>Denuncias en Iniciadas por UIF</h1>
          </div>
          <hr /><br />
          <div className="columns-2 ">
            <div className="flex justify-center w-full">
              <svg className="w-10 h-10 p-2 text-yellow-400 bg-yellow-100 rounded-md shadow-sm" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20"><path fill="currentColor" d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-5 1v2H7V2h4Zm5 16H2V3h3v1a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2V3h3v15Z" /><path fill="currentColor" d="M13 9H8a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2Zm0 4H8a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2Zm-8-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" /></svg>
            </div>
            <div className="flex justify-center w-full">
              <p>{numRowsIniUIF}</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="p-3 m-2 transition duration-300 ease-in-out delay-150 rounded-lg shadow-lg shadow-gray-500 h-min bg-gray-50 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200">
          <div className="flex justify-center w-full text-lg font-bold">
            <h1>Denuncias Iniciadas OIC</h1>
          </div>
          <hr /><br />
          <div className="columns-2 ">
            <div className="flex justify-center w-full">
              <svg className="w-10 h-10 p-2 text-red-800 bg-red-300 rounded-md shadow-sm" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20"><path fill="currentColor" d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-5 1v2H7V2h4Zm5 16H2V3h3v1a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2V3h3v15Z" /><path fill="currentColor" d="M13 9H8a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2Zm0 4H8a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2Zm-8-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" /></svg>
            </div>
            <div className="flex justify-center w-full">
              <p>{numRowsIniOIC}</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="p-3 m-2 transition duration-300 ease-in-out delay-150 rounded-lg shadow-lg shadow-gray-500 h-min bg-gray-50 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200">
          <div className="flex justify-center w-full text-lg font-bold">
            <h1>Inconformidades</h1>
          </div>
          <hr /><br />
          <div className="columns-2 ">
            <div className="flex justify-center w-full">
              <svg className="w-10 h-10 p-2 text-green-500 bg-green-200 rounded-md shadow-sm" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20"><path fill="currentColor" d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-5 1v2H7V2h4Zm5 16H2V3h3v1a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2V3h3v15Z" /><path fill="currentColor" d="M13 9H8a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2Zm0 4H8a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2Zm-8-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" /></svg>
            </div>
            <div className="flex justify-center w-full">
              <p>{numRowsINC}</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="p-3 m-2 transition duration-300 ease-in-out delay-150 rounded-lg shadow-lg shadow-gray-500 h-min bg-gray-50 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200">
          <div className="flex justify-center w-full text-lg font-bold">
            <h1>Procesos Administrativos Sancionatorios</h1>
          </div>
          <hr /><br />
          <div className="columns-2 ">
            <div className="flex justify-center w-full">
              <svg className="w-10 h-10 p-2 text-green-500 bg-green-200 rounded-md shadow-sm" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20"><path fill="currentColor" d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-5 1v2H7V2h4Zm5 16H2V3h3v1a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2V3h3v15Z" /><path fill="currentColor" d="M13 9H8a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2Zm0 4H8a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2Zm-8-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" /></svg>
            </div>
            <div className="flex justify-center w-full">
              <p>{numRowsPAS}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div className="flex w-full grid-cols-1 items-center justify-center">
        <div className="justify-center w-full md:w-[80%] lg:w-[50%]">
          <div>
            <LinesChartDenuncias />
          </div>
        </div>
      </div>
      <div className="text-lg md:text-2xl lg:text-3xl font-bold bg-[#BF5854] mt-10 justify-center flex text-white p-3 w-full">Etapa Procesal</div>
      <div className="grid w-full grid-cols-1 md:grid-cols-3 lg:grid-cols-6 p-10">
        <div>
          <div className="p-3 m-2 transition duration-300 ease-in-out delay-150 rounded-lg shadow-lg shadow-gray-500 h-min bg-gray-50 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200" onClick={() => setShowModal(true)}>
            <div className="flex flex-row w-full p-2">
              <div className="font-semibold text-center">
                Investigación <br />
                <label className="text-[#7E272C]">{numRowsInvestigacion}</label>
              </div>
            </div>
            {Math.round((numRowsInvestigacion * 100) / denunciastotal.length) + '%'}
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-3">
              <div className="bg-[#FFBF00] h-2.5 rounded-full" style={{ width: ((numRowsInvestigacion * 100) / denunciastotal.length) + '%' }}></div>
            </div>
          </div>
          {showModal ? (
            <>
              <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              >
                <div className="relative w-auto my-6 mx-auto max-w-[50%]">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-2 border-b border-solid border-slate-200 rounded-t bg-slate-600">
                      <h3 className="text-xl font-semibold text-white">
                        Denuncias en Investigación
                      </h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                      >
                        <span className="text-black h-6 w-6 text-2xl" title="Cerrar">
                          X
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <div className="grid grid-cols-2 my-4 text-black text-md leading-relaxed  gap-3">
                        <div className="rounded-lg shadow-xl text-sm">
                          <div className="text-center font-bold p-2">Atendidas por UIF</div>
                          <div className="text-center font-bold">{numRowsInvesUIF}</div>
                        </div>
                        <div className="rounded-lg shadow-xl text-sm">
                          <div className="text-center font-bold">Atendidas por OIC</div>
                          <div className="text-center font-bold">{numRowsInvesOIC}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </div>
        <div>
          <div className="p-3 m-2 transition duration-300 ease-in-out delay-150 rounded-lg shadow-lg shadow-gray-500 h-min bg-gray-50 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200" onClick={() => setShowModaldos(true)}>
            <div className="flex flex-row w-full p-2">
              <div className="font-semibold text-center">
                Substanciación <br />
                <label className="text-[#7E272C]">{numRowsSubstanciacion}</label>
              </div>
            </div>
            {Math.round((numRowsSubstanciacion * 100) / denunciastotal.length) + '%'}
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-3">
              <div className="bg-[#BAFF49] h-2.5 rounded-full" style={{ width: ((numRowsSubstanciacion * 100) / denunciastotal.length) + '%' }}></div>
            </div>
          </div>
          {showModaldos ? (
            <>
              <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              >
                <div className="relative w-auto my-6 mx-auto max-w-[50%]">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-2 border-b border-solid border-slate-200 rounded-t bg-slate-600">
                      <h3 className="text-xl font-semibold text-white">
                        Denuncias en Substanciación
                      </h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModaldos(false)}
                      >
                        <span className="text-black h-6 w-6 text-2xl" title="Cerrar">
                          X
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <div className="grid grid-cols-2 my-4 text-black text-md leading-relaxed  gap-3">
                        <div className="rounded-lg shadow-xl text-sm">
                          <div className="text-center font-bold p-2">Atendidas por UIF</div>
                          <div className="text-center font-bold">{numRowsSubsUIF}</div>
                        </div>
                        <div className="rounded-lg shadow-xl text-sm">
                          <div className="text-center font-bold">Atendidas por OIC</div>
                          <div className="text-center font-bold">{numRowsSubsOIC}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </div>
        <div>
          <div className="p-3 m-2 transition duration-300 ease-in-out delay-150 rounded-lg shadow-lg shadow-gray-500 h-min bg-gray-50 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200" onClick={() => setShowModal3(true)}>
            <div className="flex flex-row w-full p-2">
              <div className="font-semibold text-center">
                Resolución <br />
                <label className="text-[#7E272C]">{numRowsResolucion}</label>
              </div>
            </div>
            {Math.round((numRowsResolucion * 100) / denunciastotal.length) + '%'}
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-3">
              <div className="bg-[#0FFF3C] h-2.5 rounded-full" style={{ width: ((numRowsResolucion * 100) / denunciastotal.length) + '%' }}></div>
            </div>
          </div>
        </div>
        {showModal3 ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className="relative w-auto my-6 mx-auto max-w-[50%]">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-2 border-b border-solid border-slate-200 rounded-t bg-slate-600">
                    <h3 className="text-xl font-semibold text-white">
                      Denuncias en Resolución
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal3(false)}
                    >
                      <span className="text-black h-6 w-6 text-2xl" title="Cerrar">
                        X
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <div className="grid grid-cols-2 my-4 text-black text-md leading-relaxed  gap-3">
                      <div className="rounded-lg shadow-xl text-sm">
                        <div className="text-center font-bold p-2">Inconformidades</div>
                        <div className="text-center font-bold">{numRowsResolINC}</div>
                      </div>
                      <div className="rounded-lg shadow-xl text-sm">
                        <div className="text-center font-bold">Procesos administrativos<br /> sancionatorios</div>
                        <div className="text-center font-bold">{numRowsResolPAS}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
        <div>
          <div className="p-3 m-2 transition duration-300 ease-in-out delay-150 rounded-lg shadow-lg shadow-gray-500 h-min bg-gray-50 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200" onClick={() => setShowModal4(true)}>
            <div className="flex flex-row w-full p-2">
              <div className="font-semibold text-center">
                Con Resolución o Sentencia <br />
                <label className="text-[#7E272C]">{numRowsResoSen}</label>
              </div>
            </div>
            {Math.round((numRowsResoSen * 100) / denunciastotal.length) + '%'}
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-3">
              <div className="bg-[#FF803E] h-2.5 rounded-full" style={{ width: ((numRowsResoSen * 100) / denunciastotal.length) + '%' }}></div>
            </div>
          </div>
          {showModal4 ? (
            <>
              <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              >
                <div className="relative w-auto my-6 mx-auto max-w-[50%]">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-2 border-b border-solid border-slate-200 rounded-t bg-slate-600">
                      <h3 className="text-xl font-semibold text-white">
                        Denuncias con Resolución<br /> o Sentencia
                      </h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal4(false)}
                      >
                        <span className="text-black h-6 w-6 text-2xl" title="Cerrar">
                          X
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <div className="grid grid-cols-2 my-4 text-black text-md leading-relaxed  gap-3">
                        <div className="rounded-lg shadow-xl text-sm">
                          <div className="text-center font-bold p-2">Atendidas por UIF</div>
                          <div className="text-center font-bold">{numRowsReSenUIF}</div>
                        </div>
                        <div className="rounded-lg shadow-xl text-sm">
                          <div className="text-center font-bold">Atendidas por OIC</div>
                          <div className="text-center font-bold">{numRowsReSenOIC}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </div>
        <div>
          <div className="p-3 m-2 transition duration-300 ease-in-out delay-150 rounded-lg shadow-lg shadow-gray-500 h-min bg-gray-50 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200" onClick={() => setShowModal5(true)}>
            <div className="flex flex-row w-full p-2">
              <div className="font-semibold text-center">
                Impugnación <br />
                <label className="text-[#7E272C]">{numRowsImpugnacion}</label>
              </div>
            </div>
            {Math.round((numRowsImpugnacion * 100) / denunciastotal.length) + '%'}
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-3">
              <div className="bg-[#FF5396] h-2.5 rounded-full" style={{ width: ((numRowsImpugnacion * 100) / denunciastotal.length) + '%' }}></div>
            </div>
          </div>
          {showModal5 ? (
            <>
              <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              >
                <div className="relative w-auto my-6 mx-auto max-w-[50%]">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-2 border-b border-solid border-slate-200 rounded-t bg-slate-600">
                      <h3 className="text-xl font-semibold text-white">
                        Denuncias en Impugnación
                      </h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal5(false)}
                      >
                        <span className="text-black h-6 w-6 text-2xl" title="Cerrar">
                          X
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <div className="grid grid-cols-2 my-4 text-black text-md leading-relaxed  gap-3">
                        <div className="rounded-lg shadow-xl text-sm">
                          <div className="text-center font-bold p-2">Atendidas por UIF</div>
                          <div className="text-center font-bold">{numRowsImpugUIF}</div>
                        </div>
                        <div className="rounded-lg shadow-xl text-sm">
                          <div className="text-center font-bold">Atendidas por OIC</div>
                          <div className="text-center font-bold">{numRowsImpugOIC}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </div>
        <div>
          <div className="p-3 m-2 transition duration-300 ease-in-out delay-150 rounded-lg shadow-lg shadow-gray-500 h-min bg-gray-50 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200" onClick={() => setShowModal6(true)}>
            <div className="flex flex-row w-full p-2">
              <div className="font-semibold text-center">
                Amparo <br />
                <label className="text-[#7E272C]">{numRowsAmparo}</label>
              </div>
            </div>
            {Math.round((numRowsAmparo * 100) / denunciastotal.length) + '%'}
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-3">
              <div className="bg-[#DB8CFF] h-2.5 rounded-full" style={{ width: ((numRowsAmparo * 100) / denunciastotal.length) + '%' }}></div>
            </div>
          </div>
          {showModal6 ? (
            <>
              <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              >
                <div className="relative w-auto my-6 mx-auto max-w-[50%]">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-2 border-b border-solid border-slate-200 rounded-t bg-slate-600">
                      <h3 className="text-xl font-semibold text-white">
                        Denuncias en Amparo
                      </h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal6(false)}
                      >
                        <span className="text-black h-6 w-6 text-2xl" title="Cerrar">
                          X
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <div className="grid grid-cols-2 my-4 text-black text-md leading-relaxed  gap-3">
                        <div className="rounded-lg shadow-xl text-sm">
                          <div className="text-center font-bold p-2">Atendidas por UIF</div>
                          <div className="text-center font-bold">{numRowsAmpUIF}</div>
                        </div>
                        <div className="rounded-lg shadow-xl text-sm">
                          <div className="text-center font-bold">Atendidas por OIC</div>
                          <div className="text-center font-bold">{numRowsAmpOIC}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </div>
        <div>
          <div className="p-3 m-2 transition duration-300 ease-in-out delay-150 rounded-lg shadow-lg shadow-gray-500 h-min bg-gray-50 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200" onClick={() => setShowModal7(true)}>
            <div className="flex flex-row w-full p-2">
              <div className="font-semibold text-center">
                Firme <br />
                <label className="text-[#7E272C]">{numRowsFirme}</label>
              </div>
            </div>
            {Math.round((numRowsFirme * 100) / denunciastotal.length) + '%'}
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-3">
              <div className="bg-[#FF00BF] h-2.5 rounded-full" style={{ width: ((numRowsFirme * 100) / denunciastotal.length) + '%' }}></div>
            </div>
          </div>
          {showModal7 ? (
            <>
              <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              >
                <div className="relative w-auto my-6 mx-auto max-w-[50%]">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-2 border-b border-solid border-slate-200 rounded-t bg-slate-600">
                      <h3 className="text-xl font-semibold text-white">
                        Denuncias en Firme
                      </h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal7(false)}
                      >
                        <span className="text-black h-6 w-6 text-2xl" title="Cerrar">
                          X
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <div className="grid grid-cols-2 my-4 text-black text-md leading-relaxed  gap-3">
                        <div className="rounded-lg shadow-xl text-sm">
                          <div className="text-center font-bold p-2">Atendidas por UIF</div>
                          <div className="text-center font-bold">{numRowsFirUIF}</div>
                        </div>
                        <div className="rounded-lg shadow-xl text-sm">
                          <div className="text-center font-bold">Atendidas por OIC</div>
                          <div className="text-center font-bold">{numRowsFirOIC}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </div>
        <div>
          <div className="p-3 m-2 transition duration-300 ease-in-out delay-150 rounded-lg shadow-lg shadow-gray-500 h-min bg-gray-50 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200" onClick={() => setShowModal8(true)}>
            <div className="flex flex-row w-full p-2">
              <div className="font-semibold text-center">
                Conclusión y Archivo <br />
                <label className="text-[#7E272C]">{numRowsConcluidas}</label>
              </div>
            </div>
            {Math.round((numRowsConcluidas * 100) / denunciastotal.length) + '%'}
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-3">
              <div className="bg-[#5D3EFF] h-2.5 rounded-full" style={{ width: ((numRowsConcluidas * 100) / denunciastotal.length) + '%' }}></div>
            </div>
          </div>
          {showModal8 ? (
            <>
              <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              >
                <div className="relative w-auto my-6 mx-auto max-w-[50%]">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-2 border-b border-solid border-slate-200 rounded-t bg-slate-600">
                      <h3 className="text-xl font-semibold text-white">
                        Denuncias en Conclusión<br /> y Archivo
                      </h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal8(false)}
                      >
                        <span className="text-black h-6 w-6 text-2xl" title="Cerrar">
                          X
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <div className="grid grid-cols-2 my-4 text-black text-md leading-relaxed  gap-3">
                        <div className="rounded-lg shadow-xl text-sm">
                          <div className="text-center font-bold p-2">Atendidas por UIF</div>
                          <div className="text-center font-bold">{numRowsConcUIF}</div>
                        </div>
                        <div className="rounded-lg shadow-xl text-sm">
                          <div className="text-center font-bold">Atendidas por OIC</div>
                          <div className="text-center font-bold">{numRowsConcOIC}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </div>
        <div>
          <div className="p-3 m-2 transition duration-300 ease-in-out delay-150 rounded-lg shadow-lg shadow-gray-500 h-min bg-gray-50 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200" onClick={() => setShowModal9(true)}>
            <div className="flex flex-row w-full p-2">
              <div className="font-semibold text-center">
                Improcedentes <br />
                <label className="text-[#7E272C]">{numRowsImprocedente}</label>
              </div>
            </div>
            {Math.round((numRowsImprocedente * 100) / denunciastotal.length) + '%'}
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-3">
              <div className="bg-[#0040FF] h-2.5 rounded-full" style={{ width: ((numRowsImprocedente * 100) / denunciastotal.length) + '%' }}></div>
            </div>
          </div>
          {showModal9 ? (
            <>
              <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              >
                <div className="relative w-auto my-6 mx-auto max-w-[50%]">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-2 border-b border-solid border-slate-200 rounded-t bg-slate-600">
                      <h3 className="text-xl font-semibold text-white">
                        Denuncias Improcedentes
                      </h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal9(false)}
                      >
                        <span className="text-black h-6 w-6 text-2xl" title="Cerrar">
                          X
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <div className="grid grid-cols-2 my-4 text-black text-md leading-relaxed  gap-3">
                        <div className="rounded-lg shadow-xl text-sm">
                          <div className="text-center font-bold p-2">Inconformidades</div>
                          <div className="text-center font-bold">{numRowsImproINC}</div>
                        </div>
                        <div className="rounded-lg shadow-xl text-sm">
                          <div className="text-center font-bold">Procesos administrativos<br /> sancionatorios</div>
                          <div className="text-center font-bold">{numRowsImproPAS}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </div>
        <div>
          <div className="p-3 m-2 transition duration-300 ease-in-out delay-150 rounded-lg shadow-lg shadow-gray-500 h-min bg-gray-50 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200" onClick={() => setShowModal10(true)}>
            <div className="flex flex-row w-full p-2">
              <div className="font-semibold text-center">
                Sobreseimiento <br />
                <label className="text-[#7E272C]">{numRowsSobreseimiento}</label>
              </div>
            </div>
            {Math.round((numRowsSobreseimiento * 100) / denunciastotal.length) + '%'}
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-3">
              <div className="bg-[#70D3FF] h-2.5 rounded-full" style={{ width: ((numRowsSobreseimiento * 100) / denunciastotal.length) + '%' }}></div>
            </div>
          </div>
          {showModal10 ? (
            <>
              <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              >
                <div className="relative w-auto my-6 mx-auto max-w-[50%]">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-2 border-b border-solid border-slate-200 rounded-t bg-slate-600">
                      <h3 className="text-xl font-semibold text-white">
                        Denuncias en Sobreseimiento
                      </h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal10(false)}
                      >
                        <span className="text-black h-6 w-6 text-2xl" title="Cerrar">
                          X
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <div className="grid grid-cols-2 my-4 text-black text-md leading-relaxed  gap-3">
                        <div className="rounded-lg shadow-xl text-sm">
                          <div className="text-center font-bold p-2">Atendidas por UIF</div>
                          <div className="text-center font-bold">{numRowsSobreINC}</div>
                        </div>
                        <div className="rounded-lg shadow-xl text-sm">
                          <div className="text-center font-bold">Atendidas por OIC</div>
                          <div className="text-center font-bold">{numRowsSobrePAS}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </div>
        <div>
          <div className="p-3 m-2 transition duration-300 ease-in-out delay-150 rounded-lg shadow-lg shadow-gray-500 h-min bg-gray-50 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200" onClick={() => setShowModal11(true)}>
            <div className="flex flex-row w-full p-2">
              <div className="font-semibold text-center">
                En Proceso <br />
                <label className="text-[#7E272C]">{numRowsProceso}</label>
              </div>
            </div>
            {Math.round((numRowsProceso * 100) / denunciastotal.length) + '%'}
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-3">
              <div className="bg-[#4BFFFF] h-2.5 rounded-full" style={{ width: ((numRowsProceso * 100) / denunciastotal.length) + '%' }}></div>
            </div>
          </div>
          {showModal11 ? (
            <>
              <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              >
                <div className="relative w-auto my-6 mx-auto max-w-[50%]">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-2 border-b border-solid border-slate-200 rounded-t bg-slate-600">
                      <h3 className="text-xl font-semibold text-white">
                        Denuncias en Proceso
                      </h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal11(false)}
                      >
                        <span className="text-black h-6 w-6 text-2xl" title="Cerrar">
                          X
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <div className="grid grid-cols-2 my-4 text-black text-md leading-relaxed  gap-3">
                        <div className="rounded-lg shadow-xl text-sm">
                          <div className="text-center font-bold p-2">Atendidas por UIF</div>
                          <div className="text-center font-bold">{numRowsProceUIF}</div>
                        </div>
                        <div className="rounded-lg shadow-xl text-sm">
                          <div className="text-center font-bold">Atendidas por OIC</div>
                          <div className="text-center font-bold">{numRowsProceOIC}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </div>
      </div>
    </>
  )
}
