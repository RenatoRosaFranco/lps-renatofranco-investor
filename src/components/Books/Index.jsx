import React from 'react';
import Book from '../Book/Index';
import booksData from '../../data/books.json';
import './style.scss';

const Books = () => {
  let books = booksData;

  <section className="books">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="bold text-center">Conheça meus títulos</h1>
          <br />

          {books.map((book, index) => (
            <Book key={index} book={book} />
          ))}

          <br />
          <a href='/'
          className='btn btn-primary btn-lg'>
            Ver todos
          </a>
        </div>
      </div>
    </div>
  </section>
};

export default React.memo(Books);