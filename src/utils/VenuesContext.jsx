import { createContext, useContext, useState, useEffect } from 'react'
import { allVenues } from '../constants/apiEndpoints'
import { useAuth } from './AuthProvider'

const VenuesContext = createContext()

export const VenuesProvider = ({ children }) => {
  const [venues, setVenues] = useState([])
  const [loading, setLoading] = useState(true)

  const { token } = useAuth()

  useEffect(() => {
    const fetchVenues = async () => {
      try {
        const response = await fetch(allVenues, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
            'X-Noroff-Api-Key': import.meta.env.VITE_API_KEY,
          },
        })
        const data = await response.json()
        setVenues(data.data)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    fetchVenues()
  }, [token])

  return (
    <VenuesContext.Provider value={{ venues, loading }}>
      {children}
    </VenuesContext.Provider>
  )
}

export const useVenuesContext = () => useContext(VenuesContext)
