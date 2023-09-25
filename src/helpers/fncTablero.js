export const fncTablero = () => {
    
    const onDataTablero = ( denuncias ) => {
        return {
           denuncias: denuncias.length,
           uif: (denuncias.filter(d => d.idOrigen === 2)).length,
           oic: (denuncias.filter(d => d.idOrigen == 1)).length,
           inconformidades: (denuncias.filter(d => d.idCaptacion == 16)).length,
           sancionatorios: (denuncias.filter(d => d.idCaptacion == 17)).length,
           //etapas
           investigacion: (denuncias.filter(d => d.idEtapa == 1)).length,
           substanciacion: (denuncias.filter(d => d.idEtapa == 2)).length,
           resolucion: (denuncias.filter(d => d.idEtapa == 3)).length,
           sentencia: (denuncias.filter(d => d.idEtapa == 4)).length,
           impugnacion: (denuncias.filter(d => d.idEtapa == 5)).length,
           amparo: (denuncias.filter(d => d.idEtapa == 6)).length,
           firme: (denuncias.filter(d => d.idEtapa == 7)).length,
           conclusion: (denuncias.filter(d => d.idEtapa == 8)).length,
           improcedentes: (denuncias.filter(d => d.idEtapa == 9)).length,
           sobreseimiento: (denuncias.filter(d => d.idEtapa == 10)).length,
           proceso: (denuncias.filter(d => d.idEtapa == 11)).length,
           //remitidas
           remitidasuif:(denuncias.filter(d => d.numExpUif !== null && d.numExpOic !== null && d.idOrigen === 1 && d.idEstatus !== 21 )).length,
           remitidasoic:(denuncias.filter(d => d.numExpUif !== null && d.numExpOic !== null && d.idOrigen === 2 )).length,
        }
   
    }
  return { onDataTablero }
}


