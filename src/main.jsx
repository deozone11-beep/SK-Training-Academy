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
    path : '/SK-Training-Academy/officialLogin',
    element : <Login />
  },
  {
    path: '/SK-Training-Academy/registration',
    element : <Registration/>
  },
  {
    path: '/SK-Training-Academy/about',
    element : <About/>
  },
  {
    path: '/SK-Training-Academy/contact',
    element : <Contact/>
  },
  {
    path: '/SK-Training-Academy/dashboard',
    element : <Dashboard/>
  }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
