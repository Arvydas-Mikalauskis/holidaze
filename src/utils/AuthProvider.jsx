import { createContext, useContext } from 'react'
import useLocalStorage from './useLocalStorage'
import { loginUser_URL } from '../constants/apiEndpoints'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage('user', null)
  const [token, setToken] = useLocalStorage('bearerToken', null)

  const login = async (email, password) => {
    try {
      const response = await fetch(`${loginUser_URL}?_holidaze=true`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })
      const result = await response.json()

      console.log('Response data:', result)

      if (response.ok) {
        setUser(result.data)
        setToken(result.data.accessToken)
        console.log('Login successful', result.data)
        console.log('Bearer token', result.data.accessToken)
      } else {
        console.error('Login failed', result.message)
      }
    } catch (error) {
      console.error('Error', error)
    }
  }

  const logout = () => {
    setUser(null)
    setToken(null)
    window.localStorage.removeItem('user')
    window.localStorage.removeItem('bearerToken')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, token }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
