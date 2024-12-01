import { useParams, useLoaderData } from 'react-router-dom'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { venues_URL, bookVenue_URL } from '../../constants/apiEndpoints'
import { Icons } from '../../constants/icons/Icons'
import { useAuth } from '../../utils/AuthProvider'

const VenuePage = () => {
  const { id } = useParams()
  const venue = useLoaderData()
  const { token } = useAuth()

  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  const handleBooking = async () => {
    if (startDate && endDate) {
      const response = await fetch(`${bookVenue_URL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
          'X-Noroff-Api-Key': import.meta.env.VITE_API_KEY,
        },
        body: JSON.stringify({
          dateFrom: startDate,
          dateTo: endDate,
          venueId: id,
          guests: 1,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to book venue')
      } else {
        console.log('Venue booked successfully', response)
      }
    }
  }

  return (
    <section className="container">
      <div className="mt-24">
        <div className="text-2xl text-center my-8 font-semibold">
          <h1>{venue.name}</h1>
        </div>
        <div className="max-w-sm mx-auto">
          <img
            src={venue.media[0].url}
            alt="Image of property"
            className="w-full h-auto object-cover rounded-md shadow-md border-2 border-slate-200"
          />
        </div>
        <div className="text-center text-lg italic my-8 space-y-2">
          <h2 className="font-medium">About Hotel</h2>
          <p>{venue.description}</p>
        </div>
        <div className="text-center text-lg italic my-8 space-y-2">
          <h2 className="font-medium">Location</h2>
          <p>
            {venue.location.city} / {venue.location.country}
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-lg font-medium mb-1">Amenities</h2>
          <div className="flex space-x-4 text-lg">
            <div className="flex items-center space-x-2">
              <Icons.wifi />
              <p>{venue.meta.wifi && 'Wifi included'}</p>
            </div>
            <div className="flex items-center space-x-2">
              <Icons.breakfast />
              <p>{venue.meta.breakfast && 'Breakfast included'}</p>
            </div>
            <div className="flex items-center space-x-2">
              <Icons.parking />
              <p>{venue.meta.parking && 'Free parking'}</p>
            </div>
            <div className="flex items-center space-x-2">
              <Icons.pets />
              <p>{venue.meta.pets && 'Pets allowed'}</p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col mt-12">
          <h4 className="text-lg text-center font-medium mb-2 ">
            Availability
          </h4>
          <div className="flex mt-4">
            <DatePicker
              selected={startDate}
              onChange={(dates) => {
                const [start, end] = dates
                setStartDate(start)
                setEndDate(end)
              }}
              selectsRange
              startDate={startDate}
              endDate={endDate}
              placeholderText="Start date & end date"
              inline
            />
          </div>
          <button
            className="w-1/2 mx-auto my-12 bg-green-700 px-2 py-2 rounded-md shadow-md text-white font-semibold hover:bg-green-600 transition duration-300 ease-in-out"
            onClick={handleBooking}
          >
            Book Now
          </button>
        </div>
      </div>
    </section>
  )
}

const venueLoader = async ({ params }) => {
  const response = await fetch(`${venues_URL}/${params.id}`)
  const data = await response.json()
  return data.data
}

export { VenuePage as default, venueLoader }
