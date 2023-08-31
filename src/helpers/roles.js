export const roles = () => {

    const isRoot = ( user ) => {
        if(user?.role === 'root')
           return true
    }

    const isResolucion = ( user ) => {
        if(user?.role === 'OIC' || user?.role === 'JFC' || user?.role === 'TJA')
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
