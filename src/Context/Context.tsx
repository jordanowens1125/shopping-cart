import { createContext,  } from "react";
import { cars } from "../data/cars.ts";
import { suvs } from "../data/suvs.ts";
export const CartContext = createContext([])
export const ProductsContext = createContext(cars)
export const CategoriesContext = createContext([])
export const NotificationContext = createContext([]);

export const CategoriesProvider = ({children}) => {
    const data = ['cars','suvs']
    
    const {Provider} = CategoriesContext
    return <Provider value={data}>{children}</Provider>;
};


export const ProductsProvider = ({ children }) => {
  const data = [...cars,  ...suvs]
  const { Provider } = ProductsContext;
  return <Provider value={data}>{children}</Provider>;
};