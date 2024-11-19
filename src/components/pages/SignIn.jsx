import SignInCover from '../../assets/images/signInImage.jpg'
import { useState } from 'react'
import ModalRegisterUser from '../forms/ModalRegisterUser'
import LoginForm from '../forms/LoginForm'
import { registerUser_URL } from '../../constants/apiEndpoints'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => setIsModalOpen(true)
  const handleCloseModal = () => setIsModalOpen(false)
  const [error, setError] = useState('')

  const navigate = useNavigate()

  const handleRegisterUser = async (data) => {
    try {
      const response = await fetch(registerUser_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data, venueManager: false }),
      })
      if (!response.ok) {
        throw new Error('Failed to register')
      }

      const result = await response.json()
      console.log('Registration successful', result)
      navigate('/')
    } catch (error) {
      console.error('Failed to register', error)
      setError(error.toString())
    }
  }

  return (
    <section className="container">
      <div>
        <img
          className="relative h-screen w-full object-cover"
          src={SignInCover}
          alt="Background for sign in page"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      <div className="max-w-lg absolute top-20 left-0 right-0 mx-auto bg-slate-400 bg-opacity-30 border border-platinum border-opacity-30 rounded-md py-12 px-3">
        <div>
          <h1 className="text-4xl font-bold text-center text-platinum">
            Welcome back to Holidaze!
          </h1>
          <p className="text-center text-platinum font-semibold mt-4">
            Sign in to your account to continue your journey with us.
          </p>
          <LoginForm />
        </div>
        <div className="bg-white bg-opacity-70 mt-8 py-4 flex flex-col items-center space-y-4 ">
          <h2 className="text-xl font-semibold">Not a member?</h2>
          <p className="font-medium">
            Join us today and start your journey with Holidaze
          </p>
          <button
            onClick={handleOpenModal}
            className="bg-gold px-2 py-1 font-semibold rounded-md uppercase shadow-md transform hover:scale-105 transition ease-in duration-300"
          >
            Sign up
          </button>
        </div>
      </div>
      <ModalRegisterUser
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleRegisterUser}
      />
    </section>
  )
}

export default SignIn
