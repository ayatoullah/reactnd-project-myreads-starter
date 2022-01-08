import React from "react";
import Shelf from "./Shelf";
import Header from "./Header";
import {Link} from "react-router-dom";

const Home = ({ currentlyReading, read, wantToRead, ...props }) => {
  return (
    <>
      <Header />
      <div className="list-books-content">
        <Shelf
          books={currentlyReading}
          shelfName="currentlyReading"
          updateShelf={props.updateShelf}
        />
        <Shelf
          books={read}
          shelfName="read"
          updateShelf={props.updateShelf}
        />
        <Shelf
          books={wantToRead}
          shelfName="wantToRead"
          updateShelf={props.updateShelf}
        />
      </div>
      <div >
        <Link className="open-search" to="/search">Add a book</Link>
      </div>
    </>
  );
};

export default Home;
