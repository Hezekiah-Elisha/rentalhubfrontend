import React from 'react'
import {Link, useParams} from "react-router-dom";
import house from "../assets/house.jpg"
import bed from "../assets/bed.svg"
import bathtub from "../assets/bathtub.svg"
import { ChevronDoubleRightIcon, PhoneIcon, UserIcon } from '@heroicons/react/24/outline';

export default function PropertyPage() {
    const {id} = useParams()
  return (
    <div className='font-poppins'>
        <div className='px-10 py-4'>
            <Link to='/' className='hover:underline'>Home</Link>
            <ChevronDoubleRightIcon className='h-4 w-4 inline-block'/>
            <Link to='/' className='hover:underline'>Properties</Link>
            <ChevronDoubleRightIcon className='h-4 w-4 inline-block'/>{id}
        </div>
        <div className='flex flex-col md:flex-col lg:flex-row p-2 lg:px-10'>
            <div className='w-full md:w-full lg:w-1/2'>
                <img src={house} alt="" className='rounded-lg shadow-lg object-contain w-full'  />
            </div>
            <div className='px-4 py-8 flex flex-col gap-2 w-1/2'>
                <h1 className='text-3xl font-bold font-poppins'>Ruiru Appartments</h1>
                <p className='text-lg font-poppins'>Kes. 10,000</p>
                <p className='text-xl font-poppins'>Ruiru, Kiambu</p>
                <p className='font-poppins font-thin text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                <div className='flex flex-row gap-2'>
                    <div className='flex flex-row'>
                        <img src={bed} alt="" className='h-6 w-6'/>
                        <p className='font-poppins font-extralight text-sm'>3 Bedrooms</p>
                    </div>
                    <div className='flex flex-row'>
                        <img src={bathtub} alt="" className='h-6 w-6'/>
                        <p className='text-sm font-poppins font-extralight'>2 Bathrooms</p>
                    </div>
                </div>
                <div className='flex flex-row justify-between'>
                    <div className='flex flex-row gap-4'>
                        <UserIcon className='h-6 w-6 inline-block'/>
                        <p className='text-xl font-bold font-poppins'>John Doe</p>
                    </div>
                    <div className='flex flex-row gap-4'>
                        <PhoneIcon className='h-6 w-6 inline-block'/>
                        <p className='text-xl font-bold font-poppins'>0711223344</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='p-10 md:px-20 flex flex-col md:flex-row gap-2'>
            <div className='w-full md:w-4/5'>                
                <h1 className='text-blue-950 text-3xl font-bold md:p-2 font-poppins'>Description</h1>
                <p className='md:p-4 font-poppins'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore consequatur molestias ad deserunt ipsam veritatis eaque, eveniet animi tenetur. Odio, aut est amet ducimus eaque non dolorum tempora quis animi?
                </p>
            </div>
            <div className='w-full md:w-1/5 flex flex-col gap-4'>
                <div>
                    <h2 className='text-blue-950 font-bold text-xl py-4'>Amazing Features the House has</h2>
                    <ul>
                        <li>Swimming Pool</li>
                        <li>24/7 Security</li>
                        <li>Wi-Fi</li>
                        <li>Water and Electricity</li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-blue-950 font-bold text-xl'>Tags</h3>
                    <div className="flex flex-row gap-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">latest</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">new</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
