import { useState } from 'react'
import LoginForm from '../forms/LoginForm'
import ModalRegisterUser from '../forms/ModalRegisterUser'
import { registerUser_URL } from '../../constants/apiEndpoints'
import { useNavigate } from 'react-router-dom'

const SignInManager = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [error, setError] = useState('')

  const navigate = useNavigate()

  const handleOpenModal = () => setIsModalOpen(true)
  const handleCloseModal = () => setIsModalOpen(false)

  const handleRegisterManager = async (data) => {
    try {
      const response = await fetch(registerUser_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data, venueManager: true }),
      })
      if (!response.ok) {
        throw new Error('Failed to register')
      }

      const result = await response.json()
      console.log('Registration successful', result)
      navigate('/manager_login')
    } catch (error) {
      console.error('Failed to register', error)
      setError(error.toString())
    }
  }

  return (
    <section className="bg-gradient h-screen">
      <div className="flex flex-col items-center">
        <div className="max-w-lg mt-20 bg-slate-400 bg-opacity-30 border border-platinum border-opacity-30 rounded-md py-12 px-3">
          <div>
            <h1 className="text-4xl font-bold text-center text-platinum">
              Welcome back!
            </h1>
            <p className="text-center text-platinum font-semibold mt-4">
              Log in to your account to continue managing your venues.
            </p>
            <LoginForm />
          </div>
          <div className="bg-white bg-opacity-70 mt-8 py-4 flex flex-col items-center space-y-4 text-center ">
            <h2 className="text-xl font-semibold">
              Interested in becoming a manager at Holidaze?
            </h2>
            <p className="font-medium">
              Join Holidaze as a Manager - List your properties, earn more, and
              unlock exclusive perks!
            </p>
            <button
              onClick={handleOpenModal}
              className="bg-platinum px-2 py-1 font-semibold rounded-md uppercase shadow-md transform hover:scale-105 transition ease-in duration-300"
            >
              Register
            </button>
          </div>
        </div>
      </div>
      <ModalRegisterUser
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleRegisterManager}
      />
    </section>
  )
}

export default SignInManager
