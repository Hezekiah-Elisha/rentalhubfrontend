import React, { useState } from 'react'
import Modal from 'react-modal';
import { XMarkIcon, CheckCircleIcon } from '@heroicons/react/24/solid';

export default function PostPropertyPage() {
    const [modalIsOpen, setModalIsOpen] = useState(false);


  return (
    <div className='font-poppins w-5/6 px-10'>
        <h1 className='text-3xl text-center'>Post Property</h1>
        {/* form goes here */}
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
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
              }}
        >   
            <div className='flex flex-row justify-center align-middle'>
                <CheckCircleIcon className='h-10 w-10 text-green-500'/>
                <h1 className='font-ams'>Success</h1>
            </div>
            <h2>Property Added for review</h2>
            <button onClick={() => setModalIsOpen(false)} className='flex flex-row justify-center align-middle px-4 py-2 rounded-lg bg-green-500 text-blue-950'>
                <XMarkIcon className='h-5 w-5'/>
                <p>Close</p>
            </button>

        </Modal>
        <div className='flex flex-col gap-4 w-1/2'>
            <div className='flex flex-col gap-2'>
                <label htmlFor='title' className='text-2xl'>Title</label>
                <input type='text' name='title' id='title' className='p-2 border border-none rounded-md bg-slate-200 focus:outline-none' placeholder='Title here...'/>
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor='description' className=' text-2xl'>Description</label>
                <textarea name='description' id='description' className='p-2 border border-none rounded-md bg-slate-200 focus:outline-none' placeholder='Description...'></textarea>
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor='price' className=' text-2xl'>Features</label>
                <textarea name='features' id='features' className='p-2 border border-none rounded-md bg-slate-200 focus:outline-none' placeholder='Features here'></textarea>
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor='price' className=' text-2xl'>Price</label>
                <input type='number' name='price' id='price' className='p-2 border border-none rounded-md bg-slate-200 focus:outline-none' placeholder='How much is a unit'/>
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor='location' className=' text-2xl'>Location</label>
                <input type='text' name='location' id='location' className='p-2 border border-none rounded-md bg-slate-200 focus:outline-none' placeholder='Where is it?'/>
            </div>
            <div className='flex flex-col gap-2'>
                <label htmlFor='image' className=' text-2xl'>Image</label>
                <input type='file' name='image' id='image' className='p-2 border border-none rounded-md bg-slate-200 focus:outline-none'/>
            </div>
            <div className='flex flex-col gap-2'>
                <button className='bg-blue-950 text-white p-2 rounded-md'onClick={() => setModalIsOpen(true)} >Place for review</button>
            </div>
        </div>
    </div>
  )
}
