import React from 'react';
import './style.scss';

const Book = ({ book }) => {
  return(
    <div className="col-md-3">
      <img src={book.cover} alt={book.title} />
      <h4 className="bold">{book.title}</h4>
    </div>
  )
}

export default React.memo(Book);