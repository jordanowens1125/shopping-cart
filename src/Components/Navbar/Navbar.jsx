import React, {useContext} from 'react'
import {CartContext} from '../../Context/Context'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './Navbar.css'

const categories = [
  'Men',
  'Women',
]

const Navbar = () => {
  const cart = useContext(CartContext)
  let count = cart.cart.length
  const showCart = () => {
    const element = document.getElementById('cart')
    element.classList.toggle('open')
  }

  return (
    <>
      <div id='nav'>
        <div  id="brand">
          <ul>
            <NavLink to={'/'} activeclassname ='active'
            className='link'
            >
              Home
            </NavLink>
            {
              categories.map((category,index)=>
                <NavLink key={index} to={`/catalog/${category}`}
                activeclassname ='active' className='link'
                >
                  <li>
                    {category}
                  </li>
                </NavLink>
              )
            }
            <NavLink to={'/About'} activeclassname ='active'
            className='link'
            >
              About
            </NavLink>
          </ul>
        </div>
        <div id="shopping">
          <div id='nav-cart'>
            <svg 
            onClick={showCart}
            width="40px" 
            height="40px" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M9.5 19.5C10.0523 19.5 10.5 19.0523 10.5 18.5C10.5 17.9477 10.0523 17.5 9.5 17.5C8.94772 17.5 8.5 17.9477 8.5 18.5C8.5 19.0523 8.94772 19.5 9.5 19.5ZM9.5 20.5C10.6046 20.5 11.5 19.6046 11.5 18.5C11.5 17.3954 10.6046 16.5 9.5 16.5C8.39543 16.5 7.5 17.3954 7.5 18.5C7.5 19.6046 8.39543 20.5 9.5 20.5Z" fill="currentColor"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M16.5 19.5C17.0523 19.5 17.5 19.0523 17.5 18.5C17.5 17.9477 17.0523 17.5 16.5 17.5C15.9477 17.5 15.5 17.9477 15.5 18.5C15.5 19.0523 15.9477 19.5 16.5 19.5ZM16.5 20.5C17.6046 20.5 18.5 19.6046 18.5 18.5C18.5 17.3954 17.6046 16.5 16.5 16.5C15.3954 16.5 14.5 17.3954 14.5 18.5C14.5 19.6046 15.3954 20.5 16.5 20.5Z" fill="currentColor"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M3 4C3 3.72386 3.22386 3.5 3.5 3.5H5.5C5.71767 3.5 5.91033 3.64082 5.97641 3.84822L9.36993 14.5H17C17.2761 14.5 17.5 14.7239 17.5 15C17.5 15.2761 17.2761 15.5 17 15.5H9.00446C8.78679 15.5 8.59413 15.3592 8.52805 15.1518L5.13453 4.5H3.5C3.22386 4.5 3 4.27614 3 4Z" fill="currentColor"/>
            <path d="M8.5 13L6 6H19.3371C19.6693 6 19.9092 6.31795 19.8179 6.63736L18.1036 12.6374C18.0423 12.852 17.8461 13 17.6228 13H8.5Z" fill="currentColor"/>
            </svg>
            <div>
              <p>{count}</p>
            </div>
          </div>
          <Link to={'/search'} className='link'>
            <svg 
              width="30px" 
              height="30px" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" 
              clipRule="evenodd" 
              d="M9.5 17c1.71 0 3.287-.573 4.55-1.537l4.743 4.744a1 1 0 0 0 1.414-1.414l-4.744-4.744A7.5 7.5 0 1 0 9.5 17zM15 9.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" 
              fill="currentColor"/>
            </svg>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar