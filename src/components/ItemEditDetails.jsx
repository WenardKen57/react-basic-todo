function ItemEditDetails({ list, setList, children }) {
  function handleItemTitle(event) {
    const updatedList = list.map((item) =>
      item.id === children ? { ...item, itemTitle: event.target.value } : item
    );

    setList(updatedList);
  }

  function handleItemDescription(event) {
    const updatedList = list.map((item) =>
      item.id === children ? { ...item, description: event.target.value } : item
    );

    setList(updatedList);
  }

  function handleItemStartDate(event) {
    const updatedList = list.map((item) =>
      item.id === children ? { ...item, startDate: event.target.value } : item
    );

    setList(updatedList);
  }

  function handleItemEndDate(event) {
    const updatedList = list.map((item) =>
      item.id === children ? { ...item, endDate: event.target.value } : item
    );

    setList(updatedList);
  }

  function findItem(id) {
    return list.find((item) => item.id === id);
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
        value={findItem(children).itemTitle}
        onChange={handleItemTitle}
      />
      <label htmlFor="itemDescription">
        (Explain why you don't want to do this?)
      </label>
      <textarea
        type="text"
        id="itemDescription"
        value={
          findItem(children).description
            ? findItem(children).description
            : "No description yet"
        }
        onChange={handleItemDescription}
      ></textarea>
      <div className="itemDate">
        <input
          type="date"
          className="itemStartDate"
          value={
            findItem(children).startDate
              ? findItem(children).startDate
              : formatDate(new Date())
          }
          onChange={handleItemStartDate}
        />

        <input
          type="date"
          className="itemEndDate"
          value={
            findItem(children).endDate
              ? findItem(children).endDate
              : formatDate(new Date())
          }
          onChange={handleItemEndDate}
        />
      </div>
    </form>
  );
}

export default ItemEditDetails;
