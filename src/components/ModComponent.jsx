import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react'
import Modal from 'react-modal';
import PropTypes from 'prop-types';



ModComponent.propTypes = {
    closeModal: PropTypes.func
}


export default function ModComponent({ closeModal }) {
    const [modalIsOpen, setModalIsOpen] = useState(true)
  return (
    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={{
            overlay: {
                backgroundColor: 'rgba(0, 0, 0, 0.75)'
            },
            content: {
                color: 'green',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '20%',
                height: '25%',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: '10%',
                padding: '20px',
                border: 'none',
                borderRadius: '20px',
                boxShadow: '0px 0px 15px 0px rgba(0,0,0,0.2)',
                textAlign: 'center'
            }
        }
    }>   
        <div className='flex flex-row justify-center align-middle'>
            <CheckCircleIcon className='h-10 w-10 text-green-500'/>
            <h1 className='font-ams'>Success</h1>
        </div>
        <h2>Property Added for review</h2>
        <button onClick={closeModal} className='flex flex-row justify-center align-middle px-4 py-2 rounded-lg bg-green-500 text-blue-950'>
            <XMarkIcon className='h-5 w-5'/>
            <p>Close</p>
        </button>
    </Modal>
  )
}
