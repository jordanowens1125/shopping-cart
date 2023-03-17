import React from 'react'
import './Item.css'

const Item = ({ item }) => {
  return (
    <>
      <li className="item">
        <img src={item.image} alt={item.title} style={{objectFit: "cover"}} />
        <div className="content">
          <h4>{item.title}</h4>
          <p>${item.price.toFixed(2)}</p>
        </div>
      </li>
    </>
  );
}

export default Item