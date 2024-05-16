import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <Link
      to={`/catalog/product/${item.id}`}
      style={{ textDecoration: "inherit" }}
      className="item"
    >
      <img src={item.image} alt={item.title} style={{ objectFit: "cover" }} />
      <div className="content">
        <h4>{item.title}</h4>
        <p>$ {item.price.toLocaleString("en", { useGrouping: true })}.00</p>
      </div>
    </Link>
  );
};

export default Item;
