import React, {useContext , useRef} from 'react'
import { Link } from 'react-router-dom'
import {CartContext} from '../../Context/Context'
import './Cart.css'
import useOutsideClick from '../../Hooks/useOutsideClick'

const Cart = () => {
  const cart = useContext(CartContext)
  const impactRef = useRef();

  const handleClose = () => {
    let element = document.getElementById("cart");
    element.classList.remove("open");
  }

  useOutsideClick(impactRef, () => handleClose()); //Change my dropdown state to close when clicked outside

  const getTotal = () =>{
    let total = 0
    for (let i = 0; i < cart.cart.length; i++)
    {
      total += cart.cart[i].price * cart.cart[i].quantity
    }
    return total
  }
  const updateItemQuantity = (num,index) =>{
    //make copy of cart
    let updatedCart = [...cart.cart]
    let currentCount = updatedCart[index].quantity
    currentCount += num
    updatedCart[index].quantity = currentCount
    //remove item if less thn 1
    if(currentCount < 1){
      updatedCart.splice(index,1)
    }
    cart.setCart(updatedCart)

  }
  const total = getTotal()
  
  return (
    <>
      <div id='cart' ref={impactRef}>
        Cart
        <ul>
          {
          cart.cart.map((item,index)=>
            <li key={index}>
                <p>{item.title}</p>
                <p>{item.quantity}</p>
                <button onClick={() => updateItemQuantity(1,index)}>Add</button>
                <button onClick={() => updateItemQuantity(-1,index)}>Subtract</button>
            </li>
          )
        }
        </ul>
        
        <div>
          ${total.toFixed(2)}
        </div>
        <div>
          <Link to={'/checkout'}>Checkout</Link>
        </div>
      </div>
    </>
    
  )
}

export default Cart