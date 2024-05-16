import React, { useContext } from "react";
import { ProductsContext, CartContext } from "../../Context/Context.tsx";
import { useParams } from "react-router-dom";
import "./Product.css";

const Product = () => {
  const cart = useContext(CartContext);
  const items = useContext(ProductsContext);
  const products = [...items];
  const params = useParams();
  let id = params.id;

  const product = products[id];

  const checkIfItemInCart = (item) => {
    //first see if you can find item in cart
    let itemInCart = false;
    for (let i = 0; i < cart.cart.length; i++) {
      if (item.title === cart.cart[i].title) {
        itemInCart = true;
      }
    }
    return itemInCart;
  };

  const getItemInCart = (item) => {
    //first see if you can find item in cart
    for (let i = 0; i < cart.cart.length; i++) {
      if (item.title === cart.cart[i].title) {
        return i;
      }
    }
  };

  const showNotification = () => {};

  const addProduct = () => {
    const updatedCart = [...cart.cart];
    const itemInCart = checkIfItemInCart(product);
    //if yes then just update that item quantity
    if (itemInCart) {
      //find item in cart to get the correct id
      let index = getItemInCart(product);
      cart.cart[index].quantity++;
    } else {
      //if no then add item to cart
      const newItem = items[id];
      newItem.quantity = 1;
      updatedCart.push(newItem);
    }
    cart.setCart(updatedCart);
    //show cart
    showNotification();
  };

  return (
    <>
      <section>
        <div id="Product">
          <img src={product.image} alt={product.title}></img>
          <div className="Product-details">
            <h2>{product.title}</h2>
            <p>
              {/* {product.description} */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse faucibus tortor sed venenatis efficitur. Quisque sit
              amet sapien congue, lobortis turpis consequat, auctor metus.
              Maecenas feugiat vulputate augue, a varius ligula maximus eu.
              Aliquam vitae diam neque. Praesent efficitur porttitor est, eget
              facilisis eros gravida vel. Mauris vel vestibulum tortor.
              Curabitur ac nisi lectus.
            </p>
            <p>
              ${product.price.toLocaleString("en", { useGrouping: true })}.00
            </p>
            <button onClick={() => addProduct()}>Add To Cart</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
