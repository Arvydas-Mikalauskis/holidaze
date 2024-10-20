import Dubai from '../../assets/images/cities/dubai.jpg'
import Japan from '../../assets/images/cities/japan.jpg'
import LosAngeles from '../../assets/images/cities/la.jpg'
import Thailand from '../../assets/images/cities/thai.jpg'

const DiscoverDestinations = () => {
  return (
    <section className="mt-24">
      <div className="flex justify-evenly items-center h-12">
        <div>
          <h3 className="font-semibold text-4xl text-center text-gold">
            Top Destinations You’ll Love
          </h3>
        </div>
        <div className="max-w-lg italic">
          <p>
            Embark on an unforgettable journey, experience unique cultures, and
            create memories that last a lifetime.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-4 items-center justify-center mx-auto max-w-7xl h-screen space-x-3">
        <div className="relative mt-20 h-[580px] group cursor-pointer">
          <img className="featuredDestinations_img" src={Japan} alt="Japan" />
          <div className="featuredDestinations_img_overlay"></div>
          <div className="featuredDestinations_overlayText_position">
            <h4 className="featuredDestinations_overlayText">Japan</h4>
          </div>
        </div>
        <div className="relative h-[580px] group cursor-pointer">
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
        <div className="relative mt-20 h-[580px] group cursor-pointer">
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
        <div className="relative h-[580px] group cursor-pointer">
          <img className="featuredDestinations_img" src={Dubai} alt="Dubai" />
          <div className="featuredDestinations_img_overlay"></div>
          <div className="featuredDestinations_overlayText_position">
            <h4 className="featuredDestinations_overlayText">Dubai</h4>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DiscoverDestinations
