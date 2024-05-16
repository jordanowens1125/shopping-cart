import { createContext,  } from "react";
import { cars } from '../data/cars'
import { suvs } from "../data/suvs";
export const CartContext = createContext([])
export const ProductsContext = createContext(cars)
export const CategoriesContext = createContext([])

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