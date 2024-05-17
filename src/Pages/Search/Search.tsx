import React, { useContext, useState } from "react";
import "./Search.css";
import { ProductsContext } from "../../Context/Context.tsx";
import Items from "../../Components/Item/Items.tsx";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const items = useContext(ProductsContext);
  const filteredItems = items.filter((item) => {
    const capitalizedTitle = item.title.toUpperCase();
    return capitalizedTitle.includes(searchInput.toUpperCase());
  });
  const handleInputChange = (e) => {
    setSearchInput(e.currentTarget.value);
  };
  return (
    <section id="Search">
      <div className="search-container">
        <input
          type="text"
          value={searchInput}
          onChange={handleInputChange}
          placeholder="Search"
        />
        <span>
          "{searchInput === "" ? "All" : searchInput}" ({filteredItems.length})
        </span>
      </div>
      <Items number={1} items={filteredItems} />
    </section>
  );
};

export default Search;
