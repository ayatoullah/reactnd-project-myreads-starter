import React from "react";
import Shelf from "./Shelf";

const Home = ({currentlyReading , read, wantToRead, updateShelf}) => {
  return (
    <div className="list-books-content">
      <div>
        <Shelf books={currentlyReading} shelfName="currentlyReading" updateShelf = {updateShelf}/>
        <Shelf books={read} shelfName="read" updateShelf = {updateShelf}/>
        <Shelf books={wantToRead} shelfName="wantToRead" updateShelf = {updateShelf}/>
      </div>
    </div>
  );
};

export default Home;
