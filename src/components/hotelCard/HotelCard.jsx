import hotelRoom from '../../assets/images/hotelRoom.jpg'
import { Link } from 'react-router-dom'

const HotelCard = ({ venue }) => {
  return (
    <div>
      <div className="grid grid-cols-1 mb-12">
        <div className="max-w-xs flex flex-col mx-auto bg-slate-200 space-y-4 shadow-md rounded-md pb-4">
          <div className="relative">
            <div>
              <img
                className="max-w-xs object-cover rounded-sm shadow-lg"
                src={venue.media[0].url || { hotelRoom }}
                alt="hotel picture"
              />
            </div>
            <div className="w-full absolute bottom-2 text-white">
              <div className="flex justify-around text-sm">
                <p>{venue.meta.wifi && 'Wifi included'}</p>
                <p>{venue.meta.breakfast && 'Breakfast included'}</p>
                <p>{venue.meta.parking && 'Free parking'}</p>
                <p>{venue.meta.pets && 'Pets allowed'}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            <h3 className="text-lg font-semibold text-slate-700">
              {venue.name}
            </h3>
            <p className="text-sm text-slate-700">{venue.description}</p>
          </div>
          <div className="text-center font-medium">
            <h4>
              {venue.location.city} / {venue.location.country}
            </h4>
          </div>
          <div className="flex justify-evenly items-center font-medium">
            <h4>{venue.price} / Night </h4>
            <Link
              to={`/venue/${venue.id}`}
              className="bg-slate-800 px-8 py-1 rounded-md text-gold shadow-md"
            >
              Book now
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HotelCard
