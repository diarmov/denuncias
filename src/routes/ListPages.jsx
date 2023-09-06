import { useMemo } from 'react'
import { HiHome, HiInbox, HiUser, HiFolderAdd, HiSearch, HiAnnotation, HiChartSquareBar, HiFolderOpen } from 'react-icons/hi';

import Tablero from '../views/Tablero'
import Busqueda from '../views/Busqueda'
import Tipo from '../views/Tipo'
import Estadisticas from '../views/Estadisticas'
import Denuncias from "../views/Denuncias";
import { FormDenuncia } from '../components/denuncias';
import Resoluciones from '../views/Resoluciones';
import Listado from '../views/usuarios/Listado';
import { roles } from '../helpers/roles';
import { useAuthStore } from '../hooks/useAuthStore';
import Welcome from '../views/Welcome';


const ListPages = () => {
    const {  isRoot, isTitular, isDenuncia, isResolucion} = roles() 
    const { active } = useAuthStore()

    const list = useMemo(()=>[
          {title: 'Inicio', icon: <HiHome />, link:'', component: <Welcome /> },

        ...isTitular(active)  ? [
          {title: 'Tablero', icon: <HiInbox />, link:'tablero', component: <Tablero /> },
          {title: 'Busqueda', icon: <HiSearch />, link:'busqueda', component: <Busqueda /> },
          {title: 'Tipo de Denuncia', icon: <HiAnnotation />, link:'tipo', component: <Tipo /> },
          {title: 'Estadisticas', icon: <HiChartSquareBar />, link:'estadisticas', component: <Estadisticas /> },
        ] : [],        
      
        ...isDenuncia(active)  ? [
          {title: 'Denuncias', icon: <HiFolderAdd />, link:'denuncias', component: <Denuncias /> },
        ] : [],
       
        ...isRoot(active) ? [
          {title: 'Tablero', icon: <HiInbox />, link:'tablero', component: <Tablero /> },
          {title: 'Busqueda', icon: <HiSearch />, link:'busqueda', component: <Busqueda /> },
          {title: 'Tipo de Denuncia', icon: <HiAnnotation />, link:'tipo', component: <Tipo /> },
          {title: 'Estadisticas', icon: <HiChartSquareBar />, link:'estadisticas', component: <Estadisticas /> },
          {title: 'Denuncias', icon: <HiFolderAdd />, link:'denuncias', component: <Denuncias /> },
          {title: 'Resoluciones', icon: <HiFolderAdd />, link:'resoluciones', component: <Resoluciones /> },
          {title: 'Usuarios', icon: <HiUser />, link:'users', component: <Listado /> },
        ] : [],

        ...isResolucion(active)  ? [
          {title: 'Resoluciones', icon: <HiFolderAdd />, link:'resoluciones', component: <Resoluciones /> },
        ] : [],
        
    ],[])

    const components = useMemo(()=>[
      {link:'denuncias-manage', component: <FormDenuncia /> },
    ],[])

  return {
    list,
    components
  }
}

export default ListPages