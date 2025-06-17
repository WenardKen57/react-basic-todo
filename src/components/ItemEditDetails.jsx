function ItemEditDetails({ list, setList, itemID }) {
  const currentItem = list.find((item) => item.id === itemID);

  if (!currentItem) {
    return <p>Error item not found!</p>;
  }

  function updateItemField(field, value) {
    const updatedList = list.map((item) =>
      item.id === itemID ? { ...item, [field]: value } : item
    );
    setList(updatedList);
  }

  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  return (
    <form action="">
      <label htmlFor="itemTitle">(What you don't want to do):</label>
      <input
        type="text"
        id="itemTitle"
        value={currentItem.itemTitle}
        onChange={(event) => updateItemField("itemTitle", event.target.value)}
      />
      <label htmlFor="itemDescription">
        (Explain why you don't want to do this?)
      </label>
      <textarea
        type="text"
        id="itemDescription"
        placeholder="Description"
        value={currentItem.description ? currentItem.description : ""}
        onChange={(event) => updateItemField("description", event.target.value)}
      ></textarea>
      <div className="itemDate">
        <input
          type="date"
          className="itemStartDate"
          value={currentItem.startDate || ""}
          onChange={(event) => updateItemField("startDate", event.target.value)}
        />

        <input
          type="date"
          className="itemEndDate"
          value={currentItem.endDate || ""}
          onChange={(event) => updateItemField("endDate", event.target.value)}
        />
      </div>
    </form>
  );
}

export default ItemEditDetails;
