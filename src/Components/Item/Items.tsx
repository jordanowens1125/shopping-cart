import "./Items.scss";
import Item from "./Item1.tsx";
import { useContext } from "react";
import { CartContext } from "../../Context/Context.tsx";
export default function Items({ number = 1, items = [] }) {
  const addToCart = useContext(CartContext).addToCart;
  return (
    <div className="full-width">
      {number === 1 && (
        <div className="items1">
          {items.map((item) => (
            <Item
              item={item}
              key={item.title}
              addToCart={() => addToCart(item)}
            />
          ))}
        </div>
      )}
      {number === 2 && (
        <div className="items2">
          {items.map((item) => (
            <Item
              item={item}
              key={item.title}
              addToCart={() => addToCart(item)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
