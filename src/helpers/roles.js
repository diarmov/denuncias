export const roles = () => {

    const isRoot = ( user ) => {
        if(user?.role === 'root')
           return true
    }

    const isTitular = ( user ) => {
        if(user?.role === 'titular')
           return true
    }

    const isSubsecretario = ( user ) => {
        if(user?.role === 'subsecretario')
           return true
    }

    const isDenuncia= ( user ) => {
        if(user?.role === 'OIC' || user?.role === 'UIF' || user?.role === 'DR' || user?.role === 'DRSP' || user?.role === 'DC')
           return true
    }

    const isResolucion = ( user ) => {
        if(user?.role === 'OIC' || user?.role === 'JFC' || user?.role === 'TJA' || user?.role === 'DC')
           return true
    }

    const isOic = ( user ) => {
        if(user?.role === 'OIC')
           return true
    }

    const isUif = ( user ) => {
        if(user?.role === 'UIF')
           return true
    }

    const isDr = ( user ) => {
        if(user?.role === 'DR')
           return true
    }

    const isDrsp = ( user ) => {
        if(user?.role === 'DRSP')
           return true
    }

    const isTja = ( user ) => {
        if(user?.role === 'TJA')
           return true
    }

    const isJfc = ( user ) => {
        if(user?.role === 'JFC')
           return true
    }

    const isDc = ( user ) => {
        if(user?.role === 'DC')
           return true
    }

  return {
    isRoot,
    isTitular,
    isSubsecretario,
    isDenuncia,
    isResolucion,
    isOic,   
    isUif,
    isDr,
    isDrsp,
    isTja,
    isJfc,
    isDc
  }
}
