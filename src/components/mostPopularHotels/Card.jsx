import hotelImg from '../../assets/images/hotel.jpg'
import { Icons } from '../../constants/icons/Icons'
import { useVenuesContext } from '../../utils/VenuesContext'
import Loader from '../common/Loader'
import { useState } from 'react'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

const Card = () => {
  const { venues, loading } = useVenuesContext()
  const [visibleVenues, setVisibleVenues] = useState(6)

  /* Carousel settings */

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 13000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 490,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const displayedVenues = venues.slice(0, visibleVenues)
  return (
    <>
      {loading ? (
        <Loader loading={loading} />
      ) : (
        <Slider {...settings} className="relative px-4">
          {displayedVenues.map((venue) => (
            <div
              key={venue.id}
              className="flex flex-col gap-2 h-[380px] text-black border border-slate-300 rounded-md overflow-hidden "
            >
              <div className="h-full">
                <img
                  className="object-cover w-full h-full"
                  src={venue.media[0].url}
                  alt={hotelImg}
                />
              </div>
              <div className="absolute bottom-1 w-full py-2 px-4 text-black bg-gold bg-opacity-15 overflow-x-hiddenidden">
                <div className="flex flex-col">
                  <h3 className="text-sm font-semibold">{venue.name}</h3>
                  <div className="flex items-center space-x-2 ">
                    <Icons.location />
                    <p className="">{venue.location.city}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </>
  )
}

export default Card
