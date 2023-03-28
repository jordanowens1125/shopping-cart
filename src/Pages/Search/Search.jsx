import React, { useContext,useState } from 'react'
import './Search.css'
import { ProductsContext } from "../../Context/Context";
import Item from '../../Components/Item/Item';

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
        <input type="text" value={searchInput} onChange={handleInputChange} />
        <span>
          "{searchInput === ''? 'All': searchInput}"
          ({filteredItems.length})
        </span>
      </div>
      <ul id='search-results'>
          {filteredItems.map((item) => {
            return (
              <Item item={item} key={item.title } />
            );
          })}
      </ul>
    </section>
  );
}

export default Search