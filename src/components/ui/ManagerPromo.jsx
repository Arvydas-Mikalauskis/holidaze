import { Link } from 'react-router-dom'

const ManagerPromo = () => {
  return (
    <div className="w-max-sm bg-platinum pt-14 pb-4 mb-12 text-black flex flex-col text-center text-sm space-y-2 ">
      <h4>
        Join Holidaze as a property manager and open the door to new guests!
        List your property easily and start earning today.{' '}
      </h4>
      <Link to="/manager_login" className="text-blue-600">
        Register as Manager
      </Link>
    </div>
  )
}

export default ManagerPromo
