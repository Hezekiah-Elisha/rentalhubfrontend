import HomeTop from "../components/HomeTop"
import PropertyTile from "./PropertyTile"

export default function HomePage() {
  return (
    <div className="font-poppins">
        <HomeTop />
        <div className='grid grid-cols-1 sm:grid-col-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 mt-10 items-center'>
          <PropertyTile />
          <PropertyTile />
          <PropertyTile />
          <PropertyTile />
          <PropertyTile />
        </div>
    </div>
  )
}
