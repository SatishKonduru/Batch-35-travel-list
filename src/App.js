import { useState } from "react";
import "./index.css";

import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

// const initialItems = [
//   { id: 1, description: "Charger", quantity: 2, packed: false },
//   { id: 2, description: "Mobile", quantity: 3, packed: false },
// ];
export default function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    // setItems(items => items.push(item)) => WRONG, WE DON'T MUTATE THE STATE
    setItems((items) => [...items, item]);
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearList() {
    const confirmed = window.confirm("Are you SURE to DELETE the LIST?");
    if (confirmed) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearItems={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}


