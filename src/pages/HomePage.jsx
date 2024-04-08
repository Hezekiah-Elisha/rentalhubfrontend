import HomeTop from "../components/HomeTop"
import PropertyTile from "../components/PropertyTile"
import { instance } from "../api"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { getPropertiesFailure, getPropertiesStart, getPropertiesSuccess } from "../redux/properties/propertySlice"

// in a function convert a string with words seperate by commas to an array of words
const stringToArray = (string) => {
  return string.split(',')
}

export default function HomePage() {
  const { loading, error, properties } = useSelector((state) => state.properties) || {};
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getPropertiesStart())
    instance.get('/properties')
      .then((response) => {
        dispatch(getPropertiesSuccess(response.data.properties))
        // console.log(response.data.properties)
      })
      .catch((err) => {
        dispatch(getPropertiesFailure(err.message))
      })
  }, [dispatch]);


  return (
    <div className="font-poppins">
        <HomeTop />
        <div className='grid grid-cols-1 sm:grid-col-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 mt-10 items-center'>
          {loading && <p>Loading...</p>}
          {error && <p>{error.message}</p>}
          {properties && properties.map(property => (
            <PropertyTile 
              key={property.id} 
              id={property.id} 
              name={property.name} 
              price={property.price} 
              location={property.location} 
              image={`http://localhost:3000/${property.image}`} 
              tags={stringToArray(property.tags)}
             />
          ))}

          {/* <PropertyTile />
          <PropertyTile />
          <PropertyTile />
          <PropertyTile />
          <PropertyTile /> */}
        </div>
    </div>
  )
}
