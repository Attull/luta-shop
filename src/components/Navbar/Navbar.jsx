import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"
function Navbar() {
  return (
    <div>
        <ul className='navbar'>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/products">Product</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar