import React from "react";
import Book from "./Book";

const Shelf = ({ shelfName, updateShelf, books }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <Book key={book.id} book={book} updateShelf={updateShelf} />
          ))}
        </ol>
      </div>
    </div>
  );
};
export default Shelf;
