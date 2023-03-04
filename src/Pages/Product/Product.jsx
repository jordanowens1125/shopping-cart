import React, { useContext } from 'react'
import { ItemsContext,CartContext } from '../../Context/Context'
import {useParams} from "react-router-dom";
import './Product.css'

const Product = () => {
  const cart =  useContext(CartContext)
  const items = useContext(ItemsContext).items
  const products = [...items]
  const params = useParams()
  let id = params.id
  const product = products[id]
  const checkIfItemInCart = (item) => {
    //first see if you can find item in cart
    let itemInCart = false
    for (let i = 0; i < cart.cart.length; i++)
    {
        if (item.title === cart.cart[i].title)
        {
            itemInCart = true;
        }
    }
    return itemInCart
}

const getItemInCart = (item) => {
  //first see if you can find item in cart
  for (let i = 0; i < cart.cart.length; i++)
  {
      if (item.title === cart.cart[i].title)
      {
          return i
      }
  }
}

const showCart = () => {
  let element = document.getElementById("cart");
  element.classList.add("open");
}

const addProduct = () =>{
    const updatedCart = [...cart.cart]
    const itemInCart = checkIfItemInCart(product)
    //if yes then just update that item quantity
    if(itemInCart){
      //find item in cart to get the correct id
        let index = getItemInCart(product)
        cart.cart[index].quantity++
    }
    else{
        //if no then add item to cart
        const newItem = items[id]
        newItem.quantity = 1;
        updatedCart.push(newItem)
    }
    cart.setCart(updatedCart)
    //show cart
    showCart()
}

  return (
    <>
      <div className='Product'>
        <div>{product.title}</div>
        <button onClick={() => addProduct()}>Add me</button>
      </div>
    </>
  )
}

export default Product