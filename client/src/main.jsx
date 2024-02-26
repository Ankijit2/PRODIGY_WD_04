import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider,createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import Home from './pages/home/home.jsx'
import About from './pages/about/about.jsx'
import Service from './pages/servicepage/service.jsx'
import Contact from './pages/contact/contact.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >
      <Route path='' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/services' element={<Service/>} />
      <Route path='/contact' element={<Contact/>} />

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
 
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
