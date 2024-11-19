import NavBar from './NavBar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <main>
      <NavBar />
      <Outlet />
      <Footer />
    </main>
  )
}

export default MainLayout
