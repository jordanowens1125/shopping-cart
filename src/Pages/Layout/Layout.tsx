import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar.tsx";
import Notification from "../../Components/Notification/Notification.tsx";
const Layout = () => {
  return (
    <>
      <Navbar />
      <Notification />
      <Outlet />
    </>
  );
};

export default Layout;
