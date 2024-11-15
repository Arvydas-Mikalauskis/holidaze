import { ManagerPromo, HotelCard } from '../components'
import { allVenues } from '../../constants/apiEndpoints'
import { useEffect, useState } from 'react'
import Loader from '../common/Loader'
import { useAuth } from '../../utils/AuthProvider'

const Properties = () => {
  const [venues, setVenues] = useState([])
  const [visibleVenues, setVisibleVenues] = useState(11)
  const [loading, setLoading] = useState(true)

  const { token } = useAuth()

  const displayedVenues = venues.slice(0, visibleVenues)

  /* ?sort=created&limit=50&page=1 */

  useEffect(() => {
    const fetchVenues = async () => {
      try {
        const response = await fetch(allVenues, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
            'X-Noroff-Api-Key': import.meta.env.VITE_API_KEY,
          },
        })
        const data = await response.json()
        console.log(data)
        setVenues(data.data)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    fetchVenues()
  }, [setVenues, token])

  return (
    <section className="container">
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
      {loading ? (
        <Loader loading={loading} />
      ) : (
        displayedVenues.map((venue) => (
          <HotelCard key={venue.id} venue={venue} />
        ))
      )}
    </section>
  )
}

export default Properties
