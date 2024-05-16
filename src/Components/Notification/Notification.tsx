import React, { useContext, useState } from "react";
import { CartContext,  } from "../../Context/Context.tsx";
import "./Notification.css";

const Notification = () => {
  const cart = useContext(CartContext);

  const [open, setOpen] = useState(false);
  
  return (
    <>
    </>
  );
};

export default Notification;
