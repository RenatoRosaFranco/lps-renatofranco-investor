import React from 'react';
import SocialIconsList from  '../Shared/SocialconsList';
import { Link } from 'react-router-dom';
import './style.scss';

const Footer = () => {
  return(
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-8">
                <h2 className="bold">Renato Franco</h2>
                <p>Renato Franco é Engenheiro de Software, escritor, palestrante<br />
                e investidor, apaixonado por startups, criptomoedas e blockchain.
                </p>
              </div>

              <div className="col-md-4">
                <h3 className="bold">Acesse</h3>
                <ul className="list-unstyled">
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/'>Palestras</Link></li>
                  <li><Link to='/'>Investimentos</Link></li>
                  <li><Link to='/'>Blog</Link></li>
                  <li><Link to='/'>Livros</Link></li>
                  <li><Link to='/'>Mídia</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row"><br />
          <div className="col-md-6">
            <h4>Renato Franco</h4>
          </div>

          <div className="col-md-6 text-right">
            <SocialIconsList />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default React.memo(Footer);