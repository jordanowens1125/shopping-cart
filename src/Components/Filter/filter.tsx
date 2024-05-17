import { useState, useContext } from "react";
import { MAXPRICE, MINPRICE } from "../../data/price-range.ts";
import GridSvgComponent from "../../icons/grid.tsx";
import RowSvgComponent from "../../icons/row.tsx";
import Items from "../Item/Items.tsx";
import "./filter.scss";
import { CategoriesContext } from "../../Context/Context.tsx";
import {
  sortBy,
  filterByCategory,
  filterBySearch,
  A,
  Z,
  LEAST,
  GREATEST,
} from "../../functions/functions.js";
export default function Filter({ list }) {
  const [layout, setLayout] = useState(1);
  const categories = useContext(CategoriesContext);
  // const [price, setPrice] = useState(1);
  const [category, setCategory] = useState(null);
  const [sort, setSort] = useState(LEAST);
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (e) => {
    const value = e.currentTarget.value;
    if (value.length < 25) {
      setSearchInput(e.currentTarget.value);
    }
  };

  const filteredItems = sortBy(
    filterBySearch(filterByCategory(list, category), searchInput),
    sort
  );

  return (
    <>
      <div className="sort">
        <div className="layouts">
          <div
            onClick={() => setLayout(1)}
            className={layout === 1 ? "primary" : ""}
          >
            <GridSvgComponent />
          </div>
          <div
            onClick={() => setLayout(2)}
            className={layout === 2 ? "primary" : ""}
          >
            <RowSvgComponent />
          </div>
        </div>
        <div className="search">
          <input
            type="text"
            placeholder="Seach Vehicles"
            value={searchInput}
            onChange={(e) => handleInputChange(e)}
          />
          <span>
            "{searchInput === "" ? "All" : searchInput}" ({filteredItems.length}
            )
          </span>
        </div>
        <div className="categories">
          <label htmlFor="category">Categories:</label>

          <select
            name="category"
            onChange={(e) => setCategory(e.currentTarget.value)}
          >
            <option value={""}>All</option>
            {categories.map((category) => (
              <option value={category} key={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="sort-by">
          <label htmlFor="sort-by">Sort By:</label>

          <select
            name="sort-by"
            id="sort-by"
            onChange={(e) => setSort(e.currentTarget.value)}
          >
            <option value={LEAST}>Price, low to high</option>
            <option value={GREATEST}>Price, high to low</option>
            <option value={A}>Alphabetically, A-Z</option>
            <option value={Z}>Alphabetically, Z-A</option>
          </select>
        </div>

        <div className="price">
          <input
            type="range"
            min={MINPRICE}
            max={MAXPRICE}
            className="slider"
          />
        </div>
      </div>
      <Items number={layout} items={filteredItems} />
    </>
  );
}
