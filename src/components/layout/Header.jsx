import headerImage from '../../assets/images/headerImage.jpg'

const Header = () => {
  return (
    <header className="relative z-0 w-full headerImg">
      <div>
        <img
          className="w-full object-cover h-screen"
          src={headerImage}
          alt="header image"
        />
      </div>
      <div className="absolute left-40 bottom-40 flex flex-col z-10 max-w-4xl space-y-2 mb-12">
        <h1 className="text-white text-4xl font-bold ">
          Experience Stays,{' '}
          <span className="text-gold">Experience Holidaze</span>
        </h1>
        <p className="text-gray-200 text-lg">
          At Holidaze, we believe that every journey deserves the perfect place
          to stay. Whether you're looking for a cozy retreat, a luxury escape,
          or a family-friendly adventure, we make it easy to find and book the
          ideal accommodation.
        </p>
      </div>
    </header>
  )
}

export default Header
