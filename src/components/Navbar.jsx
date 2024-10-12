import React from 'react'
import './Navbar.css' 

const Navbar = () => {
  return (
    <nav>
        <div className='logo'>
            <img src="/public/images/Screenshot 2024-07-28 140940.png" alt="" />
        </div>

        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}

export default Navbar