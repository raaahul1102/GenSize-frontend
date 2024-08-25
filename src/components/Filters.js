import React from "react";
import "./Filters.css";

function Filters({
  apparelType,
  handleApparelChange,
  brand,
  handleBrandChange,
}) {
  return (
    <div className="filters-container">
      <h2>Filters</h2>

      <div className="filter-group">
        <h4>Categories</h4>
        <div className="filter-options">
          <label>
            <input
              type="checkbox"
              value="tops"
              checked={apparelType === "tops"}
              onChange={handleApparelChange}
            />
            Tops
          </label>
          <label>
            <input
              type="checkbox"
              value="bottoms"
              checked={apparelType === "bottoms"}
              onChange={handleApparelChange}
            />
            Bottoms
          </label>
          <label>
            <input
              type="checkbox"
              value="outerwear"
              checked={apparelType === "outerwear"}
              onChange={handleApparelChange}
            />
            Outerwear
          </label>
        </div>
      </div>

      <div className="filter-group">
        <h4>Brand</h4>
        <div className="filter-options">
          <label>
            <input
              type="checkbox"
              value="nike"
              checked={brand === "nike"}
              onChange={handleBrandChange}
            />
            Nike
          </label>
          <label>
            <input
              type="checkbox"
              value="adidas"
              checked={brand === "adidas"}
              onChange={handleBrandChange}
            />
            Adidas
          </label>
          <label>
            <input
              type="checkbox"
              value="puma"
              checked={brand === "puma"}
              onChange={handleBrandChange}
            />
            Puma
          </label>
        </div>
      </div>
    </div>
  );
}

export default Filters;
