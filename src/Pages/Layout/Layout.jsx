import React from 'react'
import { Outlet } from "react-router-dom";
import Cart from '../../Components/Cart/Cart';
import Navbar from '../../Components/Navbar/Navbar'
const Layout = () => {
  return (
    <>
      <Navbar />
      <Cart />
      <div id='Layout'>
        <Outlet/>
      </div>
    </>
  )
}

export default Layout