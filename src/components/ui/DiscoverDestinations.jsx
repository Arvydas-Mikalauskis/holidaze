import Dubai from '../../assets/images/cities/dubai.jpg'
import Japan from '../../assets/images/cities/japan.jpg'
import LosAngeles from '../../assets/images/cities/la.jpg'
import Thailand from '../../assets/images/cities/thai.jpg'

const DiscoverDestinations = () => {
  return (
    <section className="w-full mt-24">
      <div className="container flex flex-col items-center justify-center mx-auto h-24 space-y-4">
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
      <div className="container grid grid-cols-4 items-center justify-center mx-auto max-w-7xl h-screen space-x-3">
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
