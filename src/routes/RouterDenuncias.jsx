import { Navigate, createBrowserRouter } from "react-router-dom";
import Layout from '../Layouts/Layout'
import Inicio from "../views/Inicio";
import Loginform from '../components/Loginform'
import Tablero from '../views/Tablero'
import Busqueda from '../views/Busqueda'
import Tipo from '../views/Tipo'
import Estadisticas from '../views/Estadisticas'
import Listado from '../views/usuarios/Listado'

export const RouterDenuncias = () => {
    const getRoutes = ( status ) => {
        let router;
        if( status ==='authenticated' ) {
            router = createBrowserRouter([
                {
                    path: '/',
                    element: <Inicio />,
                    children: [
                        {
                            index: true,
                            element: <Tablero />
                        }
                    ]
                },
                {
                    path: '/inicio',
                    element: <Inicio />,
                    children: [
                        {
                            index: true,
                            element: <Tablero />
                        }
                    ]
                },
                {
                    path: '/busqueda',
                    element: <Inicio />,
                    children: [
                        {
                            index: true,
                            element: <Busqueda />
                        }
                    ]
                },
                {
                    path: '/tipo',
                    element: <Inicio />,
                    children: [
                        {
                            index: true,
                            element: <Tipo />
                        }
                    ]
                },
                {
                    path: '/estadisticas',
                    element: <Inicio />,
                    children: [
                        {
                          index: true,
                          element: <Estadisticas />
                        }
                    ]
                },
                {
                     path: '/usuarios',
                     element: <Inicio />,
                     children: [
                        {
                           index: true,
                           element: <Listado />
                         }
                      ]
                },
                {
                    path: "/*",
                    element: <Navigate to="/" /> 
                }
                
            ])
        }
        else {
            router = createBrowserRouter([
                {
                    path: '/',
                    element: <Layout />,
                    children: [{
                        index: true,
                        element: <Loginform />
                    }]
                },
                {
                    path: "/*",
                    element: <Navigate to="/" /> 
                }
            ])
        }

        return router;
    } 

  return {
    getRoutes
  }
}
