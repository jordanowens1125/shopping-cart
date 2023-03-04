import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { useState } from "react";
import Catalog from "./Components/Catalog/Catalog";
import About from './Pages/About/About'
import './App.css';
import Product from './Pages/Product/Product';
import {CartContext,ItemsContext} from "./Context/Context";
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
        path: "/catalog/:category",
        element: <Catalog />,
      },
      {
        path:'/catalog/product/:id',
        element: <Product/>
      },
      {
        path:'/checkout',
        element: <Checkout/>
      },
      {
        path:'/search',
        element: <Search/>
      },
    ],
  },
]);

function App() {
  const [cart, setCart] = useState([]);
  const [items, setItems] = useState(
    [
      {
        index:0,
        title:'IDK',
        price: 299.00,
        image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2xvdGhlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60',
        hover: 'https://images.unsplash.com/photo-1517502166878-35c93a0072f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60',
        category:'Women',
      },
      {
        index:1,
        title:'IDK2',
        price: 699.00,
        image: 'https://images.unsplash.com/photo-1675955322661-88af9f6bd198?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60',
        hover: 'https://images.unsplash.com/photo-1517502166878-35c93a0072f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60',
        category:'Men',
      },
      {
        index:2,
        title:'IDK',
        price: 299.00,
        image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bmlrZSUyMHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        hover: 'https://images.unsplash.com/photo-1517502166878-35c93a0072f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60',
        category:'Women',
      },
      {
        index:3,
        title:'IDK2',
        price: 699.00,
        image: 'https://images.unsplash.com/photo-1675955322661-88af9f6bd198?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60',
        hover: 'https://images.unsplash.com/photo-1517502166878-35c93a0072f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60',
        category:'Men',
      },
      {
        index:4,
        title:'OFF White X Nike Air Force 1low-top',
        price: 299.00,
        image: 'https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG5pa2UlMjBzaG9lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60',
        hover: 'https://images.unsplash.com/photo-1517502166878-35c93a0072f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60',
        category:'Men',
      },
      {
        index:5,
        title:'Green and black athletic shoe',
        price: 699.00,
        image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmlrZSUyMHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        hover: 'https://images.unsplash.com/photo-1517502166878-35c93a0072f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60',
        category:'Men',
      },
    ]
  )

  return (
    <CartContext.Provider value={{cart,setCart}}>
      <ItemsContext.Provider value={{items, setItems}}>
        <RouterProvider router={router} >
          <div className="App">
            
          </div>
        </RouterProvider>
      </ItemsContext.Provider>
    </CartContext.Provider>
  );
}

export default App;
