function Item({ children, handleItemSelect, id }) {
  return (
    <div id={id} className="item">
      <li onClick={handleItemSelect}>{children}</li>
      <button onClick={handleItemSelect}>Edit</button>
    </div>
  );
}

export default Item;
