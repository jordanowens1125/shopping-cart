import React from 'react'
import './Item.css'

const Item = ({ item }) => {
  return (
    <>
      <li className="item">
        <img src={item.image} alt={item.title} style={{objectFit: "cover"}} />
        <div className="content">
          <h4>{item.title}</h4>
          <p>$ {item.price.toLocaleString('en', {useGrouping:true})}.00</p>
        </div>
      </li>
    </>
  );
}

export default Item