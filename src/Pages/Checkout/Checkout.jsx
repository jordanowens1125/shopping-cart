import React from 'react'
import {CartContext} from '../../Context/Context'
import { useContext } from 'react'
import './Checkout.css'

const Checkout = () => {
    const cart = useContext(CartContext)

    const getTotal = () => {
      let total = 0;
      for (let i = 0; i < cart.cart.length; i++) {
        total += cart.cart[i].price * cart.cart[i].quantity;
      }
      return total;
    };

    const total = getTotal();

  const updateItemQuantity = (num, index) => {
    //make copy of cart
    let updatedCart = [...cart.cart];
    let currentCount = updatedCart[index].quantity;
    currentCount += num;
    updatedCart[index].quantity = currentCount;
    //remove item if less than 1
    if (currentCount < 1) {
      updatedCart.splice(index, 1);
    }
    cart.setCart(updatedCart);
  }
  
  const removeItemFromChart = (index) => {
    let updatedCart = [...cart.cart];
    updatedCart.splice(index, 1);
    cart.setCart(updatedCart);
  };


    return (
      <>
        <section id="Checkout">
          <ul>
            {cart.cart.map((item, index) => (
              <li key={item.title} className="checkout-item">
                <img src={item.image} alt={item.image} />
                <div className="checkout-item-info">
                  <div className="left">
                    <span>{item.title}</span>
                    <span>
                      $ {item.price.toLocaleString("en", { useGrouping: true })}
                      .00
                    </span>
                  </div>
                  <div className="right">
                    <p>Quantity</p>
                    <span>
                      
                      <button onClick={() => updateItemQuantity(-1, index)}>
                        -
                      </button>
                      {item.quantity}
                      <button onClick={() => updateItemQuantity(1, index)}>
                        +
                      </button>
                      <svg
                        fill="currentColor"
                        width="20px"
                        height="20px"
                        viewBox="0 0 32 32"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={(e) => removeItemFromChart(index)}
                      >
                        <title>cancel2</title>
                        <path d="M19.587 16.001l6.096 6.096c0.396 0.396 0.396 1.039 0 1.435l-2.151 2.151c-0.396 0.396-1.038 0.396-1.435 0l-6.097-6.096-6.097 6.096c-0.396 0.396-1.038 0.396-1.434 0l-2.152-2.151c-0.396-0.396-0.396-1.038 0-1.435l6.097-6.096-6.097-6.097c-0.396-0.396-0.396-1.039 0-1.435l2.153-2.151c0.396-0.396 1.038-0.396 1.434 0l6.096 6.097 6.097-6.097c0.396-0.396 1.038-0.396 1.435 0l2.151 2.152c0.396 0.396 0.396 1.038 0 1.435l-6.096 6.096z"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div id="order-summary">
            <span>Order Summary</span>
            <div>
              Total : ${total.toLocaleString("en", { useGrouping: true })}.00
            </div>
          </div>
        </section>
      </>
    );
}

export default Checkout