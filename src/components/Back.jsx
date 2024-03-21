import React from 'react'

export default function Back() {
  return (
    <div>
        <Link to="/" className="text-white font-semibold">
          <span className='text-white'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </span>
        </Link>
    </div>
  )
}
