import Swal from 'sweetalert2'
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setModal } from "../store/ui/uiSlice";


export const useUiStore = () => {
    const { loading, modal } = useSelector(state => state.ui)
    const dispatch = useDispatch();

    const onLoading = ( status ) => {
        dispatch( setLoading( status ) );
    }

    const onModal = ( status ) => {
        dispatch( setModal( status ) );
    }

    const onNotification = ({ icon, message }) => {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast.fire({
            icon,
            title: message 
        })
    }

    return {
        modal,
        loading, 

        onLoading,
        onModal, 
        onNotification
    }
}