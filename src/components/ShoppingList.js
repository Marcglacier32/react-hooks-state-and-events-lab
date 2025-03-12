import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  console.log("ShoppingList received items:", items);

  // ✅ State should always be at the top level
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  // ✅ Ensure `items` is always an array
  const filteredItems = (items || []).filter((item) =>
    selectedCategory === "All" ? true : item.category === selectedCategory
  );

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleCategoryChange} value={selectedCategory}>
          <option value="All">All</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      {items ? ( // ✅ Conditional Rendering Here
        <ul className="Items">
          {filteredItems.map((item) => (
            <Item key={item.id} name={item.name} category={item.category} />
          ))}
        </ul>
      ) : (
        <p>Loading items...</p> // ✅ Shows only if `items` is undefined
      )}
    </div>
  );
}

export default ShoppingList;
