import React, { useState } from "react";
import { Pagination, Table, Tooltip } from 'flowbite-react';
import { useEffect } from "react";
import { useTableroStore } from '../../hooks/useTableroStore';
import { useUiStore } from '../../hooks/useUiStore';


export default function TablaDependenciasPopup({ data }) {
    console.log(data)

    const { depcount, onGetDataDepenCount } = useTableroStore()
    const { search } = useUiStore();


    useEffect(() => {
        if (depcount.length === 0) onGetDataDepenCount()
    }, [])

    console.log(depcount)

    return (
        <>
            <div className="relative flex-auto p-6">
                {data}
                <div className="grid grid-cols-2 gap-3 my-4 leading-relaxed text-black text-md">
                    <div className="text-sm rounded-lg shadow-xl">
                        <div className="p-2 font-bold text-center">UIF</div>
                        <div className="font-bold text-center">TOTAL DE UIF</div>
                    </div>
                    <div className="text-sm rounded-lg shadow-xl">
                        <div className="font-bold text-center">OIC</div>
                        <div className="font-bold text-center">TOTAL DE OIC</div>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-3 my-4 text-xs leading-relaxed text-black text-md">
                    <div className="w-full">
                        <div className="flex justify-center w-full p-3 text-lg bg-red-500">
                            <span><b>Total de UIF:</b></span>&nbsp;&nbsp;TOTAL</div>
                        <Table hoverable className="text-sm">
                            <Table.Head>
                                <Table.HeadCell>
                                    Dependencia
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Total
                                </Table.HeadCell>
                            </Table.Head>
                            <Table.Body className="divide-y">
                                {/*
                                    investigation.map((denuncia, index) => (
                                        <Table.Row className="bg-white" key={index}>

                                            <Table.Cell className="whitespace-nowrap">
                                                {denuncia.dependencia}as
                                            </Table.Cell>
                                            <Table.Cell className='text-center whitespace-nowrap'>
                                                {denuncia.Investigacion}
                                            </Table.Cell>
                                        </Table.Row>
                                    ))
                                    */ }
                            </Table.Body>
                        </Table>
                    </div>
                    <div className="w-full">
                        <div className="flex justify-center w-full p-3 text-lg bg-red-500">
                            <span><b>Total de OIC:</b></span>&nbsp;&nbsp;TOTALOIC
                        </div>
                        <Table hoverable className="text-sm">
                            <Table.Head>
                                <Table.HeadCell>
                                    Dependencia
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Total
                                </Table.HeadCell>
                            </Table.Head>
                            <Table.Body className="divide-y">
                                {/*
                                    investigationoic.map((denuncia, index) => (
                                        <Table.Row className="bg-white" key={index}>

                                            <Table.Cell className="whitespace-nowrap">
                                                {denuncia.dependencia}
                                            </Table.Cell>
                                            <Table.Cell className='text-center whitespace-nowrap'>
                                                {denuncia.Investigacion}
                                            </Table.Cell>
                                        </Table.Row>
                                    ))
                                    */}
                            </Table.Body>
                        </Table>
                    </div>
                </div>
            </div>
        </>
    )
}
