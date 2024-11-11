import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { addVenueSchema } from './addVenueSchema'
import { useState } from 'react'
import { createVenue_URL } from '../../constants/apiEndpoints'

const AddVenueForm = () => {
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(addVenueSchema),
  })

  const onSubmit = async (data) => {
    try {
      const response = await fetch(createVenue_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
          'X-Noroff-Api-Key': import.meta.env.VITE_API_KEY,
        },
        body: JSON.stringify(data),
      })
      if (!response.ok) {
        throw new Error('Failed to submit form for venue')
      }
      setSuccess('Venue added successfully')
      console.log('Venue added successfully', response)
    } catch (error) {
      setError('Failed to add venue', error.message)
      console.error(error)
    }
  } //  move this to addVenue tomorrow

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('name')}
        placeholder="Name"
        className="formInput_field"
      />
      {errors.name && <p>{errors.name.message}</p>}

      <textarea
        {...register('description')}
        placeholder="Description"
        className="formInput_field"
      />
      {errors.description && <p>{errors.description.message}</p>}

      <input
        {...register('price', { valueAsNumber: true })}
        type="number"
        placeholder="Price"
        className="formInput_field"
      />
      {errors.price && <p>{errors.price.message}</p>}

      <input
        {...register('maxGuests', { valueAsNumber: true })}
        type="number"
        placeholder="Max guests"
        className="formInput_field"
      />
      {errors.maxGuests && <p>{errors.maxGuests.message}</p>}

      <input
        {...register('media.0.url')}
        placeholder="Hotel image URL"
        className="formInput_field"
      />
      {errors.media?.[0]?.url && <p>{errors.media[0].url.message}</p>}

      <label>
        <input {...register('meta.wifi')} type="checkbox" />
        WiFi
      </label>
      <label>
        <input {...register('meta.parking')} type="checkbox" />
        Parking
      </label>
      <label>
        <input {...register('meta.breakfast')} type="checkbox" />
        Breakfast
      </label>
      <label>
        <input {...register('meta.pets')} type="checkbox" />
        Pets
      </label>

      <input
        {...register('location.city')}
        placeholder="City"
        className="formInput_field"
      />
      <input
        {...register('location.country')}
        placeholder="Country"
        className="formInput_field"
      />

      <button type="submit" className="p-3 bg-blue-500">
        Add venue
      </button>

      {success && <p>{success}</p>}
      {error && <p>{error}</p>}
    </form>
  )
}

export default AddVenueForm
