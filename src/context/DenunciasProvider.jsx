import { createContext, useEffect, useState } from "react"
import clienteAxios from "../config/axios";


const DenunciasContext = createContext();

const DenunciasProvider = ({children}) => {

const [usuarios, setUsuarios] = useState([]);


// const obtenerUsuarios = async () =>{
//     try {
//         const {data} = await clienteAxios('/api/listado')
//         setUsuarios(data.data)
//     } catch (error) {
//         console.log(error)
//     }
// }

// useEffect(()=>{
//     obtenerUsuarios();
// },[])


    return (
        <DenunciasContext.Provider
         value={{ 
            usuarios
          }}
        >{children}</DenunciasContext.Provider>
    )
}
export {
    DenunciasProvider
}
export default DenunciasContext