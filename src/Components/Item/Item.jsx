import React from 'react'

const Item = (item) => {
  return (
    <>
      <div>
        <li className="item">
          <div style={{ backgroundImage: `url(${item.image})` }}></div>
          <h4>{item.title}</h4>
          <p>$ {item.price.toFixed(2)}</p>
        </li>
      </div>
    </>
  );
}

export default Item