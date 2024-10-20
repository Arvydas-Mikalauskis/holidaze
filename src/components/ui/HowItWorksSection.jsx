import React from 'react'

const HowItWorksSection = () => {
  return (
    <section className="my-16">
      <div className="flex flex-col items-center space-y-2 ">
        <h3 className="text-4xl font-semibold text-gold">How it works</h3>
        <p className="text-xl text-slate-800 italic">
          Find out more about our booking process
        </p>
      </div>
      <div>
        <div className="flex justify-center space-x-16 mt-12">
          <div className="howItWorks_container">
            <div className="howItWorks_circle">
              <span className="text-3xl text-white">1</span>
            </div>
            <h4 className="howItWorks_H_Text">Find Your Destination</h4>
            <p className="howItWorks_text">
              Start by searching for your next travel destination. Whether
              you're dreaming of a beachfront villa, a cozy mountain cabin, or a
              city escape, simply enter your location, and we'll show you the
              best accommodations.
            </p>
          </div>
          <div className="howItWorks_container">
            <div className="howItWorks_circle">
              <span className="text-3xl text-white">2</span>
            </div>
            <h4 className="howItWorks_H_Text">Explore and Compare Stays</h4>
            <p className="howItWorks_text">
              Browse through our wide selection of hotels, apartments, and
              unique stays. Compare prices, read reviews, and explore photos to
              find the perfect place that suits your style and budget.
            </p>
          </div>
          <div className="howItWorks_container">
            <div className="howItWorks_circle">
              <span className="text-3xl text-white">3</span>
            </div>
            <h4 className="howItWorks_H_Text">Book with Confidence</h4>
            <p className="howItWorks_text">
              Once you’ve found the ideal stay, booking is fast and secure. Fill
              in your details, confirm your dates, and you're all set! With
              Holidaze, you’ll receive instant booking confirmation and support
              whenever you need it.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection
