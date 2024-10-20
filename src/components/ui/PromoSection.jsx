import React from 'react'

const PromoSection = () => {
  return (
    <section className="relative px-6 md:px-0">
      <div className="relative -top-40 max-w-4xl mx-auto p-10 px-6 space-y-6 text-center rounded-lg bg-gray-200 md:px-16">
        <h5 className="text-2xl font-bold">
          Unlock Exclusive Member Benefits!
        </h5>
        <p className="text-sm">
          Join Holidaze today and be the first to access our exclusive deals,
          members-only offers, and personalized travel recommendations. Whether
          you're planning a weekend getaway or a dream vacation, our members
          enjoy special discounts and priority booking on top destinations
          worldwide.
        </p>
        <div className="flex justify-center">
          <button className="w-full p-3 px-6 rounded-full bg-gold md:w-56 hover:scale-95">
            Become a Member
          </button>
        </div>
      </div>
    </section>
  )
}

export default PromoSection
