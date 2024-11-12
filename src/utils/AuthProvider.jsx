import { createContext, useContext } from 'react'
import useLocalStorage from './useLocalStorage'
import { loginUser_URL } from '../constants/apiEndpoints'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage('user', null)
  const [apiKey, setApiKey] = useLocalStorage('apiKey', null)

  const login = async (email, password) => {
    try {
      const response = await fetch(`${loginUser_URL}?_holidaze=true`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
        },
        body: JSON.stringify({ email, password }),
      })
      const data = await response.json()

      if (response.ok) {
        setUser(data)
        setApiKey(data.accessToken)
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
    setApiKey(null)
    window.localStorage.removeItem('user')
    window.localStorage.removeItem('apiKey')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
