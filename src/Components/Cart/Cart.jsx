import React, {useContext , useRef} from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/Context'
import './Cart.css'
import useOutsideClick from '../../Hooks/useOutsideClick'

const Cart = () => {
  const cart = useContext(CartContext)
  const impactRef = useRef();

  const handleClose = () => {
    const element = document.getElementById("cart");
    element.classList.remove("cart-show");
    element.classList.add("cart-hide");
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
    //remove item if less than 1
    if(currentCount < 1){
      updatedCart.splice(index,1)
    }
    cart.setCart(updatedCart)
  }

  const removeItemFromChart = (index) => {
    let updatedCart = [...cart.cart]
    updatedCart.splice(index, 1)
    cart.setCart(updatedCart)
  }

  const total = getTotal()
  
  return (
    <>
      <div id="cart" ref={impactRef} className="cart-hide">
        <span>Cart</span>
        <svg
          fill="currentColor"
          width="40px"
          height="40px"
          viewBox="0 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          onClick={handleClose}
          className="close"
        >
          <title>cancel</title>
          <path d="M19.587 16.001l6.096 6.096c0.396 0.396 0.396 1.039 0 1.435l-2.151 2.151c-0.396 0.396-1.038 0.396-1.435 0l-6.097-6.096-6.097 6.096c-0.396 0.396-1.038 0.396-1.434 0l-2.152-2.151c-0.396-0.396-0.396-1.038 0-1.435l6.097-6.096-6.097-6.097c-0.396-0.396-0.396-1.039 0-1.435l2.153-2.151c0.396-0.396 1.038-0.396 1.434 0l6.096 6.097 6.097-6.097c0.396-0.396 1.038-0.396 1.435 0l2.151 2.152c0.396 0.396 0.396 1.038 0 1.435l-6.096 6.096z"></path>
        </svg>
        <div className="cart-info">
          <ul>
            {cart.cart.map((item, index) => (
              <li key={index}>
                <p>{item.title}</p>
                <p>
                  $ {item.price.toLocaleString("en", { useGrouping: true })}.00
                </p>
                <img src={item.image} alt={item.title} />
                <div className="product-actions">
                  <button onClick={() => updateItemQuantity(-1, index)}>
                    Subtract
                  </button>
                  <span className="product-quantity">{item.quantity}</span>
                  <button onClick={() => updateItemQuantity(1, index)}>
                    Add
                  </button>
                  <svg
                    fill="currentColor"
                    width="40px"
                    height="40px"
                    viewBox="0 0 32 32"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={(e) => removeItemFromChart(index)}
                  >
                    <title>cancel2</title>
                    <path d="M19.587 16.001l6.096 6.096c0.396 0.396 0.396 1.039 0 1.435l-2.151 2.151c-0.396 0.396-1.038 0.396-1.435 0l-6.097-6.096-6.097 6.096c-0.396 0.396-1.038 0.396-1.434 0l-2.152-2.151c-0.396-0.396-0.396-1.038 0-1.435l6.097-6.096-6.097-6.097c-0.396-0.396-0.396-1.039 0-1.435l2.153-2.151c0.396-0.396 1.038-0.396 1.434 0l6.096 6.097 6.097-6.097c0.396-0.396 1.038-0.396 1.435 0l2.151 2.152c0.396 0.396 0.396 1.038 0 1.435l-6.096 6.096z"></path>
                  </svg>
                </div>
              </li>
            ))}
          </ul>
          <div>
            Total: ${total.toLocaleString("en", { useGrouping: true })}.00
          </div>
        </div>
        <Link id="checkout-link" to={"/checkout"} onClick={handleClose}>
          Checkout
        </Link>
      </div>
    </>
  );
}

export default Cart