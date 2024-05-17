import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/Context.tsx";
import "./Cart.scss";
import LeftSvgComponent from "../../icons/left.tsx";
import RightSvgComponent from "../../icons/right.tsx";

const Cart = ({ showCart, count, setShowCart }) => {
  const cart = useContext(CartContext);

  const handleClose = () => {
    setShowCart(false);
  };

  const getTotal = () => {
    let total = 0;
    for (let i = 0; i < cart.cart.length; i++) {
      total += cart.cart[i].price * cart.cart[i].quantity;
    }
    return total;
  };
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
  };

  const removeItemFromChart = (index) => {
    let updatedCart = [...cart.cart];
    updatedCart.splice(index, 1);
    cart.setCart(updatedCart);
  };

  const total = getTotal();

  return (
    <>
      <div
        className={showCart ? "modal show" : "modal hide"}
        onClick={() => setShowCart(false)}
      ></div>

      <div id="cart" className={showCart ? "cart-show" : "cart-hide"}>
        <div className="top">
          <span>Cart</span>
          <div className="close" onClick={handleClose}>
            <svg
              fill="currentColor"
              width="40px"
              height="40px"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>cancel</title>
              <path d="M19.587 16.001l6.096 6.096c0.396 0.396 0.396 1.039 0 1.435l-2.151 2.151c-0.396 0.396-1.038 0.396-1.435 0l-6.097-6.096-6.097 6.096c-0.396 0.396-1.038 0.396-1.434 0l-2.152-2.151c-0.396-0.396-0.396-1.038 0-1.435l6.097-6.096-6.097-6.097c-0.396-0.396-0.396-1.039 0-1.435l2.153-2.151c0.396-0.396 1.038-0.396 1.434 0l6.096 6.097 6.097-6.097c0.396-0.396 1.038-0.396 1.435 0l2.151 2.152c0.396 0.396 0.396 1.038 0 1.435l-6.096 6.096z"></path>
            </svg>
          </div>
        </div>

        <div className="cart-info">
          {cart.cart.length === 0 && (
            <div className="empty">No Items In Cart</div>
          )}

          <ul>
            {cart.cart.map((item, index) => (
              <li key={index} className="cart-item">
                <p className="title">{item.title}</p>
                <p>
                  $ {item.price.toLocaleString("en", { useGrouping: true })}.00
                </p>
                <img src={item.images[0]} alt={item.title} />
                <div className="product-actions">
                  <span className="left">
                    <button onClick={() => updateItemQuantity(-1, index)}>
                      <LeftSvgComponent />
                    </button>
                    <span className="product-quantity">{item.quantity}</span>
                    <button onClick={() => updateItemQuantity(1, index)}>
                      <RightSvgComponent />
                    </button>
                  </span>

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
        {/* <Link id="checkout-link" to={"/checkout"} onClick={handleClose}>
          Checkout
        </Link> */}
        <p>Checkout</p>
      </div>
    </>
  );
};

export default Cart;
