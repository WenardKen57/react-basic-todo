import List from "./List";
import Item from "./Item";
import ItemInput from "./ItemInput";

import "./../style/LeftPanel.css";

function LeftPanel({
  list,
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
      if (itemInputValue === "") {
        return [...prevList];
      } else {
        return [...prevList, { id: generatedID, itemTitle: itemInputValue }];
      }
    });
  }

  function removeItemFromList(itemID) {
    setList(list.filter((item) => item.id != itemID));
  }

  function handleItemRemove(event) {
    removeItemFromList(event.target.parentNode.id);
  }

  return (
    <div className="leftPanel">
      <ItemInput onChange={handleInputValue}></ItemInput>
      <button onClick={handleSubmitInputValue}>Add item</button>
      <h1>List of not to do:</h1>
      <List>
        {list.length <= 0 ? (
          <h3>No items</h3>
        ) : (
          list.map((item) => {
            return (
              <Item
                key={item.id}
                id={item.id}
                handleItemSelect={handleItemSelect}
                handleItemRemove={handleItemRemove}
              >
                {item.itemTitle}
              </Item>
            );
          })
        )}
      </List>
    </div>
  );
}

export default LeftPanel;
