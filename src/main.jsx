import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'
import Registration from './components/Registration.jsx'
import NotFound from './components/NotFound.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Dashboard from './components/Dashboard.jsx'


const router = createBrowserRouter([
  {
    path : '/SK-Training-Academy',
    element : <Home/>,
    errorElement : <NotFound/>
  },
  {
    path : '/officialLogin',
    element : <Login />
  },
  {
    path: '/registration',
    element : <Registration/>
  },
  {
    path: '/about',
    element : <About/>
  },
  {
    path: '/contact',
    element : <Contact/>
  },
  {
    path: '/dashboard',
    element : <Dashboard/>
  }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
