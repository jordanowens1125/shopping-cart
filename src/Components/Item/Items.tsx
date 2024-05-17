import "./Items.scss";
import Item from "./Item1.tsx";
export default function Items({ number = 1, items = [] }) {
  return (
    <div className="full-width">
      {number === 1 && (
        <div className="items1">
          {items.map((item) => (
            <Item item={item} key={item.title} />
          ))}
        </div>
      )}
      {number === 2 && (
        <div className="items2">
          {items.map((item) => (
            <Item item={item} key={item.title} />
          ))}
        </div>
      )}
    </div>
  );
}
