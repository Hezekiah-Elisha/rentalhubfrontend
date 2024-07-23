import { 
  MagnifyingGlassIcon, BellIcon
} from '@heroicons/react/24/solid'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/user/userSlice'
import { instance } from '../api'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export default function Header() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { currentUser } = useSelector((state) => state.user)

  useEffect(() => {
    if (!currentUser) {
      navigate('/')
    }
  }, [currentUser, navigate])

  const handleLogout = async () => {
    const config = {
      headers: {
        'Authorization': `Bearer ${currentUser.access_token}`,
      },
    };
  
    try {
      await instance.delete('/logout', config);
      dispatch(logout());
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };
  
  return (
    <div>
      <header className='flex flex-row justify-between items-center w-full p-4 bg-blue-950 text-white border-b-2 border-gray-400 fixed z-20 shadow-xl'>
        <div className='flex flex-row gap-32 w-full'>
          <h1 className='text-2xl font-semibold'>Dashboard</h1>
          <form action="" className='w-1/2'>
            <div className="relative flex items-center text-white focus-within:text-white gap-2 w-full">
              <MagnifyingGlassIcon className="absolute ml-3 h-5 w-5" />
              <input
                type="text"
                placeholder="Search"
                className="bg-slate-100/25 rounded-lg pl-10 p-2 w-1/2 placeholder:text-white focus:outline-none focus:ring-2 focus:ring-grey-500"
                required
              />
            </div>
          </form>
        </div>
        <div className='flex flex-row gap-4'>
          <BellIcon className='size-6 text-white' />
          <p>Profile</p>
          <p onClick={handleLogout} className='cursor-pointer'>Logout</p>
        </div>
      </header>
    </div>
  )
}
