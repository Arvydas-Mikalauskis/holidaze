import { useAuth } from '../../utils/AuthProvider'
import { Link } from 'react-router-dom'

const ManagerPage = () => {
  const { user } = useAuth()
  return (
    <section className="my-12">
      <div className="text-center mt-24">
        <h1 className="text-2xl text-slate-700 font-semibold mb-10 ">
          Welcome back, {user.name}
        </h1>
      </div>
      <div className="bg-platinum bg-opacity-80 flex flex-col max-w-lg mx-auto rounded-md shadow-md p-6 border">
        <div className="flex space-x-10">
          <div>
            <img
              className="rounded-xl"
              src={user.avatar.url}
              alt="profile picture"
            />
          </div>
          <div className="flex flex-col items-center justify-evenly text-center">
            <p>Email: {user.email}</p>
            <p>Phone: +47 000 000</p>
            <p>Adress: Trondheim, Norway</p>
          </div>
        </div>
        <div className="flex space-x-16 mx-auto mt-8">
          <button className="profileEdit_btn">Edit Profile</button>
          <Link to="/addVenue" className="addProperty_btn">
            Add property
          </Link>
        </div>
      </div>
      <div className="mt-24 text-center">
        <h2 className="text-2xl font-semibold">Managed venues</h2>
        <div>
          <ul>
            <li>Property 1</li>
            <li>Property 2</li>
            <li>Property 3</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ManagerPage
