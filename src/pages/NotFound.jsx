import { ChevronLeftIcon } from "@heroicons/react/24/outline"
import notfound from "../assets/notfound.svg"
import { Link } from 'react-router-dom'


export default function NotFound() {
  return (
    <div className="w-4/5 md:w-1/3 mx-auto">
        <h1 className='text-4xl font-bold text-center mt-10'>Oops!, That is our Fault</h1>
        <img src={notfound} alt="404 Not Found" className='mx-auto'/>
        <Link to='/' className="flex flex-row justify-center align-baseline p-10 hover:animate-pulse">
            <ChevronLeftIcon className='h-12 w-12 inline-block mx-auto align-baseline'/>
            <h1 className='text-4xl font-bold text-center underline'>Go back to Home</h1>
        </Link>
    </div>
  )
}
