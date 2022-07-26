import React, { useState }from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setselectedCategory] = useState("Filter by category");
  // const [itemList, setItemList] = useState (items);

    const itemsToDisplay = items.filter(item => {
      if (item.category === selectedCategory) {
        return item;
      } else if (selectedCategory === "Filter by category") {
        return item;
      }else{
        return null;
      }
    })
 

  return (
    <div className="ShoppingList" onChange={event => setselectedCategory(event.target.value)}>
      <div className="Filter">
        <select name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
