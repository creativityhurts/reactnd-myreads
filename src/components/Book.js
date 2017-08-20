import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShelfChanger from './ShelfChanger';

class Book extends Component {
  static propTypes = {
    shelfChanger: PropTypes.func.isRequired,
    book: PropTypes.object.isRequired
  }

  render() {
    var authors = [];
    const {book} = this.props;
    const bookCover = book.imageLinks ? book.imageLinks.thumbnail : '';
    if (book.authors) {
      if (book.authors.length > 1) {
        authors = book.authors.join(', ');
      } else {
        authors = book.authors;
      }
    }
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${bookCover})` }}></div>
          <ShelfChanger
            shelfChanger={this.props.shelfChanger}
            book={book}
          />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{authors}</div>
      </div>
    );
  }
}

export default Book;
