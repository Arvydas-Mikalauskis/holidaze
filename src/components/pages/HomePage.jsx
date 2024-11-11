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
  /* useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(
          'https://v2.api.noroff.dev/holidaze/profiles/simpleUser',
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYXJ2aXMiLCJlbWFpbCI6ImFydm1pazgzODMyQHN0dWQubm9yb2ZmLm5vIiwiaWF0IjoxNzMwOTE4Mzg3fQ.3Tw8PnCvYhEU3JpO_F1ReVxsKolE65juYTI_q009qqA',
              'X-Noroff-API-Key': 'ff27a627-0a26-4dff-9839-e2b8bd291711',
            },
          }
        )
        const data = await response.json()
        console.log(data)
      } catch (error) {
        console.log(error)
      } finally {
      }
    }
    fetchProfile()
  }, []) */
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
