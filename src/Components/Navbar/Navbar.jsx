import React, {useContext, useState} from 'react'
import {CartContext, CategoriesContext} from '../../Context/Context'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import bars from '../../Assets/bars.svg'
import './Navbar.css'

const Navbar = () => {
  const cart = useContext(CartContext)
  const categories = useContext(CategoriesContext)

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let count = cart.cart.length
  
  const showCart = () => {
    const element = document.getElementById('cart')
    element.classList.remove("cart-hide");
    element.classList.add('cart-show')
  }

  return (
    <>
      <nav id="nav">
        <div id="mobile">
          <svg
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={handleOpen}
          >
            <path
              d="M19 12.75H5C4.80109 12.75 4.61032 12.671 4.46967 12.5303C4.32902 12.3897 4.25 12.1989 4.25 12C4.25 11.8011 4.32902 11.6103 4.46967 11.4697C4.61032 11.329 4.80109 11.25 5 11.25H19C19.1989 11.25 19.3897 11.329 19.5303 11.4697C19.671 11.6103 19.75 11.8011 19.75 12C19.75 12.1989 19.671 12.3897 19.5303 12.5303C19.3897 12.671 19.1989 12.75 19 12.75Z"
              fill="currentColor"
            />
            <path
              d="M19 8.25H5C4.80109 8.25 4.61032 8.17098 4.46967 8.03033C4.32902 7.88968 4.25 7.69891 4.25 7.5C4.25 7.30109 4.32902 7.11032 4.46967 6.96967C4.61032 6.82902 4.80109 6.75 5 6.75H19C19.1989 6.75 19.3897 6.82902 19.5303 6.96967C19.671 7.11032 19.75 7.30109 19.75 7.5C19.75 7.69891 19.671 7.88968 19.5303 8.03033C19.3897 8.17098 19.1989 8.25 19 8.25Z"
              fill="currentColor"
            />
            <path
              d="M19 17.25H5C4.80109 17.25 4.61032 17.171 4.46967 17.0303C4.32902 16.8897 4.25 16.6989 4.25 16.5C4.25 16.3011 4.32902 16.1103 4.46967 15.9697C4.61032 15.829 4.80109 15.75 5 15.75H19C19.1989 15.75 19.3897 15.829 19.5303 15.9697C19.671 16.1103 19.75 16.3011 19.75 16.5C19.75 16.6989 19.671 16.8897 19.5303 17.0303C19.3897 17.171 19.1989 17.25 19 17.25Z"
              fill="currentColor"
            />
          </svg>
          <div
            id="mobile-nav"
            className={open ? "mobile-nav-show" : "mobile-nav-hide"}
          >
            <svg
              fill="currentColor"
              width="40px"
              height="40px"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              onClick={handleClose}
            >
              <title>cancel</title>
              <path d="M19.587 16.001l6.096 6.096c0.396 0.396 0.396 1.039 0 1.435l-2.151 2.151c-0.396 0.396-1.038 0.396-1.435 0l-6.097-6.096-6.097 6.096c-0.396 0.396-1.038 0.396-1.434 0l-2.152-2.151c-0.396-0.396-0.396-1.038 0-1.435l6.097-6.096-6.097-6.097c-0.396-0.396-0.396-1.039 0-1.435l2.153-2.151c0.396-0.396 1.038-0.396 1.434 0l6.096 6.097 6.097-6.097c0.396-0.396 1.038-0.396 1.435 0l2.151 2.152c0.396 0.396 0.396 1.038 0 1.435l-6.096 6.096z"></path>
            </svg>
            <ul>
              <NavLink
                to={"/"}
                activeclassname="active"
                className="link"
                onClick={handleClose}
              >
                Home
              </NavLink>
              {categories.map((category) => (
                <NavLink
                  key={category}
                  to={`/catalog/${category}`}
                  activeclassname="active"
                  className="link"
                  onClick={handleClose}
                >
                  {category}
                </NavLink>
              ))}
              <NavLink
                to={"/About"}
                activeclassname="active"
                className="link"
                onClick={handleClose}
              >
                About
              </NavLink>
            </ul>
          </div>
        </div>
        <ul className="desktop">
          <NavLink to={"/"} activeclassname="active" className="link">
            Home
          </NavLink>
          {categories.map((category) => (
            <NavLink
              key={category}
              to={`/catalog/${category}`}
              activeclassname="active"
              className="link"
            >
              <li>{category}</li>
            </NavLink>
          ))}
          <NavLink to={"/About"} activeclassname="active" className="link">
            About
          </NavLink>
        </ul>
        <div id="shopping">
          <div id="nav-cart">
            <svg
              onClick={showCart}
              width="40px"
              height="40px"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.5 19.5C10.0523 19.5 10.5 19.0523 10.5 18.5C10.5 17.9477 10.0523 17.5 9.5 17.5C8.94772 17.5 8.5 17.9477 8.5 18.5C8.5 19.0523 8.94772 19.5 9.5 19.5ZM9.5 20.5C10.6046 20.5 11.5 19.6046 11.5 18.5C11.5 17.3954 10.6046 16.5 9.5 16.5C8.39543 16.5 7.5 17.3954 7.5 18.5C7.5 19.6046 8.39543 20.5 9.5 20.5Z"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.5 19.5C17.0523 19.5 17.5 19.0523 17.5 18.5C17.5 17.9477 17.0523 17.5 16.5 17.5C15.9477 17.5 15.5 17.9477 15.5 18.5C15.5 19.0523 15.9477 19.5 16.5 19.5ZM16.5 20.5C17.6046 20.5 18.5 19.6046 18.5 18.5C18.5 17.3954 17.6046 16.5 16.5 16.5C15.3954 16.5 14.5 17.3954 14.5 18.5C14.5 19.6046 15.3954 20.5 16.5 20.5Z"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 4C3 3.72386 3.22386 3.5 3.5 3.5H5.5C5.71767 3.5 5.91033 3.64082 5.97641 3.84822L9.36993 14.5H17C17.2761 14.5 17.5 14.7239 17.5 15C17.5 15.2761 17.2761 15.5 17 15.5H9.00446C8.78679 15.5 8.59413 15.3592 8.52805 15.1518L5.13453 4.5H3.5C3.22386 4.5 3 4.27614 3 4Z"
                fill="currentColor"
              />
              <path
                d="M8.5 13L6 6H19.3371C19.6693 6 19.9092 6.31795 19.8179 6.63736L18.1036 12.6374C18.0423 12.852 17.8461 13 17.6228 13H8.5Z"
                fill="currentColor"
              />
            </svg>
            <div>
              <p> {count} </p>
            </div>
          </div>
          <Link to={"/search"} className="link">
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.5 17c1.71 0 3.287-.573 4.55-1.537l4.743 4.744a1 1 0 0 0 1.414-1.414l-4.744-4.744A7.5 7.5 0 1 0 9.5 17zM15 9.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                fill="currentColor"
              />
            </svg>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar