import React from "react";
import "./Item1.css";
import { Link } from "react-router-dom";

const Item = ({ item, addToCart }) => {
  return (
    <div className="item">
      <Link
        to={`/catalog/product/${item.id}`}
        style={{ textDecoration: "inherit" }}
        className="item"
      >
        <img src={item.images[0]} alt={item.title} style={{ objectFit: "cover" }} />
      </Link>
      <div className="content">
        <h4>{item.title}</h4>
        <p>$ {item.price.toLocaleString("en", { useGrouping: true })}.00</p>
        <span onClick={() => addToCart()}>Add To Cart</span>
      </div>
    </div>
  );
};

export default Item;
