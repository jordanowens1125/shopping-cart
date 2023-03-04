import React from 'react'
import {CartContext} from '../../Context/Context'
import { useContext } from 'react'
const Checkout = () => {
    const cart = useContext(CartContext)

    return (
        <>
            <div id='Checkout'>Checkout
{
                cart.cart.map((item)=>
                <div key={item.index}>
                    {item.title}
                </div>
                )
            }

            </div>
            
        </>
    )
}

export default Checkout