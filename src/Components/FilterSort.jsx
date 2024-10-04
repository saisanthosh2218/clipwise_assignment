// import  { useState } from "react";
import "../CSS Styles/filterSort.css";

const FilterSort = () => {
  //   const [filter, setFilter] = useState("All Products");
  //   const [sort, setSort] = useState("Best Selling");

  //   const handleFilterChange = (e) => {
  //     setFilter(e.target.value);
  //   };

  //   const handleSortChange = (e) => {
  //     setSort(e.target.value);
  //   };

  return (
    <div className="filter-sort-container">
      <div className="filter">
        <label htmlFor="filter">Filter: </label>
        <select id="filter">
          <option value="All Products">All Products</option>
          <option value="Best Selling">Best Selling</option>
          <option value="Price">Price</option>
        </select>
      </div>
      <div className="sort">
        <label htmlFor="sort">Sort: </label>
        <select id="sort">
          <option value="Best Selling">Best Selling</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSort;
