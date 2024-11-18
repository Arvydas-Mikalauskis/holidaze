import Dubai from '../../assets/images/cities/dubai.jpg'
import Japan from '../../assets/images/cities/japan.jpg'
import LosAngeles from '../../assets/images/cities/la.jpg'
import Thailand from '../../assets/images/cities/thai.jpg'

import { useMediaQuery } from 'react-responsive'
import Slider from 'react-slick'

const DiscoverDestinations = () => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 720px)' })

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const destinations = [
    {
      id: 1,
      name: 'Japan',
      img: Japan,
    },
    {
      id: 2,
      name: 'Thailand',
      img: Thailand,
    },
    {
      id: 3,
      name: 'Los Angeles',
      img: LosAngeles,
    },
    {
      id: 4,
      name: 'Dubai',
      img: Dubai,
    },
  ]

  return (
    <section className="container w-full mt-24 mx-auto overflow-hidden">
      <div className=" flex flex-col items-center justify-center mx-auto h-24 space-y-4">
        <div className="border-y-4 border-gold px-4">
          <h3 className="font-semibold text-3xl md:text-4xl text-center text-gold">
            Top Destinations You’ll Love
          </h3>
        </div>
        <div className="text-center text-slate-700 font-semibold italic lg:text-lg">
          <p>
            Embark on an unforgettable journey, experience unique cultures, and
            create memories that last a lifetime.
          </p>
        </div>
      </div>
      {isSmallScreen ? (
        <Slider {...settings}>
          {destinations.map((destination) => (
            <div key={destination.id} className="px-2 mx-auto">
              <div className="mx-auto max-w-md h-1/2">
                <div className="relative mt-20 h-[420px] group cursor-pointer">
                  <img
                    className="featuredDestinations_img"
                    src={destination.img}
                    alt="Japan"
                  />
                  <div className="featuredDestinations_img_overlay"></div>
                  <div className="featuredDestinations_overlayText_position">
                    <h4 className="featuredDestinations_overlayText">
                      {destination.name}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <div className=" grid grid-cols-4 items-center justify-center mx-auto max-w-7xl h-screen space-x-3">
          <div className="relative mt-20 md:h-[580px] h-[480px] group cursor-pointer">
            <img className="featuredDestinations_img" src={Japan} alt="Japan" />
            <div className="featuredDestinations_img_overlay"></div>
            <div className="featuredDestinations_overlayText_position">
              <h4 className="featuredDestinations_overlayText">Japan</h4>
            </div>
          </div>
          <div className="relative md:h-[580px] h-[480px] group cursor-pointer">
            <img
              className="featuredDestinations_img"
              src={Thailand}
              alt="Thailand"
            />
            <div className="featuredDestinations_img_overlay"></div>
            <div className="featuredDestinations_overlayText_position">
              <h4 className="featuredDestinations_overlayText">Thailand</h4>
            </div>
          </div>
          <div className="relative mt-20 md:h-[580px] h-[480px] group cursor-pointer">
            <img
              className="featuredDestinations_img"
              src={LosAngeles}
              alt="Los Angeles"
            />
            <div className="featuredDestinations_img_overlay"></div>
            <div className="featuredDestinations_overlayText_position">
              <h4 className="featuredDestinations_overlayText">Los Angeles</h4>
            </div>
          </div>
          <div className="relative md:h-[580px] h-[480px] group cursor-pointer">
            <img className="featuredDestinations_img" src={Dubai} alt="Dubai" />
            <div className="featuredDestinations_img_overlay"></div>
            <div className="featuredDestinations_overlayText_position">
              <h4 className="featuredDestinations_overlayText">Dubai</h4>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default DiscoverDestinations
