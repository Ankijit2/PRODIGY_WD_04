
import './App.css'
import Header from './components/header/header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/footer'


function App() {
  

  return (
    <>
    
    <Header />
    <Outlet />
    <Footer />
   
    </>
  )
}

export default App
