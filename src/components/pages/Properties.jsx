import { ManagerPromo, HotelCard } from '../components'
import { useEffect, useState } from 'react'
import Loader from '../common/Loader'
import { useVenuesContext } from '../../utils/VenuesContext'

const Properties = () => {
  const { venues, loading } = useVenuesContext()

  const [visibleVenues, setVisibleVenues] = useState(4)

  const displayedVenues = venues.slice(0, visibleVenues)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight
      const documentHeight = document.documentElement.scrollHeight

      if (scrollTop + windowHeight >= documentHeight - 300) {
        setVisibleVenues((prev) => prev + 4)
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.venue-card').forEach((card) => {
      observer.observe(card)
    })

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [displayedVenues])

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
      <div className="venue-animation grid grid-cols-1 sm:grid-col-2 gap-3 my-12 px-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
