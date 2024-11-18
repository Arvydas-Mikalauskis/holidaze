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
  ManagerPage,
  ProfilePage,
  AddVenue,
  VenuePage,
} from './components/pages/pages.js'
import { AuthProvider } from './utils/AuthProvider.jsx'
import { VenuesProvider } from './utils/VenuesContext.jsx'
import SignInManager from './components/pages/SignInManager.jsx'
import { venueLoader } from './components/pages/VenuePage.jsx'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/addVenue" element={<AddVenue />} />
          <Route path="/user" element={<ProfilePage />} />
          <Route path="/manager" element={<ManagerPage />} />
          <Route
            path="/venue/:id"
            element={<VenuePage />}
            loader={venueLoader}
          />
        </Route>
        <Route path="/login" element={<SignIn />} />
        <Route path="/manager_login" element={<SignInManager />} />
      </>
    )
  )

  return (
    <>
      <AuthProvider>
        <VenuesProvider>
          <RouterProvider router={router} />
        </VenuesProvider>
      </AuthProvider>
    </>
  )
}

export default App
