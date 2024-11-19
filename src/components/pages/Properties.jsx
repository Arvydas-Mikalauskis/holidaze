import { ManagerPromo, HotelCard } from '../components'
import { useState } from 'react'
import Loader from '../common/Loader'
import { useVenuesContext } from '../../utils/VenuesContext'

const Properties = () => {
  const { venues, loading } = useVenuesContext()

  const [visibleVenues, setVisibleVenues] = useState(8)

  const displayedVenues = venues.slice(0, visibleVenues)

  return (
    <section className="container-xl">
      <ManagerPromo />
      <div className="font-bold text-xl text-center text-slate-800 mb-12">
        <h1>
          Discover a wide selection and find the perfect match for your holiday
          destination
        </h1>
      </div>
      <div className="pl-8 mt-16 mb-6 font-medium text-lg italic text-slate-700">
        <h2>Explore our available residencies:</h2>
      </div>
      <div className=" grid grid-cols-1 sm:grid-col-2 gap-3 my-12 px-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {loading ? (
          <Loader loading={loading} />
        ) : (
          displayedVenues.map((venue) => (
            <HotelCard key={venue.id} venue={venue} />
          ))
        )}
      </div>
    </section>
  )
}

export default Properties
