import React from "react";

const ModalDependencias = ({ children, showModal, setShowModal, titulo }) => {
    return (
        <>
            {showModal &&

                <><div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                    <div className="relative w-auto my-6 mx-auto max-w-[50%]">
                        {/*content*/}
                        <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex items-start justify-between p-2 border-b border-solid rounded-t border-slate-200 bg-slate-600">
                                <h3 className="text-xl font-semibold text-white">
                                    {titulo}
                                </h3>
                                <button
                                    className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none focus:outline-none"
                                    onClick={() => setShowModal(false)}
                                >
                                    <span className="w-6 h-6 text-2xl text-black" title="Cerrar">
                                        X
                                    </span>
                                </button>
                            </div>
                            {/*body*/}
                            {children}
                        </div>
                    </div>
                </div><div className="fixed inset-0 z-40 bg-black opacity-25"></div></>

            }
        </>
    );
}

export default ModalDependencias;
