import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import items from "../data/items"; // Ensure the correct import path

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeToggle() {
    setIsDarkMode((prevMode) => !prevMode);
  }

  return (
    <div className={isDarkMode ? "App dark" : "App light"}>
      <header>
        <h1>Grocery List</h1>
        <button onClick={handleDarkModeToggle}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList items={items} /> {/* ✅ Ensure items is passed */}
    </div>
  );
}

export default App;
