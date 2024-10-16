import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <main>
      <NavBar />
      <Outlet />
    </main>
  )
}

export default MainLayout
