import { createContext, useContext } from 'react'
import useLocalStorage from './useLocalStorage'
import { loginUser_URL } from '../constants/apiEndpoints'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage('user', null)

  const login = async (email, password) => {
    try {
      const response = await fetch(loginUser_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYXJ2aXMiLCJlbWFpbCI6ImFydm1pazgzODMyQHN0dWQubm9yb2ZmLm5vIiwiaWF0IjoxNzMwOTE4Mzg3fQ.3Tw8PnCvYhEU3JpO_F1ReVxsKolE65juYTI_q009qqA',
          'X-Noroff-API-Key': 'ff27a627-0a26-4dff-9839-e2b8bd291711',
        },
        body: JSON.stringify({ email, password }),
      })
      const data = await response.json()

      if (response.ok) {
        setUser(data)
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
