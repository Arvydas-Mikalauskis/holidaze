import { useAuth } from '../../utils/AuthProvider'
import { Link } from 'react-router-dom'
import { useVenuesContext } from '../../utils/VenuesContext'

const ManagerPage = () => {
  const { venues } = useVenuesContext()

  const { user } = useAuth()
  return (
    <section className="my-12">
      <div className="text-center mt-24">
        <h1 className="text-xl text-slate-700 font-semibold mb-10 ">
          Welcome back, {user.name}
        </h1>
      </div>
      <div className="bg-gray-100 bg-opacity-80 flex flex-col max-w-lg mx-auto rounded-md shadow-lg p-6 border border-gold border-opacity-30">
        <div className="flex justify-center space-x-10">
          <div>
            <img
              className="rounded-full w-24 h-24"
              src={user.avatar.url}
              alt="profile picture"
            />
          </div>
          <div className="flex flex-col  justify-between items-center text-gray-900">
            <p className="font-medium">Email: {user.email}</p>
            <p className="font-medium">Phone: +47 000 000</p>
            <p className="font-medium">Adress: Trondheim, Norway</p>
          </div>
        </div>
        <div className="flex space-x-16 mx-auto mt-8">
          <Link to="/" className="profileEdit_btn">
            Edit Profile
          </Link>
          <Link to="/addVenue" className="addProperty_btn">
            Add property
          </Link>
        </div>
      </div>
      <div className="mt-24 text-center">
        <h2 className="text-xl font-semibold">Managed venues</h2>
      </div>
    </section>
  )
}

export default ManagerPage
