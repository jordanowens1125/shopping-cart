import { createHashRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import Catalog from "./Components/Catalog/Catalog.tsx";
import "./App.scss";
import Product from "./Pages/Product/Product.tsx";
import {
  CartContext,
  ProductsProvider,
  CategoriesProvider,
} from "./Context/Context.tsx";
import Home from "./Pages/Home/Home.tsx";
import Layout from "./Pages/Layout/Layout.tsx";
import Checkout from "./Pages/Checkout/Checkout.tsx";
import Search from "./Pages/Search/Search.tsx";

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
      {
        path: "/search",
        element: <Search />,
      },
    ],
  },
]);

function App() {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <CategoriesProvider>
        <ProductsProvider>
          <div className="App">
            <RouterProvider router={router}></RouterProvider>
          </div>
        </ProductsProvider>
      </CategoriesProvider>
    </CartContext.Provider>
  );
}

export default App;
