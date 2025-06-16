function ItemInput({ onChange }) {
  return (
    <>
      <input
        type="text"
        onChange={onChange}
        placeholder="What do you NOT want to do today?"
      />
    </>
  );
}

export default ItemInput;
