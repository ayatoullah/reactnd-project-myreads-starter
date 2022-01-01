import React from "react";
import ShelfChanger from "./ShelfChanger";

const Book = ({ book, updateShelf }) => {
  const bookCover = (
    <div
      className="book-cover"
      style={{
        width: 128,
        height: 193,
        backgroundImagethumbnail: `url(${book.imageLinks.thumbnail})`,
      }}
    />
  );

  const bookTitle = <div className="book-title">{book.title}</div>;

  const bookAuthors = (
    <div className="book-authors">
      {book.authors &&
        book.authors.map((author, index) => <span key={index}>{author}</span>)}
    </div>
  );

  return (
    <li>
      <div className="book">
        <div className="book-top">
          {bookCover}
          <ShelfChanger book = {book} updateShelf={updateShelf} />
        </div>
        {bookTitle}
        {bookAuthors}
      </div>
    </li>
  );
};

export default Book;
