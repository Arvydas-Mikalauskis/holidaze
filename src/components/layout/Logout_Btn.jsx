import { Link } from 'react-router-dom'
import { useState } from 'react'

const Logout_Btn = ({ user, logout }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative">
      <div
        onClick={toggleDropdown}
        className="bg-gold bg-opacity-70 rounded-md shadow-lg text-slate-100 text-lg px-4 cursor-pointer hover:bg-opacity-100 transition-all duration-300 ease-in-out"
      >
        {user && <span>Welcome, {user.data.name}</span>}
      </div>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-md bg-white text-black text-sm ">
          <div
            className="py-1 text-left"
            role="menu"
            aria-orientation="vertical"
            aria-label="options-menu"
          >
            {user.data.venueManager === false ? (
              <Link
                to="/user"
                className="block px-4 py-2 hover:bg-gold"
                role="menuitem"
              >
                Profile
              </Link>
            ) : (
              <Link
                to="/manager"
                className="block px-4 py-2 hover:bg-gold"
                role="menuitem"
              >
                Profile
              </Link>
            )}
            <button
              onClick={logout}
              className="block w-full text-left px-4 py-2 hover:bg-gold"
              role="menuitem"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Logout_Btn
