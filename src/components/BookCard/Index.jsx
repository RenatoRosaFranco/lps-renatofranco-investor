import React from 'react';
import './style.scss';

const BookCard = ({ book }) => {
  return(
    <div className="col-md-3 book-card">
      <div className="panel panel-default">
        <div className="panel-body text-center">
          <h4 className="bold">{book.title}</h4>
          <p>{book.description}</p>
          <br />

          <ul className="list-unstyled">
            <li>
              <a 
                href='/'
                className='btn btn-primary btn-lg'>
                Sobre o Livro
              </a>
            </li>
            <li>
              <a 
                href='/'
                className='btn btn-primary btn-lg'>
                Baixar
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default React.memo(BookCard);