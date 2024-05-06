import React from 'react';
import articlesData from '../../data/articles.json';
import Article from '../../components/Article/Index';
import './style.scss';

const ArticlesPage = () => {
  let articles = articlesData;

  return(
    <section className="articles-page">
      <div className="hero">
        <div className="container">
          <div className="row">
            <div className="col-md-12"></div>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="bold text-center">Últimos Artigos</h1>
              <br />

              <div className='row'>
                {articles.map((article, index) => (
                  <Article key={index} article={article} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default React.memo(ArticlesPage);