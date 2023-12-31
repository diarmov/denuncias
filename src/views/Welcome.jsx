import React, { useEffect } from 'react'

const Welcome = ({ onSetSelectedLink, link }) => {
  useEffect(() => {
    onSetSelectedLink(link)
  },[])

  return (
    <div className='flex flex-col justify-center items-center mt-16 px-10'>
      <p className='font-bold text-4xl md:text-6xl text-gray-800'>Bienvenido</p>
      <p className='font-semibold mt-4 text-1xl md:text-3xl text-gray-700'>Sistema de Seguimiento de Denuncias</p>
      <img src="../img/logo.png" alt=""  className='w-64 md:w-3/4 mt-10'/>
    </div>
  )
}

export default Welcome
