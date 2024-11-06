import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema } from '../forms/loginSchema'
import { loginUser_URL } from '../../constants/apiEndpoints'
import { useState } from 'react'

const LoginForm = () => {
  const [error, setError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  })

  const handleLogin = async (data) => {
    try {
      const response = await fetch(loginUser_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      if (!response.ok) {
        throw new Error('Failed to login')
      }
      const result = await response.json()
      console.log('Login successful', result)
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
