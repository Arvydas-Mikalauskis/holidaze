import { useParams, useLoaderData } from 'react-router-dom'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { venues_URL } from '../../constants/apiEndpoints'
import { Icons } from '../../constants/icons/Icons'

const VenuePage = () => {
  const { id } = useParams()
  const venue = useLoaderData()

  return (
    <section className="container">
      <div className="mt-24">
        <div className="text-2xl text-center my-8 font-semibold">
          <h1>{venue.name}</h1>
        </div>
        <div className="max-w-md mx-auto">
          <img
            src={venue.media[0].url}
            alt="Image of property"
            className="w-full h-full object-cover rounded-md shadow-md border-2 border-slate-200"
          />
        </div>
        <div className="text-center my-8">
          <p>{venue.description}</p>
        </div>
        <div className="text-center my-8">
          <p>
            {venue.location.city} / {venue.location.country}
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-lg font-medium">Amenities</h2>
          <div className="flex space-x-4">
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
