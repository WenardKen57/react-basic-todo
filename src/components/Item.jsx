function Item({ children, handleItemSelect, id, handleItemRemove }) {
  return (
    <div id={id} className="item">
      <li onClick={handleItemSelect}>{children}</li>
      <button onClick={handleItemSelect}>Edit</button>
      <button onClick={handleItemRemove}>Remove</button>
    </div>
  );
}

export default Item;
