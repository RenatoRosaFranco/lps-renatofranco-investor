import React from 'react';
import booksData from '../../data/books.json';
import BookCard from '../../components/BookCard/Index';
import './style.scss';

const BooksPage = () => {
  let books = booksData;

  return(
    <section className="books-page">
      <div className="hero">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="bold">Conheça nossos títulos</h2>
              <p>Entre ideias e inovações, navegue pelas<br/>
              páginas inspiradas de Renato Franco.</p>
              <hr />
            </div>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {books.map((book, index) => (
                <BookCard key={index} book={book} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(BooksPage);