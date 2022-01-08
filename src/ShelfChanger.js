const ShelfChanger = ({ updateShelf, book }) => {

  const updateShelfHandler = (e) => {
      let fromShelf = !book.shelf? "none" : book.shelf;
      updateShelf( fromShelf, e.target.value, book );
  }
  return (
    <div className="book-shelf-changer">
      <select value={!book.shelf? "none" : book.shelf} onChange={updateShelfHandler}>
        <option value="move" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default ShelfChanger;
