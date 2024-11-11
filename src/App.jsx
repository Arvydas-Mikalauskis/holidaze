import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'
import './App.css'
import MainLayout from './components/layout/MainLayout'
import {
  HomePage,
  SignIn,
  Properties,
  SingleProperty,
  ManagerPage,
  ProfilePage,
  AddVenue,
} from './components/pages/pages.js'
import { AuthProvider } from './utils/AuthProvider.jsx'
import SignInManager from './components/pages/SignInManager.jsx'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/properties/:id" element={<SingleProperty />} />
          <Route path="/addVenue" element={<AddVenue />} />
          <Route path="/user" element={<ProfilePage />} />
          <Route path="/manager" element={<ManagerPage />} />
        </Route>
        <Route path="/login" element={<SignIn />} />
        <Route path="/manager_login" element={<SignInManager />} />
      </>
    )
  )

  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  )
}

export default App
