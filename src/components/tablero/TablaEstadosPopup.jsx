import { Pagination, Table, Tooltip } from 'flowbite-react';
import { useEffect } from "react";
import { useTableroStore } from '../../hooks/useTableroStore';
import { useUiStore } from '../../hooks/useUiStore';


export default function TablaEstadosPopup() {

    const { depcount, onGetDataDepenCount } = useTableroStore()
    const { search } = useUiStore();
    //console.log(dependencias)
    useEffect(() => {
        if (depcount.length === 0) onGetDataDepenCount()
    }, [])

    return (
        <>
            <div className="relative flex-auto p-6">
                Ya estoy desde el componente TablaEstadosPopup
            </div>
        </>
    )
}
