import React, { useContext } from "react";
import { ProductsContext } from "../../Context/Context.tsx";
import "./Catalog.scss";
import Filter from "../Filter/filter.tsx";

const Catalog = () => {
  const items = useContext(ProductsContext);

  //sort list
  // if (leastToGreatest !== "default") {
  //   if (leastToGreatest === "least") {
  //     filteredList.sort(function (a, b) {
  //       return a.price - b.price;
  //     });
  //   } else {
  //     filteredList.sort(function (a, b) {
  //       return b.price - a.price;
  //     });
  //   }
  // }

  return (
    <section>
      <div id="Catalog">
        <Filter list={items} />
      </div>
    </section>
  );
};

export default Catalog;
