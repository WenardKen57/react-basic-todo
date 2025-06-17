import List from "./List";
import Item from "./Item";
import ItemInput from "./ItemInput";

import "./../style/LeftPanel.css";

function LeftPanel({
  children,
  setList,
  itemInputValue,
  setItemInputValue,
  handleCurrentItemFocus,
  handleItemSelect,
}) {
  function handleInputValue(event) {
    const target = event.target;
    setItemInputValue(() => target.value);
  }

  function handleSubmitInputValue() {
    const generatedID = crypto.randomUUID();
    handleCurrentItemFocus(generatedID);
    setList((prevList) => {
      return [...prevList, { id: generatedID, itemTitle: itemInputValue }];
    });
  }

  return (
    <div className="leftPanel">
      <ItemInput onChange={handleInputValue}></ItemInput>
      <button onClick={handleSubmitInputValue}>Add item</button>
      <h1>List of not to do:</h1>
      <List>
        {children.map((item) => {
          return (
            <Item
              key={item.id}
              id={item.id}
              handleItemSelect={handleItemSelect}
            >
              {item.itemTitle}
            </Item>
          );
        })}
      </List>
    </div>
  );
}

export default LeftPanel;
