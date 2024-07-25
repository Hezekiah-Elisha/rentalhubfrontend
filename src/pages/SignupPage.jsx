import { Link, useNavigate } from 'react-router-dom'
import { instance } from '../api'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signupStart, signupSuccess, signupFailure } from '../redux/user/userSlice'
import {
  EyeIcon,
  EyeSlashIcon,
} from '@heroicons/react/24/solid'

export default function SignupPage() {
  const [formData, setFormData] = useState({})
  const { loading, error } = useSelector((state) => state.user)
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)


  const handleChange = async (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch(signupStart())
        setHasSubmitted(true)
        try {
            const response = await instance.post(
                '/users/auth/register',
                formData
            )
            dispatch(signupSuccess())
            console.log(response.data)
            navigate('/signin')
        } catch (ee) {
            dispatch(signupFailure(ee.response.data.message))
            console.log(ee.response.data.message)
        }
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <div className='font-poppins flex flex-col-reverse md:flex-row'>
          <div className="p-3 mx-auto md:w-1/2 flex flex-col">
            <h1 className="text-3xl text-center font-semibold my-7 uppercase">Sign Up</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:w-4/5 m-auto">
              <input type="text" onChange={handleChange} placeholder='Full Name' id='name' className="bg-slate-100 p-3 rounded-lg" required />
              <input type="email" placeholder="email" onChange={handleChange} id="email" className="bg-slate-100 p-3 rounded-lg" required />
              <div className='flex flex-row items-center gap-2 w-full'>
                <input onChange={handleChange} type={showPassword ? 'text' : 'password'} placeholder='Password' id='password' className='bg-slate-100 p-3 rounded-lg w-full' required />
                <button type='button' onClick={handleShowPassword}>
                  {showPassword ? <EyeSlashIcon width='24' height='24' /> : <EyeIcon width='24' height='24' />}
                </button>
              </div>              
            <button className="bg-blue-950 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-55">
              { loading ? 'Loading...' : 'Sign Up'}
              </button>
              {error  && hasSubmitted && <p className="text-red-500 mt-5">{error}</p>}
            </form>
            <div className='flex items-center justify-center gap-2 mt-5 text-center'>
              <p>Already have an account?</p>
              <Link to="/signin" className="text-slate-700 font-semibold">
                <span className='text-blue-500'>
                  Signin
                </span>
              </Link>
            </div>
            <p className='text-red-700 mt-5'></p>
          </div>
          <div className='bg-blue-950 h-full md:h-screen md:w-1/2'>
            <div className="w-full text-center flex flex-col justify-center align-middle h-full">
              <div className='p-10 md:p-0'>
                <Link to="/" className='font-ams text-green-500 text-center text-3xl hover:underline'>The Rental Hub</Link>
                <h1 className="text-3xl text-center font-semibold my-7 text-white">Welcome!</h1>
                <p className='text-white text-center md:p-10'>Save your favorite properties and get notified when new ones are available by signing up</p>
              </div>
            </div>
          </div>
        </div>
    
      )
}
