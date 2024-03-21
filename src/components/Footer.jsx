import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="font-poppins">
        <div className='bg-gray-200 p-4 text-center'>
            <div>
              &copy; 
              <Link to="/" className="font-ams hover:underline">
                The Rental Hub
              </Link>
            </div>
            <div>
              <p>
                Built with <span className='text-red-500'>&hearts;</span> by <a href='' className='text-blue-500'>Hezekiah Elisha</a>
              </p>
            </div>
        </div>
    </footer>
  )
}
