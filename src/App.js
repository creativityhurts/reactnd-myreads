import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import BookList from './components/BookList';
import SearchBooks from './components/SearchBooks';

class BooksApp extends React.Component {
  state = {
    books: []
  };

  listBooks = () => {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  };

  searchBooks = query => {
    if (query) {
      BooksAPI.getAll().then(booksAPI => {
        BooksAPI.search(query).then(response => {
          let books = response;
          if (books) {
            books = books.map(book => {
              return book;
            });
            if (this.state.books !== books) {
              this.setState({ books });
            }
          }
        });
      });
    } else {
      this.setState({ books: [] });
    }
  };

  shelfChanger = (newBook, newShelf) => {
    BooksAPI.update(newBook, newShelf).then(data => {
      this.setState(currentState => ({
        books: currentState.books.map(book => {
          if (newBook.id === book.id) {
            book.shelf = newShelf;
          }
          return book;
        })
      }));
    });
  };

  render() {
    return (
      <div className="app">
        <Route
          path="/search"
          render={() =>
            <SearchBooks
              shelfChanger={this.shelfChanger}
              books={this.state.books}
              searchBooks={this.searchBooks}
            />}
        />

        <Route
          path="/"
          exact
          render={() =>
            <BookList
              shelfChanger={this.shelfChanger}
              books={this.state.books}
              listBooks={this.listBooks}
            />}
        />
      </div>
    );
  }
}

export default BooksApp;
