import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Icons } from '../../constants/icons/Icons'
import SignIn_Btn from './SignIn_Btn'
import Logout_Btn from './Logout_Btn'
import { useAuth } from '../../utils/AuthProvider'

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const { user, logout } = useAuth()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="relative w-full h-12 flex justify-end md:justify-around items-center bg-black -mb-12 font-heading text-xl font-bold px-6 border-b border-gold text-gold z-10">
      <div className="container justify-between items-center hidden md:flex">
        <div>
          <Link className="desktopNavLink" to="/">
            Holidaze
          </Link>
        </div>
        <div className="">
          <Link className="desktopNavLink" to="/properties">
            Available Properties
          </Link>
        </div>
        {user ? <Logout_Btn user={user} logout={logout} /> : <SignIn_Btn />}
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden flex items-center">
        {isMobileMenuOpen ? (
          <button onClick={toggleMobileMenu}>
            <Icons.CloseMobile className="text-3xl" />
          </button>
        ) : (
          <button onClick={toggleMobileMenu}>
            <Icons.MobileMenu className="text-3xl" />
          </button>
        )}
      </div>

      {/* Mobile Menu */}

      <div
        className={`fixed inset-0 w-full h-full bg-black text-gold flex flex-col items-center justify-center space-y-12 transform
    ${
      isMobileMenuOpen
        ? 'translate-x-0 opacity-100'
        : 'translate-x-full opacity-0'
    }
    transition-all duration-200 ease-in-out`}
      >
        <button onClick={toggleMobileMenu}>
          <Icons.CloseMobile className="text-3xl underline absolute top-6 right-10" />
        </button>
        <Link className="mobileNav_link" to="/login" onClick={toggleMobileMenu}>
          Sign In (Customer)
        </Link>
        <Link
          className="mobileNav_link"
          to="/manager_login"
          onClick={toggleMobileMenu}
        >
          Sign In (Manager)
        </Link>
        <Link className="mobileNav_link" to="/" onClick={toggleMobileMenu}>
          Book Property
        </Link>
      </div>
    </nav>
  )
}

export default NavBar
