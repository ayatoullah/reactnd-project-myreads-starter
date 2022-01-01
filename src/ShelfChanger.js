import React from "react";

const ShelfChanger = ({ updateShelf, book }) => {
  return (
    <div className="book-shelf-changer">
      <select value={book.shelf} onChange={(e) => updateShelf( e.target.value, book)}>
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
