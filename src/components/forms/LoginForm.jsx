import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema } from '../forms/loginSchema'
import { useState } from 'react'
import { useAuth } from '../../utils/AuthProvider'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const { login } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  })

  const handleLogin = async (data) => {
    try {
      await login(data.email, data.password)
      console.log('Login successful') // add toast message later
      navigate('/')
    } catch (error) {
      console.error('Failed to login', error)
      setError(error.toString())
    }
  }

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <input
        {...register('email')}
        className="formInput_field"
        type="email"
        placeholder="Email adress. Must be valid noroff email"
      />
      {errors.email && (
        <p className="loginError_Message">{errors.email.message}</p>
      )}
      <input
        {...register('password')}
        className="formInput_field"
        type="password"
        placeholder="Password. Must be atleast 8 digits"
      />
      {errors.password && (
        <p className="loginError_Message">{errors.password.message}</p>
      )}
      <div className="flex justify-end mr-12 mt-6">
        <button className="py-2 px-6 bg-platinum rounded-md shadow-md border border-platinum uppercase transform hover:scale-105 transition ease-in duration-300">
          Submit
        </button>
      </div>
    </form>
  )
}

export default LoginForm
