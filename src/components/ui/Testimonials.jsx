import { Icons } from '../../constants/icons/Icons'
import profile1 from '../../assets/images/testimonials/profile-1.jpg'
import profile2 from '../../assets/images/testimonials/profile-2.jpg'
import profile3 from '../../assets/images/testimonials/profile-3.jpg'

const Testimonials = () => {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-6 pt-32 md:pt-24 pb-80 md:pb-96">
        <div className="flex flex-col items-center justify-center mx-auto h-24 space-y-4">
          <div className="border-y-4 border-gold px-4">
            <h2 className="font-semibold text-3xl md:text-4xl text-center text-gold">
              Customer reviews
            </h2>
          </div>
          <div className="text-center text-slate-700 font-semibold italic lg:text-lg">
            <p>
              What our customers are saying about their Holidaze experiences.
            </p>
          </div>
        </div>
        <div className="relative flex flex-col w-full space-y-6 lg:flex-row md:space-y-4 md:space-x-12 mt-12 md:mt-20">
          <Icons.quotes className="absolute h-12 text-gold right-1 -top-4 md:-top-12 md:w-20" />
          <Icons.quotes className="absolute h-12 text-gold left-1 -bottom-9 md:-bottom-16 md:w-20" />
          <div className="flex flex-col p-10 space-y-6 rounded-lg bg-gray-100 lg:w-1/3">
            <p className="text-sm md:text-lg">
              "Holidaze made my trip planning so easy! I found the perfect
              beachfront villa in no time. The booking process was simple, and I
              received confirmation instantly. Highly recommend for anyone
              looking to escape to a relaxing destination."
            </p>
            <div className="flex space-x-4">
              <img
                className="w-10 h-10 rounded-full"
                src={profile1}
                alt="Customer picture"
              />
              <div>
                <h5 className="text-sm font-semibold">John D.</h5>
              </div>
            </div>
          </div>
          <div className="flex flex-col p-10 space-y-6 rounded-lg bg-gray-100 lg:w-1/3">
            <p className="text-sm md:text-lg">
              "From start to finish, Holidaze exceeded my expectations. I loved
              the wide range of options, and the reviews helped me choose the
              perfect stay. I booked a cozy cabin for my getaway, and it was
              amazing. I’ll definitely use Holidaze again!"
            </p>
            <div className="flex space-x-4">
              <img
                className="w-10 h-10 rounded-full"
                src={profile2}
                alt="Customer picture"
              />
              <div>
                <h5 className="text-sm font-semibold">Michael P.</h5>
              </div>
            </div>
          </div>
          <div className="flex flex-col p-10 space-y-6 rounded-lg bg-gray-100 lg:w-1/3">
            <p className="text-sm md:text-lg">
              "I’ve never had such a seamless experience booking accommodation.
              The site is easy to navigate, and the customer support was
              exceptional. Holidaze will be my go-to for all future travel
              plans. I booked a city apartment, and it was exactly as
              described!"
            </p>
            <div className="flex space-x-4">
              <img
                className="w-10 h-10 rounded-full"
                src={profile3}
                alt="Customer picture"
              />
              <div>
                <h5 className="text-sm font-semibold">Samantha K.</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
