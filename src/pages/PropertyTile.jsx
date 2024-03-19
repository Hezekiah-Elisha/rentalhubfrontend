import { BanknotesIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

export default function PropertyTile() {
  return (
    <Link to='/property/1' className='hover:shadow-lg mx-auto'>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg" alt="Sunset in the mountains"/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Ruiru Appartments</div>
                <div className='flex flex-row justify-between'>
                  <BanknotesIcon className='h-6 w-6 inline-block'/>
                  <span className="text-gray-700 text-base">Kes. 10,000</span>
                </div>
                <div className="flex flex-row text-gray-700 text-base">
                    <MapPinIcon className='h-6 w-6 inline-block'/>
                    <p>Ruiru, Kiambu</p>
                </div>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">latest</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">new</span>
            </div>
        </div>
    </Link>
  )
}
