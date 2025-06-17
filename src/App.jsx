import { useState } from "react";

import LeftPanel from "./components/LeftPanel";
import Navigation from "./components/Navigation";
import RightPanel from "./components/RightPanel";

import "./style/App.css";

function App() {
  const [list, setList] = useState([]);
  const [itemInputValue, setItemInputValue] = useState("");
  const [isEditingItemDetails, setIsEditingItemDetails] = useState(true);
  const [currentItemID, setCurrentItemID] = useState("");

  function handleCurrentItemFocus(generatedID) {
    setCurrentItemID(() => generatedID);
  }

  return (
    <div className="container">
      <Navigation></Navigation>
      <LeftPanel
        setList={setList}
        itemInputValue={itemInputValue}
        setItemInputValue={setItemInputValue}
        handleCurrentItemFocus={handleCurrentItemFocus}
      >
        {list}
      </LeftPanel>
      <RightPanel
        isEditingItemDetails={isEditingItemDetails}
        setList={setList}
        list={list}
      >
        {currentItemID}
      </RightPanel>
    </div>
  );
}

export default App;
