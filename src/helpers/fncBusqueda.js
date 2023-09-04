export const fncBusqueda = () => {
  
   const onDetails = ( denuncias ) => {
     return {
        denuncias: denuncias.length,
        oics: (denuncias.filter(d => d.idUbicacion === 1)).length,
        sfp: (denuncias.filter(d => d.idUbicacion !== 1)).length,
        grave: (denuncias.filter(d => d.idTipoFalta === 1)).length,
        noGrave: (denuncias.filter(d => d.idTipoFalta === 2)).length,
        ambos: (denuncias.filter(d => d.idTipoFalta === 3)).length,
        investigacion: (denuncias.filter(d => d.idEtapa === 1)).length,
        substanciacion: (denuncias.filter(d => d.idEtapa === 2)).length,
        resolucion: (denuncias.filter(d => d.idEtapa === 3)).length,
        resSent: (denuncias.filter(d => d.idEtapa === 4)).length,
        impugnacion: (denuncias.filter(d => d.idEtapa === 5)).length,
        amparo: (denuncias.filter(d => d.idEtapa === 6)).length,
        firme: (denuncias.filter(d => d.idEtapa === 7)).length,
        conArch: (denuncias.filter(d => d.idEtapa === 8)).length,
        inprocedentes: (denuncias.filter(d => d.idEtapa === 9)).length,
        Sobreseimiento: (denuncias.filter(d => d.idEtapa === 10)).length,
        proceso: (denuncias.filter(d => d.idEtapa === 11)).length
     }

   }
  
   return { onDetails }
}

