// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo.svg';
import '../../index.css'


function Header() {


    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
      
    };
  

    return (
      <>
        <nav className='flex justify-between w-full' id='navbar'>
          <div>
            <img src={logo} alt="logo" className='md:w-36 w-28' />
          </div>
          <button onClick={toggleMenu}><span className="material-symbols-outlined md:hidden mr-9">
            menu
          </span></button>

          <ul className={`text-tprimary pr-11 ${isOpen ? 'open' : ''} menu` } >
            <button onClick={toggleMenu}><span className="material-symbols-outlined md:hidden ml-3 mt-4">
              close
            </span></button>
            <NavLink to='/' className={({ isActive }) => `menu-items ${isActive ? "active-style" : ""}`} >Home</NavLink>
            <NavLink to='/about' className={({ isActive }) => `menu-items ${isActive ? "active-style" : ""}`} >About</NavLink>
            <NavLink to='/services' className={({ isActive }) => `menu-items ${isActive ? "active-style" : ""}`} >Services</NavLink>
            <NavLink to='/contact' className={({ isActive }) => `menu-items ${isActive ? "active-style" : ""}`} >Contact-Me</NavLink>
            {/* <li></li> */}
          </ul>
        </nav>

      </>

    )
  }

  export default Header