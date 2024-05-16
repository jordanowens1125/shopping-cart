import React, { useContext, useState } from 'react'
import { ProductsContext } from '../../Context/Context'
import { Link } from 'react-router-dom'
import './Catalog.css'
import {useParams} from "react-router-dom";
import Item from '../Item/Item'

const Catalog = () => {
    const items = useContext(ProductsContext)
    const filter = useParams().category
    let filteredList = [...items]
    // const [sorted, setSort] = useState(false)
    const [leastToGreatest,setLeastToGreatest] = useState('default')
    //make sure something is there for parameter or just return the list
    if (filter)
    {
        let newList = []
        for (let i = 0; i < filteredList.length; i++){
            if (filteredList[i].category === filter){
                newList.push(filteredList[i])
            }
        }
        filteredList = newList
    }
    
    const handlePriceChange = (e) =>{
        setLeastToGreatest(e.currentTarget.value)
    }

    //sort list 
    if(leastToGreatest!=='default')
    {
        if(leastToGreatest === 'least')
        {
            filteredList.sort(function(a,b){
            return a.price - b.price
        })
        }
        else
        {
            filteredList.sort(function(a,b){
                return b.price - a.price
            })
        }
    }
    
    return (
        <>
            <section>
                <div id='Catalog'>
                        <div id = 'sort'>
                            <div id="price">
                                <label htmlFor="price">Sort:</label>
                                <select name="cars" id="cars" value={leastToGreatest} onChange={handlePriceChange}>
                                    <option value="default">Default</option>
                                    <option value="least">Price: Lowest To Highest</option>
                                    <option value="greatest">Price: Highest To Lowest</option>
                                </select>
                            </div>
                            {
                            /* <div id="price">
                                <label htmlFor="price">Sort:</label>
                                <select name="cars" id="cars" value=''>
                                    <option value="default">Default</option>
                                    <option value="lowest">Price: Lowest To Highest</option>
                                    <option value="highest">Price: Highest To Lowest</option>
                                </select>
                            </div>
                            <div id="price">
                                <label htmlFor="price">Sort:</label>
                                <select name="cars" id="cars">
                                    <option value="default">Default</option>
                                    <option value="lowest">Price: Lowest To Highest</option>
                                    <option value="highest">Price: Highest To Lowest</option>
                                </select>
                            </div> */
                            }
                        </div>
                        <ul id ='items'>
                            {filteredList.map((item)=>
                                <Link to={`/catalog/product/${item.id}`} key={item.id} style={{textDecoration:'inherit'}}>
                                        <Item item={item} />
                                </Link>
                                )
                            }
                        </ul>
                    </div>
            </section>
        </>
    )
}

export default Catalog