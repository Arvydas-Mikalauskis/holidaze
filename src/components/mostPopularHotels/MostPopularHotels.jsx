import Card from './Card'

const MostPopularHotels = () => {
  return (
    <section className="mt-24">
      <div className="flex justify-evenly items-center h-24">
        <div>
          <h2 className="font-semibold text-4xl text-center text-gold">
            Most popular hotels
          </h2>
        </div>
        <div className="max-w-lg italic">
          <p>
            Discover our most popular hotels, handpicked for their exceptional
            service, prime locations, and unforgettable guest experiences.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  )
}

export default MostPopularHotels
