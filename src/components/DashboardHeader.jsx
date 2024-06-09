import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function DashboardHeader() {
  const {currentUser} = useSelector((state) => state.user)

  const user = currentUser.user

  return (
    <nav className='w-full bg-blue-950 font-poppins'>
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-green-500 text-2xl font-bold font-ams hover:underline">The Rental Hub</Link>
          <a href="/dashboard" className="text-white">Dashboard</a>
        </div>
        <div className="flex items-center space-x-4">
          <a href="/dashboard/profile" className="text-white capitalize">Hi, {user.name}</a>
          <a href="/dashboard/settings" className="text-white">Settings</a>
          <a href="/dashboard/logout" className="text-white">Logout</a>
        </div>
      </div>
    </nav>
  )
}
