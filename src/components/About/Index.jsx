import React from 'react';
import SocialIconsList from '../Shared/SocialconsList';
import './style.scss';

const About = () => {
  return(
    <section className="about">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="bold text-center">Renato Franco</h1>
            <p className='text-center'>Investidor Tech</p>
            <div className="ul list-unstyled list-inline text-center">
              <SocialIconsList />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default React.memo(About);