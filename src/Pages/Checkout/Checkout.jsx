import React from 'react'
import {CartContext} from '../../Context/Context'
import { useContext } from 'react'
import './Checkout.css'

const Checkout = () => {
    const cart = useContext(CartContext)

    return (
        <>
            <section id='Checkout'>Checkout
            {
                cart.cart.map((item)=>
                    <div key={item.index}>
                        <img src={item.image} alt="" />
                        {item.title}
                        {item.quantity} * {item.price} = ${item.price*item.quantity}
                </div>
                )
            }
            </section>
        </>
    )
}

export default Checkout