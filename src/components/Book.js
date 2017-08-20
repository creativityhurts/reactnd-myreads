import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShelfChanger from './ShelfChanger';

class Book extends Component {
  static propTypes = {
    shelfChanger: PropTypes.func.isRequired,
    book: PropTypes.object.isRequired
  }

  render() {
    const {book} = this.props;
    const bookCover = book.imageLinks ? book.imageLinks.thumbnail : '';
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{backgroundImage: `url(${bookCover})` }}></div>
          <ShelfChanger
            shelfChanger={this.props.shelfChanger}
            book={book}
          />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors ? book.authors.join(', '): ''}</div>
      </div>
    );
  }
}

export default Book;
