import React, { useState } from 'react'
import { Modal } from 'flowbite-react';
import { useUiStore } from '../../hooks/useUiStore';

export const PopUpPwd = ({ title, size = '5xl', children }) => {
  const { modalpwd, onModalPwd } = useUiStore()
  return (
    <>
        <Modal show={modalpwd === 'default'} size={size} onClose={() => onModalPwd(undefined)}>
        <Modal.Header>{ title }</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            { children }
          </div>
        </Modal.Body>
        <Modal.Footer>
         
        </Modal.Footer>
      </Modal>
    </>
  )
}
