import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class BookShelf extends Component {
  static propTypes = {
    category: PropTypes.string.isRequired,
    shelfChanger: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired
  }

  render() {
    const { books, category, shelfChanger } = this.props;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{category}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map(book => (
              <li key={book.id}>
                <Book
                  shelfChanger={shelfChanger}
                  book={book}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default BookShelf;
