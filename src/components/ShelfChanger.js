import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShelfChanger extends Component {
  static propTypes = {
    shelfChanger: PropTypes.func.isRequired,
    book: PropTypes.object.isRequired
  }

  changeShelf = (e) => {
    e.preventDefault();
    this.props.shelfChanger(this.props.book, e.target.value);
  }

  render() {
    const {book} = this.props;

    return (
      <div className="book-shelf-changer">
        <select value={book.shelf || ''} onChange={(e) => this.changeShelf(e)}>
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default ShelfChanger;
