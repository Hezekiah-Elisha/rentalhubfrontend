import { Link } from 'react-router-dom'

export default function SignupPage() {
    return (
        <div className='font-poppins flex flex-col-reverse md:flex-row'>
          <div className="p-3 mx-auto md:w-1/2 flex flex-col">
            <h1 className="text-3xl text-center font-semibold my-7 uppercase">Sign Up</h1>
            <form className="flex flex-col gap-4 md:w-4/5 m-auto">
              <input type="text" placeholder='Full Name' className="bg-slate-100 p-3 rounded-lg" />
              <input type="email" placeholder="email" id="email" className="bg-slate-100 p-3 rounded-lg" />
              <input type="password" placeholder="Password" id="password" className="bg-slate-100 p-3 rounded-lg" />
              <button className="bg-blue-950 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-55">
                Sign Up
              </button>
            </form>
            <div className='flex items-center justify-center gap-2 mt-5 text-center'>
              <p>Already have an account?</p>
              <Link to="/signin" className="text-slate-700 font-semibold">
                <span className='text-blue-500'>
                  Sign In
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
