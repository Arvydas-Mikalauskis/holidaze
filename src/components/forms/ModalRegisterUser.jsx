import { useForm } from 'react-hook-form'
import { Icons } from '../../constants/icons/Icons'
import { registerSchema } from './registerSchema'
import { zodResolver } from '@hookform/resolvers/zod'

const ModalRegisterUser = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  })

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
      <div className="bg-gold bg-opacity-90 p-6 rounded-md shadow-md max-w-md relative">
        <h2 className="text-xl font-bold mb-4">Register with Holidaze</h2>
        <p className="mb-3 italic">
          Create an account to start your journey with us.
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register('name')}
            className="registerInput_field"
            type="text"
            placeholder="Username"
          />
          {errors.name && <p className="formError">{errors.name.message}</p>}
          <input
            {...register('email')}
            className="registerInput_field"
            type="email"
            placeholder="Email Address"
          />
          {errors.email && <p className="formError">{errors.email.message}</p>}
          <input
            {...register('password')}
            className="registerInput_field"
            type="password"
            placeholder="Password"
          />
          {errors.password && (
            <p className="formError">{errors.password.message}</p>
          )}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-platinum text-black px-4 py-2 rounded-md font-semibold transform hover:scale-105 transition ease-in duration-300"
            >
              Register
            </button>
          </div>
        </form>
        <button
          className="absolute top-4 text-3xl right-4 text-gray-600 hover:text-gray-800 hover:bg-platinum rounded-md"
          onClick={onClose}
        >
          <Icons.close />
        </button>
      </div>
    </div>
  )
}

export default ModalRegisterUser
