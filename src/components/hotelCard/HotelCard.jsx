import hotelRoom from '../../assets/images/hotelRoom.jpg'
import { Link } from 'react-router-dom'
import { Icons } from '../../constants/icons/Icons'

const HotelCard = ({ venue }) => {
  return (
    <div className="max-w-sm flex flex-col mx-auto bg-slate-200 space-y-4 shadow-lg rounded-md pb-4 mb-6 border-2 border-slate-200">
      <div className="relative">
        <div>
          <img
            className="w-full h-[240px] object-cover rounded-md shadow-lg"
            src={venue.media[0].url || { hotelRoom }}
            alt="hotel picture"
          />
        </div>
      </div>
      <div className="flex flex-col items-center text-center">
        <h3 className="text-lg font-semibold text-slate-700">{venue.name}</h3>
        <p className="text-sm text-slate-700">{venue.description}</p>
      </div>
      <div className="text-center font-medium">
        <h4>
          {venue.location.city} / {venue.location.country}
        </h4>
      </div>
      <div>
        <div>
          <h4 className="text-center font-medium">Amenities</h4>
        </div>
        <div className="flex items-center justify-center space-x-4 py-2">
          {venue.meta.wifi && (
            <div>
              <Icons.wifi />
            </div>
          )}
          {venue.meta.breakfast && (
            <div>
              <Icons.breakfast />
            </div>
          )}
          {venue.meta.parking && (
            <div>
              <Icons.parking />
            </div>
          )}
          {venue.meta.pets && (
            <div>
              <Icons.pets />
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-evenly items-center font-medium">
        <h4>{venue.price}$ / Night </h4>
        <Link
          to={`/venue/${venue.id}`}
          className="bg-slate-800 px-8 py-1 rounded-md text-gold shadow-md"
        >
          Book now
        </Link>
      </div>
    </div>
  )
}

export default HotelCard
