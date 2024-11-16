import Card from './Card'

const MostPopularHotels = () => {
  return (
    <section className="w-full mt-72 md:mt-24">
      <div className="container flex flex-col items-center justify-center mx-auto h-24 space-y-4">
        <div className="border-y-4 border-gold px-4">
          <h2 className="font-semibold text-3xl md:text-4xl text-center text-gold">
            Most popular hotels
          </h2>
        </div>
        <div className="text-center text-slate-700 font-semibold italic lg:text-lg">
          <p>
            Discover our most popular hotels, handpicked for their exceptional
            service, prime locations, and unforgettable guest experiences.
          </p>
        </div>
      </div>
      <div className="container grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-2 mt-12">
        <Card />
      </div>
    </section>
  )
}

export default MostPopularHotels
