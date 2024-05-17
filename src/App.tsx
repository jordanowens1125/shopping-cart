import { createHashRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import Catalog from "./Components/Catalog/Catalog.tsx";
import "./App.scss";
import Product from "./Pages/Product/Product.tsx";
import {
  CartContext,
  ProductsContext,
  CategoriesProvider,
} from "./Context/Context.tsx";
import Home from "./Pages/Home/Home.tsx";
import Layout from "./Pages/Layout/Layout.tsx";
import Checkout from "./Pages/Checkout/Checkout.tsx";
import { cars } from "./data/cars.ts";
import { suvs } from "./data/suvs.ts";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/catalog",
        element: <Catalog />,
      },
      {
        path: "/catalog/:category",
        element: <Catalog />,
      },
      {
        path: "/catalog/product/:id",
        element: <Product />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);

function App() {
  const [cart, setCart] = useState([]);
  const products = [...cars, ...suvs];
  const [notification, setNotification] = useState({});

  const checkIfItemInCart = (item) => {
    //first see if you can find item in cart

    let itemInCart = false;
    for (let i = 0; i < cart.length; i++) {
      if (item.title === cart[i].title) {
        return [cart[i], i];
      }
    }
    return itemInCart;
  };

  const addToCart = (item) => {
    const updatedCart = [...cart];
    const itemInCart = checkIfItemInCart(item);
    // //if yes then just update that item quantity
    if (itemInCart) {
      let index = itemInCart[1];
      updatedCart[index].quantity++;
    } else {
      //if no then add item to cart
      const newItem = products.find((x) => x.id === item.id);
      newItem.quantity = 1;
      updatedCart.push(newItem);
    }
    setCart(updatedCart);
    // showNotification();
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart }}>
      <CategoriesProvider>
        <ProductsContext.Provider value={products}>
          <div className="App">
            <RouterProvider router={router}></RouterProvider>
          </div>
        </ProductsContext.Provider>
      </CategoriesProvider>
    </CartContext.Provider>
  );
}

export default App;
