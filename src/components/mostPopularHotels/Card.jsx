import hotelImg from '../../assets/images/hotel.jpg'
import { Icons } from '../../constants/icons/Icons'
import { useVenuesContext } from '../../utils/VenuesContext'
import Loader from '../common/Loader'
import { useState } from 'react'

// Display limited card number of hotels and make it as carousel to display 6-8 hotels spining every 5 seconds

const Card = () => {
  const { venues, loading } = useVenuesContext()
  const [visibleVenues, setVisibleVenues] = useState(4)

  const displayedVenues = venues.slice(0, visibleVenues)
  return (
    <>
      {loading ? (
        <Loader loading={loading} />
      ) : (
        displayedVenues.map((venue) => (
          <div
            key={venue.id}
            className="my-6 max-w-md text-black border border-slate-300 shadow-md mx-auto "
          >
            <div>
              <img
                className="object-cover"
                src={venue.media[0].url}
                alt={hotelImg}
              />
            </div>
            <div className="flex flex-col bg-slate-100 space-y-1 pl-2">
              <div className="flex flex-col">
                <h3 className="text-md font-medium text-lg">{venue.name}</h3>
                <div className="flex items-center space-x-1 ">
                  <Icons.location />
                  <p className="text-slate-700">{venue.location.city}</p>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  )
}

export default Card
