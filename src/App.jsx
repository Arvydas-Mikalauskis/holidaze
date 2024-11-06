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
} from './components/pages/pages.js'
import SignInManager from './components/pages/SignInManager.jsx'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/properties/:id" element={<SingleProperty />} />
        </Route>
        <Route path="/login" element={<SignIn />} />
        <Route path="/manager_login" element={<SignInManager />} />
      </>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
