import { lazy, useMemo } from 'react'
import { HiHome, HiInbox, HiUser, HiFolderAdd, HiSearch, HiAnnotation, HiChartSquareBar, HiFolderOpen } from 'react-icons/hi';

import { roles } from '../helpers/roles';
import { useAuthStore } from '../hooks/useAuthStore';
import { useUiStore } from '../hooks/useUiStore';

const Welcome = lazy(() => import("../views/Welcome"));
const Tablero = lazy(() => import("../views/Tablero"));
const Busqueda = lazy(() => import("../views/Busqueda"));
const Tipo = lazy(() => import("../views/Tipo"));
const Estadisticas = lazy(() => import("../views/Estadisticas"));
const Denuncias = lazy(() => import("../views/Denuncias"));
const Resoluciones = lazy(() => import("../views/Resoluciones"));
const Listado = lazy(() => import("../views/usuarios/Listado"));
const FormDenuncia = lazy(() => import("../components/denuncias/FormDenuncia"));



const ListPages = () => {
    const {  isRoot, isTitular, isDenuncia, isResolucion} = roles() 
    const { active } = useAuthStore()
    const { onSetSelectedLink } = useUiStore()

    const list = useMemo(()=>[
          {title: 'Inicio', icon: <HiHome />, link:'', component: <Welcome {...{onSetSelectedLink, link:''}}/> },

        ...isTitular(active)  ? [
          {title: 'Tablero', icon: <HiInbox />, link:'tablero', component: <Tablero {...{onSetSelectedLink, link:'tablero'}}/> },
          {title: 'Busqueda', icon: <HiSearch />, link:'busqueda', component: <Busqueda {...{onSetSelectedLink, link:'busqueda'}}/> },
          {title: 'Tipo de Denuncia', icon: <HiAnnotation />, link:'tipo', component: <Tipo {...{onSetSelectedLink, link:'tipo'}}/> },
          {title: 'Estadisticas', icon: <HiChartSquareBar />, link:'estadisticas', component: <Estadisticas {...{onSetSelectedLink, link:'estadisticas'}}/> },
        ] : [],        
      
        ...isDenuncia(active)  ? [
          {title: 'Denuncias', icon: <HiFolderOpen />, link:'denuncias', component: <Denuncias {...{onSetSelectedLink, link:'denuncias'}}/> },
        ] : [],
       
        ...isRoot(active) ? [
          {title: 'Tablero', icon: <HiInbox />, link:'tablero', component: <Tablero {...{onSetSelectedLink, link:'tablero'}}/> },
          {title: 'Busqueda', icon: <HiSearch />, link:'busqueda', component: <Busqueda {...{onSetSelectedLink, link:'busqueda'}}/> },
          {title: 'Tipo de Denuncia', icon: <HiAnnotation />, link:'tipo', component: <Tipo {...{onSetSelectedLink, link:'tipo'}}/> },
          {title: 'Estadisticas', icon: <HiChartSquareBar />, link:'estadisticas', component: <Estadisticas {...{onSetSelectedLink, link:'estadisticas'}}/> },
          {title: 'Denuncias', icon: <HiFolderOpen />, link:'denuncias', component: <Denuncias {...{onSetSelectedLink, link:'denuncias'}}/> },
          {title: 'Resoluciones', icon: <HiFolderAdd />, link:'resoluciones', component: <Resoluciones {...{onSetSelectedLink, link:'resoluciones'}}/> },
          {title: 'Usuarios', icon: <HiUser />, link:'users', component: <Listado  {...{onSetSelectedLink, link:'users'}}/> },
        ] : [],

        ...isResolucion(active)  ? [
          {title: 'Resoluciones', icon: <HiFolderAdd />, link:'resoluciones', component: <Resoluciones {...{onSetSelectedLink, link:''}}/> },
        ] : [],
        
    ],[])

    const components = useMemo(()=>[
      {link:'denuncias-manage', component: <FormDenuncia /> },
    ],[])

  return {
    list,
    components,
  }
}

export default ListPages