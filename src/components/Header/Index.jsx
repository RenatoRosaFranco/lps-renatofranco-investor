import React from "react";
import { Link } from "react-router-dom";
import './style.scss';

const Header = () => {
  return(
    <header className="header">
      <div className="navbar-default">
        <div className="container container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" 
            data-toggle="collapse" data-target="#navbar-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>

            <Link className="navbar-brand" href="/">
              Renato Franco
            </Link>
          </div>

          <div className="collapse navbar-collapse" id="navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/talks">Palestras</Link></li>
              <li><Link to="/investments">Investimentos</Link></li>
              <li><Link to="/articles">Blog</Link></li>
              <li><Link to="/books">Livros</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default React.memo(Header);