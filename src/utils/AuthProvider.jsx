import { createContext, useContext } from 'react'
import useLocalStorage from './useLocalStorage'
import { loginUser_URL } from '../constants/apiEndpoints'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage('user', null)

  const login = async (email, password) => {
    try {
      const response = await fetch(`${loginUser_URL}?_holidaze=true`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
          'X-Noroff-Api-Key': import.meta.env.VITE_API_KEY,
        },
        body: JSON.stringify({ email, password }),
      })
      const data = await response.json()

      if (response.ok) {
        setUser(data)
        console.log('Login successful', data)
      } else {
        console.error('Login failed', data.message)
      }
    } catch (error) {
      console.error('Error', error)
    }
  }

  const logout = () => {
    setUser(null)
    window.localStorage.removeItem('user')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
