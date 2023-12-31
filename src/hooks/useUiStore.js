import Swal from 'sweetalert2'
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setModal, setModalPwd, setSearch, setSelectedLink } from "../store/ui/uiSlice";


export const useUiStore = () => {
    const { loading, modal, modalpwd, search, selectedLink } = useSelector(state => state.ui)
    const dispatch = useDispatch();

    const onLoading = ( status ) => {
        dispatch( setLoading( status ) );
    }

    const onModal = ( status ) => {
        dispatch( setModal( status ) );
    }

    const onModalPwd = ( status ) => {
        dispatch( setModalPwd( status ) );
    }

    const onNotification = ({ icon, title
        , message, type = 1 }) => {
        if( type === 1) {
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
        }else{
            Swal.fire(
                title,
                message,
                icon
            )
        }
    }

    const onSetSearch = ( status ) => {
        dispatch( setSearch( status) )
    }

    const onSetSelectedLink = ( link ) => {
        dispatch( setSelectedLink( link) )
    }

    return {
        modal,
        loading, 
        search,
        modalpwd,
        selectedLink,

        onLoading,
        onModal, 
        onNotification,
        onSetSearch,
        onModalPwd,
        onSetSelectedLink
    }
}