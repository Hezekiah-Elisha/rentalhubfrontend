// import React from 'react'

export default function SideNav() {
  return (
    <nav className='w-1/4 bg-blue-950 font-poppins h-screen'>
      <div className="flex flex-col text-left justify-center">
        <a href="/dashboard" className="text-white p- hover:bg-green-500">Dashboard</a>
        <a href="/dashboard/profile" className="text-white p- hover:bg-green-500">Profile</a>
        <a href="/dashboard/settings" className="text-white p- hover:bg-green-500">Settings</a>
        <a href="/dashboard/logout" className="text-white p- hover:bg-green-500">Logout</a>
      </div>
    </nav>
  )
}
