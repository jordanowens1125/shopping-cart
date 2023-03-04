import React, { useContext, useState } from 'react'
import { ItemsContext } from '../../Context/Context'
import { Link } from 'react-router-dom'
import './Catalog.css'
import {useParams} from "react-router-dom";

const Catalog = () => {
    const items = useContext(ItemsContext).items
    const filter = useParams().category
    let filteredList = [...items]
    const [sorted, setSort] = useState(false)
    const [leastToGreatest,setLeastToGreatest] = useState('default')
    // console.log(filter)
    //make sure something is there for parameter or just return the list
    if (filter!=='catalog')
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
            <div id = 'Catalog'>
                <div>
                    <div id = 'sort'>
                        <div id="price">
                            <label htmlFor="price">Sort:</label>
                            <select name="cars" id="cars" value={leastToGreatest} onChange={handlePriceChange}>
                                <option value="default">Default</option>
                                <option value="least">Price: Lowest To Highest</option>
                                <option value="greatest">Price: Highest To Lowest</option>
                            </select>
                        </div>
                        {/* <div id="price">
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
                        </div> */}
                    
                    </div>
                    <ul id ='items'>
                    {
                        filteredList.map((item)=>
                        <Link to={`/catalog/product/${item.index}`} key={item.index}>
                            <li  className='item'>
                                <div style={{backgroundImage : `url(${item.image})`}} ></div>
                                <h4>{item.title}</h4>
                                <p>$ {item.price.toFixed(2)}</p>
                            </li>
                        </Link>
                        )
                        }  
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Catalog