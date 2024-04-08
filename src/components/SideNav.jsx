// import React from 'react'
import { ArrowRightCircleIcon, CogIcon, UserIcon, HomeModernIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'

export default function SideNav() {
  return (
    <nav className='w-1/6 bg-blue-950 font-poppins h-full'>
      <div className="flex flex-col h-full overflow-scroll w-full">
          <a href="/dashboard" className="text-white p-3 hover:bg-green-500">Dashboard</a>
          <Link to="/dashboard/profile" className="text-white flex flex-row gap-2 p-3 hover:bg-green-500">
            <UserIcon className="h-5 w-5"/>
            <p>
              Profile
            </p>
          </Link> 
          <Link to="/dashboard/transactions" className="text-white flex flex-row gap-2 p-3 hover:bg-green-500">
            <ArrowRightCircleIcon className="h-5 w-5"/>
            <p>
              Transactions
            </p>
          </Link>
          <Link to="/dashboard/settings" className="text-white flex flex-row gap-2 p-3 hover:bg-green-500">
            <CogIcon className="h-5 w-5"/>
            <p>
              Settings
            </p>
          </Link>
          <Link to="/dashboard/postproperty" className="text-white flex flex-row gap-2 p-3 hover:bg-green-500">
            <HomeModernIcon className="h-5 w-5"/>
            <p>
              Post Property
            </p>
          </Link>
        
      </div>
    </nav>
  )
}
