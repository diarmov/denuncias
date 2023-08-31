import React, { useState } from 'react'
import { Modal } from 'flowbite-react';
import { useUiStore } from '../../hooks/useUiStore';

export const PopUp = ({ title, children }) => {
  const { modal, onModal } = useUiStore()
  return (
    <>
        <Modal show={modal === 'default'} size='5xl' onClose={() => onModal(undefined)}>
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
