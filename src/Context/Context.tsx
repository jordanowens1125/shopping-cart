import { createContext } from "react";
import { cars } from "../data/cars.ts";
import { suvs } from "../data/suvs.ts";
export const CartContext = createContext([]);
export const ProductsContext = createContext([...cars, ...suvs]);
export const CategoriesContext = createContext([]);
export const NotificationContext = createContext([]);

export const CategoriesProvider = ({ children }) => {
  const data = ["Cars", "Suvs"];

  const { Provider } = CategoriesContext;
  return <Provider value={data}>{children}</Provider>;
};

export const NotificationProvider = ({ children }) => {
  const { Provider } = NotificationContext;

  return <Provider>{children}</Provider>;
};
