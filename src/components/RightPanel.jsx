import ItemShowDetails from "./ItemShowDetails";
import ItemEditDetails from "./ItemEditDetails";

function RightPanel({ isEditingItemDetails, list, setList, itemID }) {
  if (isEditingItemDetails) {
    if (list.length <= 0) {
      return <h1>No items yet</h1>;
    } else {
      return (
        <div className="rightPanel">
          <ItemEditDetails
            itemID={itemID}
            list={list}
            setList={setList}
          ></ItemEditDetails>
        </div>
      );
    }
  } else {
    return (
      <div className="rightPanel">
        <ItemShowDetails></ItemShowDetails>
      </div>
    );
  }
}

export default RightPanel;
