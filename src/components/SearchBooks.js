import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Book from './Book';

class SearchBooks extends Component {
  static propTypes = {
    searchBooks: PropTypes.func.isRequired,
    shelfChanger: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired
  }

  state = {
    query: ''
  }

  componentDidMount() {
    this.props.searchBooks(this.state.query);
  }

  updateQuery = (query) => {
    this.setState({ query });
    this.props.searchBooks(query);
  }

  render() {
    const { books, shelfChanger } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            className="close-search"
            to="/"
          >Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              value={this.state.query}
              placeholder="Search by title or author"
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>

        <div className="search-books-results">
          <ol className="books-grid">
            {books.map(book => (
              <li key={book.id}>
                <Book
                  book={book}
                  shelfChanger={shelfChanger}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchBooks;
