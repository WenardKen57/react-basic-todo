function Item({ children, handleOnClick }) {
  return <li onClick={handleOnClick}>{children}</li>;
}

export default Item;
