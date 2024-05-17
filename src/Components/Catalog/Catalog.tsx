import React, { useContext, useState } from "react";
import { ProductsContext } from "../../Context/Context.tsx";
import "./Catalog.scss";
import { useParams } from "react-router-dom";
import Filter from "../Filter/filter.tsx";

const Catalog = () => {
  const items = useContext(ProductsContext);
  const filter = useParams().category;
  const [layoutnumber, setLayout] = useState(1);
  let filteredList = [...items];
  // const [sorted, setSort] = useState(false)
  const [leastToGreatest, setLeastToGreatest] = useState("default");
  //make sure something is there for parameter or just return the list
  if (filter) {
    let newList = [];
    for (let i = 0; i < filteredList.length; i++) {
      if (filteredList[i].category === filter) {
        newList.push(filteredList[i]);
      }
    }
    filteredList = newList;
  }

  //sort list
  if (leastToGreatest !== "default") {
    if (leastToGreatest === "least") {
      filteredList.sort(function (a, b) {
        return a.price - b.price;
      });
    } else {
      filteredList.sort(function (a, b) {
        return b.price - a.price;
      });
    }
  }

  return (
    <section>
      <div id="Catalog">
        <Filter
          list={filteredList}
        />
      </div>
    </section>
  );
};

export default Catalog;
