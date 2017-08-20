import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';

class BookList extends Component {
  static propTypes = {
    listBooks: PropTypes.func.isRequired,
    shelfChanger: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired
  }

  componentDidMount() {
    this.props.listBooks();
  }

  filterBooks = (category) => {
    return this.props.books.filter(book => {
      return book.shelf === category;
    });
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
        {!this.props.books || this.props.books.length === 0 ?
          <div className="loading">
            Loading...
          </div>
          :
          <div>
            <BookShelf
              shelfChanger={this.props.shelfChanger}
              category={'Currently Reading'} books={this.filterBooks('currentlyReading')}/>
            <BookShelf
              shelfChanger={this.props.shelfChanger}
              category={'Want to Read'} books={this.filterBooks('wantToRead')}/>
            <BookShelf
              shelfChanger={this.props.shelfChanger}
              category={'Read'}
              books={this.filterBooks('read')}/>

            <div className="open-search">
              <Link
                to='/search'
                className="open-search"
              >Add a book</Link>
            </div>
          </div>}
        </div>
      </div>
    );
  }
}

export default BookList;
