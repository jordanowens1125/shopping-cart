import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {  useState } from "react";
import Catalog from "./Components/Catalog/Catalog";
import About from './Pages/About/About'
import './App.css';
import Product from './Pages/Product/Product';
import {CartContext, ProductsProvider, CategoriesProvider} from "./Context/Context";
import Home from './Pages/Home/Home';
import Layout from "./Pages/Layout/Layout";
import Checkout from './Pages/Checkout/Checkout'
import Search from './Pages/Search/Search'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
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
          <RouterProvider router={router}>
          </RouterProvider>
        </ProductsProvider>
      </CategoriesProvider>
    </CartContext.Provider>
  );
}

export default App;
