import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Article = ({ article }) => {
  return(
    <div className="col-md-4 article">
      <div className="panel panel-default">
        <div className="panel-heading"></div>
        <div className="panel-body">
          <h4 className='bold'>{article.title}</h4>
          <p>{article.description}</p>

          <Link to={`/article/${article.id}`}>
            Leia mais <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Article);