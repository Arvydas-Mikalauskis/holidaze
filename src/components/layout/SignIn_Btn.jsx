import { Link } from 'react-router-dom'
import { useState } from 'react'

const SignIn_Btn = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="bg-gold bg-opacity-70 rounded-md shadow-lg text-slate-100 text-lg px-4 cursor-pointer hover:bg-opacity-100 transition-all duration-300 ease-in-out"
      >
        Sign In
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-md bg-white text-black text-sm ">
          <div
            className="py-1 text-left"
            role="menu"
            aria-orientation="vertical"
            aria-label="options-menu"
          >
            <Link
              to="/login"
              className="block px-4 py-2 hover:bg-gold"
              role="menuitem"
            >
              Sign in (Customer)
            </Link>
            <Link
              to="manager_login"
              className="block px-4 py-2 hover:bg-gold"
              role="menuitem"
            >
              Sign in (manager)
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default SignIn_Btn
