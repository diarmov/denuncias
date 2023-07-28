import { useContext } from "react";
import DenunciasContext from "../context/DenunciasProvider";

const useDenuncias = () => {

    return useContext(DenunciasContext)

}

export default useDenuncias