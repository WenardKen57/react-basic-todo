import List from "./List";
import Item from "./Item";
import ItemInput from "./ItemInput";

import "./../style/LeftPanel.css";
import { useState } from "react";

function LeftPanel() {
  const [list, setList] = useState([]);
  const [itemInputValue, setItemInputValue] = useState("");

  function handleInputValue(event) {
    const target = event.target;
    setItemInputValue(() => target.value);
  }

  function handleSubmitInputValue() {
    setList((prevList) => {
      return [...prevList, { id: crypto.randomUUID(), value: itemInputValue }];
    });
  }

  return (
    <div className="leftPanel">
      <ItemInput onChange={handleInputValue}></ItemInput>
      <button onClick={handleSubmitInputValue}>Add item</button>
      <h1>List of not to do:</h1>
      <List>
        {list.map((item) => {
          return <Item key={item.id}>{item.value}</Item>;
        })}
      </List>
    </div>
  );
}

export default LeftPanel;
