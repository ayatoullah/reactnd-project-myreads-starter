import React from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import Home from "./Home";
import SearchBook from "./SearchBook";
import { getAll, update, search } from "./BooksAPI";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./NotFound";
import history from "./history";

class App extends React.Component {
  constructor() {
    super();
    this.updateShelf = this.updateShelf.bind(this);
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
      none: [],
      showSearchPage: false,
      books: [],
      searchResult: [],
    };
  }
  componentDidMount() {
    getAll().then((res) => {
      console.log("getAll", res);
      this.setState({
        ...this.state,
        books: res,
        currentlyReading: res.filter(
          (book) => book.shelf === "currentlyReading"
        ),
        read: res.filter((book) => book.shelf === "read"),
        wantToRead: res.filter((book) => book.shelf === "wantToRead"),
      });
    });
  }

  updateShelf = (fromShelf, toShelf, book) => {
    console.log("none", this.state["none"]);
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

  searchHandler = (text) => {
    let searchResult = [];
    if (text.length > 0) {
      search(text).then(
        (res) => {
          this.setState({
            ...this.state,
            searchResult: res,
          });
        },
        (err) => {
          this.setState({
            ...this.state,
            searchResult: [],
          });
        }
      );
    } else {
      this.setState({
        ...this.state,
        searchResult: [],
      });
    }
  };

  render() {
    console.log(this.state);
    return (
      <Router history={history}>
        <div className="app">
          <Switch>
            <Route exact path="/">
              <Home
                currentlyReading={this.state.currentlyReading}
                read={this.state.read}
                wantToRead={this.state.wantToRead}
                updateShelf={this.updateShelf}
              />
            </Route>
            <Route path="/search">
              <SearchBook
                search={this.searchHandler}
                searchResult={this.state.searchResult}
                updateShelf={this.updateShelf}
              />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
