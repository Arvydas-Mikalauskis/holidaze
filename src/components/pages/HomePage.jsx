import { BASE_API_URL } from '../../constants/apiEndpoints'
import { useEffect } from 'react'
import {
  Header,
  SearchBar,
  MostPopularHotels,
  HowItWorksSection,
  DiscoverDestinations,
  Testimonials,
  PromoSection,
} from '../components'

const HomePage = () => {
  return (
    <>
      <Header />
      <SearchBar />
      <MostPopularHotels />
      <HowItWorksSection />
      <DiscoverDestinations />
      <Testimonials />
      <PromoSection />
    </>
  )
}

export default HomePage
