import React, { useState } from "react";
import { useEffect } from "react";
import LinesChartDenuncias from "../components/LinesChartDenuncias";
import { PopUp } from "../components/ui";
import { useTableroStore } from "../hooks/useTableroStore";
import { HiOutlineOfficeBuilding, HiOutlineClipboardList } from 'react-icons/hi';
import { useUiStore } from "../hooks/useUiStore";
import { Table } from "flowbite-react";
import { TableDependencias } from "../components/tablero/TableDependencias";
import TablaDependenciasPopup from "../components/tablero/TablaDependenciasPopup";
import TablaEstadosPopup from "../components/tablero/TablaEstadosPopup";

export default function tablero({ onSetSelectedLink, link }) {

  const { denunciastotal, datamodal, onGetDenunciasTotal, onSetDataModal } = useTableroStore()

  // console.log(denunciastotal);
  useEffect(() => {
    onSetSelectedLink(link)
    if (denunciastotal.length === 0) onGetDenunciasTotal()
  }, [])


  const numRowsIniUIF = denunciastotal.filter(item => item.idOrigen == '2').length
  const numRowsIniOIC = denunciastotal.filter(item => item.idOrigen == '1').length

  //************************************************************************* */

  const numRowsINC = denunciastotal.filter(item => item.idCaptacion == '16').length
  const numRowsPAS = denunciastotal.filter(item => item.idCaptacion == '17').length
  //************************************************************************* */

  const etapaInvestigacion = denunciastotal.filter(item => item.idEtapa == '1')
  const numRowsInvestigacion = etapaInvestigacion.length
  const numRowsInvesUIF = etapaInvestigacion.filter(item => item.idUbicacion != '1').length
  const numRowsInvesOIC = etapaInvestigacion.filter(item => item.idUbicacion == '1').length
  //************************************************************************* */

  const etapaSubstanciacion = denunciastotal.filter(item => item.idEtapa == '2')
  const numRowsSubstanciacion = etapaSubstanciacion.length
  const numRowsSubsUIF = etapaSubstanciacion.filter(item => item.idOrigen != '1').length
  const numRowsSubsOIC = etapaSubstanciacion.filter(item => item.idOrigen == '1').length
  //************************************************************************* */

  const etapaResolucion = denunciastotal.filter(item => item.idEtapa == '3')
  const numRowsResolucion = etapaResolucion.length
  const numRowsResolINC = etapaResolucion.filter(item => item.idOrigen != '1').length
  const numRowsResolPAS = etapaResolucion.filter(item => item.idOrigen == '1').length
  //************************************************************************* */

  const etapaResoSen = denunciastotal.filter(item => item.idEtapa == '4')
  const numRowsResoSen = etapaResoSen.length
  const numRowsReSenUIF = etapaResoSen.filter(item => item.idOrigen != '1').length
  const numRowsReSenOIC = etapaResoSen.filter(item => item.idOrigen == '1').length
  //************************************************************************* */

  const etapaImpugnacion = denunciastotal.filter(item => item.idEtapa == '5')
  const numRowsImpugnacion = etapaImpugnacion.length
  const numRowsImpugUIF = etapaImpugnacion.filter(item => item.idOrigen != '1').length
  const numRowsImpugOIC = etapaImpugnacion.filter(item => item.idOrigen == '1').length
  //************************************************************************* */

  const etapaAmparo = denunciastotal.filter(item => item.idEtapa == '6')
  const numRowsAmparo = etapaAmparo.length
  const numRowsAmpUIF = etapaAmparo.filter(item => item.idOrigen != '1').length
  const numRowsAmpOIC = etapaAmparo.filter(item => item.idOrigen == '1').length
  //************************************************************************* */

  const etapaFirme = denunciastotal.filter(item => item.idEtapa == '7')
  const numRowsFirme = etapaFirme.length
  const numRowsFirUIF = etapaFirme.filter(item => item.idOrigen != '1').length
  const numRowsFirOIC = etapaFirme.filter(item => item.idOrigen == '1').length
  //************************************************************************* */

  const etapaConcluidas = denunciastotal.filter(item => item.idEtapa == '8')
  const numRowsConcluidas = etapaConcluidas.length
  const numRowsConcUIF = etapaConcluidas.filter(item => item.idOrigen != '1').length
  const numRowsConcOIC = etapaConcluidas.filter(item => item.idOrigen == '1').length

  //************************************************************************* */

  const etapaImprocedente = denunciastotal.filter(item => item.idEtapa == '9')
  const numRowsImprocedente = etapaImprocedente.length
  const numRowsImproINC = etapaImprocedente.filter(item => item.idCaptacion == '16').length
  const numRowsImproPAS = etapaImprocedente.filter(item => item.idCaptacion == '17').length
  //************************************************************************* */

  const etapaSobreseimiento = denunciastotal.filter(item => item.idEtapa == '10')
  const numRowsSobreseimiento = etapaSobreseimiento.length
  const numRowsSobreINC = etapaSobreseimiento.filter(item => item.idOrigen == '16').length
  const numRowsSobrePAS = etapaSobreseimiento.filter(item => item.idCaptacion == '17').length
  //************************************************************************* */

  const etapaProceso = denunciastotal.filter(item => item.idEtapa == '11')
  const numRowsProceso = etapaProceso.length
  const numRowsProceUIF = etapaProceso.filter(item => item.idOrigen != '1').length
  const numRowsProceOIC = etapaProceso.filter(item => item.idOrigen == '1').length
  //************************************************************************* *

  //const investigation = depcount.filter(item => item.Investigacion != '0')
  //const investigationoic = depcount.filter(item => item.Investigacion != '0')


  //console.log(investado, investadonoic)

  //************************************************************************* *
  const { onModal } = useUiStore()

  const handleModal = (datamodal) => {
    onSetDataModal(datamodal)
    onModal('default')

  }


  return (


    <>

      <div className="grid w-full grid-cols-1 p-10 mb-5 md:grid-cols-2 lg:grid-cols-5">
        <div>
          <div className="p-3 m-2 transition duration-300 ease-in-out delay-150 rounded-lg shadow-lg shadow-gray-500 h-min bg-gray-50 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200">
            <div className="flex justify-center w-full text-lg font-bold">
              <h1>Total de Denuncias Recibidas</h1>
            </div>
            <hr /><br />
            <div className="columns-2">
              <div className="flex items-center justify-end w-full">
                <svg className="w-10 h-10 p-2 text-blue-500 bg-blue-300 rounded-md shadow-sm " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18"><path d="M18 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3.546l3.2 3.659a1 1 0 0 0 1.506 0L13.454 14H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-8 10H5a1 1 0 0 1 0-2h5a1 1 0 1 1 0 2Zm5-4H5a1 1 0 0 1 0-2h10a1 1 0 1 1 0 2Z" /></svg>
              </div>
              <div className="flex items-center justify-center w-full">
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
      <div className="text-lg md:text-2xl lg:text-3xl font-bold bg-[#BF5854] mt-10 justify-center flex text-white p-3 w-full">Histórico de Seguimiento a Denuncias</div>
      <div className="flex items-center justify-center w-full grid-cols-1 p-4">
        <div className="justify-center w-full md:w-[80%] lg:w-[50%]">
          <div>
            <LinesChartDenuncias />
          </div>
        </div>
      </div>
      <div className="text-lg md:text-2xl lg:text-3xl font-bold bg-[#BF5854] mt-10 justify-center flex text-white p-3 w-full">Etapa Procesal</div>
      <div className="grid w-full grid-cols-1 p-10 md:grid-cols-3 lg:grid-cols-6">
        <PopUp title={datamodal.titulo}>

          {
            datamodal.tipo === 1
              ? (
                <TablaDependenciasPopup
                  data={datamodal}
                />
              )
              : (
                <TablaEstadosPopup
                  data={datamodal}
                />
              )
          }


        </PopUp>
        <div>
          <div className="p-3 m-2 rounded-lg shadow-lg shadow-gray-500 h-min">
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
            <div className="grid w-full grid-cols-1 md:grid-cols-2">
              <div className="flex justify-center transition duration-300 ease-in-out delay-150 rounded-full cursor-pointer hover:-translate-y-1 hover:scale-110 hover:bg-gray-200" title="Dependencias" onClick={() => handleModal({ titulo: 'Denuncias en Investigacion por Dependencia', tipo: 1, id: 1 })} ><HiOutlineOfficeBuilding /></div>
              <div className="flex justify-center transition duration-300 ease-in-out delay-150 rounded-full cursor-pointer hover:-translate-y-1 hover:scale-110 hover:bg-gray-200" title="Estatus" onClick={() => handleModal({ titulo: 'Denuncias en Investigacion por Estatus', tipo: 2, id: 1 })} ><HiOutlineClipboardList /></div>
            </div>
          </div>
        </div>
        <div>
          <div className="p-3 m-2 transition duration-300 ease-in-out delay-150 rounded-lg shadow-lg shadow-gray-500 h-min bg-gray-50 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200" onClick={() => handleModal({ titulo: 'Denuncias en Substanciación por Dependencia', tipo: 1, id: 2 })}>
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
        </div>
        <div>
          <div className="p-3 m-2 transition duration-300 ease-in-out delay-150 rounded-lg shadow-lg shadow-gray-500 h-min bg-gray-50 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200" onClick={() => handleModal({ titulo: 'Denuncias en Resolución', UIF: 'UIF', totalUIF: numRowsResolINC, OIC: 'OIC', totalOIC: numRowsResolPAS })}>
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
        <div>
          <div className="p-3 m-2 transition duration-300 ease-in-out delay-150 rounded-lg shadow-lg shadow-gray-500 h-min bg-gray-50 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200" onClick={() => handleModal({ titulo: 'Denuncias con Resoluci{on o Sentencia', UIF: 'UIF', totalUIF: numRowsReSenUIF, OIC: 'OIC', totalOIC: numRowsReSenOIC })}>
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
        </div>
        <div>
          <div className="p-3 m-2 transition duration-300 ease-in-out delay-150 rounded-lg shadow-lg shadow-gray-500 h-min bg-gray-50 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200" onClick={() => handleModal({ titulo: 'Denuncias en Impugnación', UIF: 'UIF', totalUIF: numRowsImpugUIF, OIC: 'OIC', totalOIC: numRowsImpugOIC })}>
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
        </div>
        <div>
          <div className="p-3 m-2 transition duration-300 ease-in-out delay-150 rounded-lg shadow-lg shadow-gray-500 h-min bg-gray-50 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200" onClick={() => handleModal({ titulo: 'Denuncias en Amparo', UIF: 'UIF', totalUIF: numRowsAmpUIF, OIC: 'OIC', totalOIC: numRowsAmpOIC })}>
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
        </div>
        <div>
          <div className="p-3 m-2 transition duration-300 ease-in-out delay-150 rounded-lg shadow-lg shadow-gray-500 h-min bg-gray-50 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200" onClick={() => handleModal({ titulo: 'Denuncias en Firme', UIF: 'UIF', totalUIF: numRowsFirUIF, OIC: 'OIC', totalOIC: numRowsFirOIC })}>
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
        </div>
        <div>
          <div className="p-3 m-2 transition duration-300 ease-in-out delay-150 rounded-lg shadow-lg shadow-gray-500 h-min bg-gray-50 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200" onClick={() => handleModal({ titulo: 'Denuncias en Conclusión y Archivo', UIF: 'UIF', totalUIF: numRowsConcUIF, OIC: 'OIC', totalOIC: numRowsConcOIC })}>
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
        </div>
        <div>
          <div className="p-3 m-2 transition duration-300 ease-in-out delay-150 rounded-lg shadow-lg shadow-gray-500 h-min bg-gray-50 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200" onClick={() => handleModal({ titulo: 'Denuncias en Firme', UIF: 'Inconformidades', totalUIF: numRowsImproINC, OIC: 'Proceso Administrativo Sancionatorio', totalOIC: numRowsImproPAS })}>
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
        </div>
        <div>
          <div className="p-3 m-2 transition duration-300 ease-in-out delay-150 rounded-lg shadow-lg shadow-gray-500 h-min bg-gray-50 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200" onClick={() => handleModal({ titulo: 'Denuncias en Sobreseimiento', UIF: 'UIF', totalUIF: numRowsSobreINC, OIC: 'OIC', totalOIC: numRowsSobrePAS })}>
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
        </div>
        <div>
          <div className="p-3 m-2 transition duration-300 ease-in-out delay-150 rounded-lg shadow-lg shadow-gray-500 h-min bg-gray-50 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200" onClick={() => handleModal({ titulo: 'Denuncias en Proceso', UIF: 'UIF', totalUIF: numRowsProceUIF, OIC: 'OIC', totalOIC: numRowsProceOIC })}>
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
        </div>
      </div >
      <div className="text-lg md:text-2xl lg:text-3xl font-bold bg-[#BF5854] mt-10 justify-center flex text-white p-3 w-full">Denuncias por Dependencia</div>
      <div className="flex justify-center w-full p-5">
        <TableDependencias />
      </div>
    </>
  )
}


