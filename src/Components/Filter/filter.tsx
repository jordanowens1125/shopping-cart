import { useState } from "react";
import { MAXPRICE, MINPRICE } from "../../data/price-range.ts";
import GridSvgComponent from "../../icons/grid.tsx";
import RowSvgComponent from "../../icons/row.tsx";
import Items from "../Item/Items.tsx";
import "./filter.scss";
export default function Filter({ list }) {
  const [layout, setLayout] = useState(1);
  const [price, setPrice] = useState(1);
  const [category, setCategory] = useState(1);
  const [sortBy, setSortBy] = useState(1);

  // sort list function
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

        <div className="categories">
          <label htmlFor="cars">Categories:</label>

          <select name="cars" id="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>

        <div className="sort-by">
          <label htmlFor="sort-by">Sort By:</label>

          <select name="sort-by" id="sort-by">
            <option value="low">Price, low to high</option>
            <option value="high">Price, high to low</option>
            <option value="a">Alphabetically, A-Z</option>
            <option value="z">Alphabetically, Z-A</option>
          </select>
        </div>

        <div className="price">
        <input type="range" min={MINPRICE} max={MAXPRICE} className="slider" />
      </div>
      </div>
      <Items number={layout} items={list} />
    </>
  );
}
