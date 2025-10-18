import { NavLink, Link } from 'react-router'
import { useState } from 'react'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <nav className='w-full h-16 text-white bg-blue-400 flex justify-between items-center px-6'>
        <Link className='text-lg font-bold' to="/">Fashion Shop</Link>
        <button className='flex lg:hidden cursor-pointer' onClick={toggleMenu}>&#8801;</button>

        <div onClick={toggleMenu} className={`absolute inset-0 bg-sky-300 opacity-90 flex justify-center items-center transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300`}>
          <ul className='text-2xl text-center'>
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? "text-yellow-400" : "hover:text-gray-300"} onClick={toggleMenu}>Home</NavLink>
            </li>
            <li className='my-6'>
              <NavLink to="/shop" className={({ isActive }) => isActive ? "text-yellow-400" : "hover:text-gray-300"} onClick={toggleMenu}>Shop</NavLink>
            </li>
            <li>
              <NavLink to="/cart" className={({ isActive }) => isActive ? "text-yellow-400" : "hover:text-gray-300"} onClick={toggleMenu}>Cart</NavLink>
            </li>
          </ul>
        </div>

        <ul className='gap-4 hidden lg:flex'>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "text-yellow-400" : "hover:text-gray-300"}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/shop" className={({ isActive }) => isActive ? "text-yellow-400" : "hover:text-gray-300"}>Shop</NavLink>
          </li>
          <li>
            <NavLink to="/cart" className={({ isActive }) => isActive ? "text-yellow-400" : "hover:text-gray-300"}>Cart</NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar