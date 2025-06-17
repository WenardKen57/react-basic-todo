import { useEffect, useState } from "react";

function ItemEditDetails({ list, setList, children }) {
  function handleItemTitle(event) {
    const updatedList = list.map((item) =>
      item.id === children ? { ...item, itemTitle: event.target.value } : item
    );

    setList(updatedList);
  }

  function findItem(id) {
    return list.find((item) => item.id === id);
  }

  return (
    <input
      type="text"
      value={findItem(children).itemTitle}
      onChange={handleItemTitle}
    />
  );
}

export default ItemEditDetails;
