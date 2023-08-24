import { useMemo } from 'react'
import { HiInbox, HiUser, HiMenuAlt1, HiClipboardList, HiSearch, HiAnnotation, HiChartSquareBar, HiFolderOpen } from 'react-icons/hi';

import Tablero from '../views/Tablero'
import Busqueda from '../views/Busqueda'
import Tipo from '../views/Tipo'
import Estadisticas from '../views/Estadisticas'
import Denuncias from "../views/Denuncias";


const ListPages = () => {

    const list = useMemo(()=>[
        {title: 'Tablero', icon: <HiInbox />, link:'', component: <Tablero /> },
        {title: 'Busqueda', icon: <HiSearch />, link:'busqueda', component: <Busqueda /> },
        {title: 'Tipo de Denuncia', icon: <HiAnnotation />, link:'tipo', component: <Tipo /> },
        {title: 'Estadisticas', icon: <HiChartSquareBar />, link:'estadisticas', component: <Estadisticas /> },
        {title: 'Denuncias', icon: <HiFolderOpen />, link:'denuncias', component: <Denuncias /> },
    ],[])

  return {
    list
  }
}

export default ListPages