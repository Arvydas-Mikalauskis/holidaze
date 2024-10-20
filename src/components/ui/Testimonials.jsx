import quotes from '../../assets/images/testimonials/quotes.png'
import profile1 from '../../assets/images/testimonials/profile-1.jpg'
import profile2 from '../../assets/images/testimonials/profile-2.jpg'
import profile3 from '../../assets/images/testimonials/profile-3.jpg'

const Testimonials = () => {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-6 pt-12 pb-80 md:pb-96">
        <div className="relative flex flex-col w-full space-y-6 md:flex-row md:space-y-0 md:space-x-12">
          <img
            className="absolute right-1 -top-2 md:-top-16 md:w-20"
            src={quotes}
            alt="quetes"
          />
          <div className="flex flex-col p-10 space-y-6 rounded-lg bg-gray-100 md:w-1/3">
            <p className="text-sm md:text-lg">
              "Holidaze made my trip planning so easy! I found the perfect
              beachfront villa in no time. The booking process was simple, and I
              received confirmation instantly. Highly recommend for anyone
              looking to escape to a relaxing destination."
            </p>
            <div className="flex space-x-4">
              <img className="w-10 h-10 rounded-full" src={profile1} alt="" />
              <div>
                <h5 className="text-sm font-semibold">John D.</h5>
              </div>
            </div>
          </div>
          <div className="flex flex-col p-10 space-y-6 rounded-lg bg-gray-100 md:w-1/3">
            <p className="text-sm md:text-lg">
              "From start to finish, Holidaze exceeded my expectations. I loved
              the wide range of options, and the reviews helped me choose the
              perfect stay. I booked a cozy cabin for my getaway, and it was
              amazing. I’ll definitely use Holidaze again!"
            </p>
            <div className="flex space-x-4">
              <img className="w-10 h-10 rounded-full" src={profile2} alt="" />
              <div>
                <h5 className="text-sm font-semibold">Michael P.</h5>
              </div>
            </div>
          </div>
          <div className="flex flex-col p-10 space-y-6 rounded-lg bg-gray-100 md:w-1/3">
            <p className="text-sm md:text-lg">
              "I’ve never had such a seamless experience booking accommodation.
              The site is easy to navigate, and the customer support was
              exceptional. Holidaze will be my go-to for all future travel
              plans. I booked a city apartment, and it was exactly as
              described!"
            </p>
            <div className="flex space-x-4">
              <img className="w-10 h-10 rounded-full" src={profile3} alt="" />
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
