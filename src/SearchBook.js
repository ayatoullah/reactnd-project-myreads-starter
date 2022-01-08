import React from "react";
import { Link } from 'react-router-dom';
import Book from './Book';
const SearchBook = ({search, searchResult, updateShelf}) => {
  let searchHandler = (e) => search(e.target.value);
  console.log("searchResult", searchResult);
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link
          className="close-search"
          to="/"
        >
          Close
        </Link>
        <div className="search-books-input-wrapper">
          {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
          <input type="text" placeholder="Search by title or author" onChange={searchHandler}/>
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid" >
          {searchResult.length <= 0 && <p>No results for your search</p>}
          {searchResult.length > 0  &&  searchResult.map((book) => (
            <Book key={book.id} book={book} updateShelf={updateShelf} />
          ))}
        </ol>
      </div>
    </div>
  );
};
export default SearchBook;