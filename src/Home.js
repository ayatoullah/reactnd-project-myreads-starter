import React from "react";
import Shelf from "./Shelf";

const Home = ({ currentlyReading, read, wantToRead, ...props }) => {
  return (
    <>
      <div className="list-books-content">
        <div>
          <Shelf
            books={currentlyReading}
            shelfName="currentlyReading"
            updateShelf={props.updateShelf}
          />
          <Shelf books={read} shelfName="read" updateShelf={props.updateShelf} />
          <Shelf
            books={wantToRead}
            shelfName="wantToRead"
            updateShelf={props.updateShelf}
          />
        </div>
      </div>
      <div className="open-search">
        <button onClick={() => props.showSearchPage()}>
          Add a book
        </button>
      </div>
    </>
  );
};

export default Home;
