import React, { useContext,useState } from 'react'
import './Search.css'
import { ProductsContext } from "../../Context/Context";
import Item from '../../Components/Item/Item';
import { Link } from "react-router-dom";

const Search = () => {
  const [searchInput, setSearchInput] = useState('')
  const items = useContext(ProductsContext)
  const filteredItems = items.filter((item) => {
    const capitalizedTitle = item.title.toUpperCase()
    return capitalizedTitle.includes(searchInput.toUpperCase());
  })
  const handleInputChange = (e) => {
    setSearchInput(e.currentTarget.value)
  }
  return (
    <section id="Search">
      <div className="search-container">
        <input type="text" value={searchInput} onChange={handleInputChange} placeholder='Search'/>
        <span>
          "{searchInput === ''? 'All': searchInput}"
          ({filteredItems.length})
        </span>
      </div>
      <ul id='search-results'>
          {filteredItems.map((item) => {
            return (
              <Link
                to={`/catalog/product/${item.id}`}
                key={item.id}
                style={{ textDecoration: "inherit" }}
              >
                <Item item={item} />
              </Link>
            );
          })}
      </ul>
    </section>
  );
}

export default Search