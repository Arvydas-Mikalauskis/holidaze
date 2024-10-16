import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="relative -mb-12 w-full h-12 flex justify-between items-center font-heading text-xl font-bold px-6 border-b border-gold text-gold z-10">
      <div>
        <div>Holidaze</div>
      </div>
      <div className="space-x-4">
        <NavLink to="/">All venues</NavLink>
        <NavLink to="/">Contact us</NavLink>
        <NavLink to="/">Vouchers</NavLink>
      </div>
      <div className="space-x-4">
        <NavLink to="/">Login</NavLink>
        <NavLink to="/">Register</NavLink>
      </div>
    </nav>
  )
}

export default NavBar
