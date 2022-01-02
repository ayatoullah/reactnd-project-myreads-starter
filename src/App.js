import React from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import SearchBook from "./SearchBook";
import { getAll, update } from "./BooksAPI";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class BooksApp extends React.Component {
  constructor() {
    super();
    this.updateShelf = this.updateShelf.bind(this);
    this.showSearchHandler = this.showSearchHandler.bind(this);
    this.state = {
      /**
       * TODO: Instead of using this state variable to keep track of which page
       * we're on, use the URL in the browser's address bar. This will ensure that
       * users can use the browser's back and forward buttons to navigate between
       * pages, as well as provide a good URL they can bookmark and share.
       */
      currentlyReading: [],
      read: [],
      wantToRead: [],
      showSearchPage: false,
      books: [],
    };
  }
  componentDidMount() {
    getAll().then((res) =>
      this.setState({
        ...this.state,
        books: res,
        currentlyReading: res.filter(
          (book) => book.shelf === "currentlyReading"
        ),
        read: res.filter((book) => book.shelf === "read"),
        wantToRead: res.filter((book) => book.shelf === "wantToRead"),
      })
    );
  }

  updateShelf = (fromShelf, toShelf, book) => {
    book.shelf = toShelf;
    if (toShelf === "none") {
      return update(toShelf, book).then((res) => {
        this.setState({
          ...this.state,
          [fromShelf]: [
            ...this.state[fromShelf].filter((item) => item.id !== book.id),
          ],
        });
      });
    }
    if (toShelf !== fromShelf) {
      update(toShelf, book).then((res) => {
        this.setState({
          ...this.state,
          [fromShelf]: [
            ...this.state[fromShelf].filter((item) => item.id !== book.id),
          ],
          [toShelf]: [...this.state[toShelf], book],
        });
      });
    }
  };

  showSearchHandler = () => {
    this.setState({ showSearchPage: true });
  }

  closeSearchHandler = () =>{
    this.setState({ showSearchPage: false });
  }

  render() {
    console.log(this.state);
    return (
      // <Router>
      //   <div>
      //     {/* A <Switch> looks through its children <Route>s and
      //       renders the first one that matches the current URL. */}
      //     <Switch>
      //       <Route path="/searchbook">
      //         <SearchBook />
      //       </Route>
      //       <Route path="/">
      //         <Home />
      //       </Route>
      //     </Switch>
      //   </div>
      // </Router>
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBook closeSearch={this.closeSearchHandler}/>
        ) : (
          <div className="list-books">
            <Header />
            <Home
              currentlyReading={this.state.currentlyReading}
              read={this.state.read}
              wantToRead={this.state.wantToRead}
              updateShelf = {this.updateShelf}
              showSearchPage = {this.showSearchHandler}
            />
          </div>
        )}
      </div>
    );
  }
}

export default BooksApp;
