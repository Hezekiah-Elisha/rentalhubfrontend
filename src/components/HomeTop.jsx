// import React from 'react'
import houseimage from '../assets/bgbg.jpg'
import InputFile from './InputFile'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export default function HomeTop() {
    const options = ['Apartment', 'Bungalow', 'Mansion', 'Flat', 'Studio']
  return (
    <section className="bg-fixed bg-center bg-cover h-screen md:h-96 lg:h-72" style={{backgroundImage: `url(${houseimage})`}}>
            <div className="h-full bg-opacity-50 bg-black flex items-center justify-center flex-col backdrop:blur-3xl">
                <div className="text-2xl md:text-4xl font-bold text-center text-white">
                    <span>
                        Welcome to
                    </span>
                    <span className='font-ams text-green-700'>
                        The Rental Hub
                    </span>

                </div>
                <div className="flex flex-col lg:flex-row justify-center mt-10 rounded-3xl lg:rounded-full bg-green-500 w-1/2 p-2">
                    <input type="text" className='w-full lg:w-1/5 p-2 text-blue-950 placeholder:text-gray-800 text-lg bg-inherit outline-none' placeholder='Where?' min={0} max={10} />
                    <InputFile title='House Type' options={options} />
                    <input type="number" className='w-full lg:w-1/5 p-2 text-blue-950 placeholder:text-gray-800 text-lg bg-inherit outline-none' placeholder='Min Rent' min={0} max={100000} />
                    <input type="number" className='w-full lg:w-1/5 p-2 text-blue-950 placeholder:text-gray-800 text-lg bg-inherit outline-none' placeholder='Max Rent' min={0} max={100000} />
                    <div className='flex flex-row justify-center items-center bg-blue-950 rounded-full'>
                        <MagnifyingGlassIcon className='h-10 text-green-700 w-10 rounded-full p-2 cursor-pointer' />
                        <button className='text-white p-2 rounded-full text-lg font-bold'>Search</button>
                    </div>
                </div>
            </div>
    </section>
  )
}
