import headerImage from '../../assets/images/headerImage.jpg'

const Header = () => {
  return (
    <header className="container-xl relative z-0 w-full headerImg">
      <div>
        <img
          className="w-full object-cover h-screen"
          src={headerImage}
          alt="header image"
        />
      </div>
      <div className="absolute flex flex-col left-0 bottom-48 z-10 text-center  lg:left-10 2xl:left-40 md:bottom-60 xl:max-w-6xl lg:text-start space-y-2 mb-12">
        <h1 className="text-white text-4xl font-bold">
          Experience Stays,{' '}
          <span className="text-gold">Experience Holidaze</span>
        </h1>
        <p className="text-slate-200 font-medium md:text-lg leading-8 px-2 lg:px-0">
          At Holidaze, we believe that every journey deserves the perfect place
          to stay. Whether you're looking for a cozy retreat, a luxury escape,
          or a family-friendly adventure, we make it easy to find and book the
          ideal accommodation. Explore our wide range of stays and experience
          seamless booking, personalized comfort, and unforgettable memories
          with Holidaze.
        </p>
      </div>
    </header>
  )
}

export default Header
