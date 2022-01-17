import React from "react";
import ShelfChanger from "./ShelfChanger";

const Book = ({ book, updateShelf }) => {
  const bookCover = (
    <div className="book-cover">
      {
        <img
          style={{
            width: 128,
            height: 193,
          }}
          src={(book.imageLinks === null || book.imageLinks === undefined) ? "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg" : book.imageLinks.thumbnail}
          alt={book.description}
        />
      }
    </div>
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
          <ShelfChanger book={book} updateShelf={updateShelf} />
        </div>
        {bookTitle}
        {bookAuthors}
      </div>
    </li>
  );
};

export default Book;
