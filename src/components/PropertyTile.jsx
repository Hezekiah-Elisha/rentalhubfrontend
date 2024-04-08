import { BanknotesIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

PropertyTile.propTypes = {
  id : PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.number,
  location: PropTypes.string,
  image: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string)
}

export default function PropertyTile({
  id= null,
  name = 'Property Name',
  price = 10000,
  location = 'Ruiru, Kiambu',
  image = 'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg',
  tags = ['latest', 'new']
}) {
  return (
    <Link to={`/property/${id}`} className='hover:shadow-lg mx-auto' >
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={image} alt="Sunset in the mountains"/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <div className='flex flex-row justify-between'>
                  <BanknotesIcon className='h-6 w-6 inline-block'/>
                  <span className="text-gray-700 text-base">Kes. {price}</span>
                </div>
                <div className="flex flex-row text-gray-700 text-base">
                    <MapPinIcon className='h-6 w-6 inline-block'/>
                    <p>{location}</p>
                </div>
            </div>
            <div className="px-6 py-4">
                {tags.map((tag, index) => (
                    <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{tag}</span>
                ))}
            </div>
        </div>
    </Link>
  )
}
