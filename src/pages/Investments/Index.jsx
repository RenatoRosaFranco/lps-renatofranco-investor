import React from 'react';
import Investment from '../../components/Investment/Index';
import investmentsData from '../../data/investments.json';
import './style.scss';

const InvestmentsPage = () => {
  let investments = investmentsData;

  return(
    <section className="investments-page">
      <div className="hero">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="bold">Investimentos</h2>
              <p>Explore o mundo dos investimentos com Renato Franco.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-12">

            {investments.map((investment, index) => (
              <Investment key={index} investment={investment} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default React.memo(InvestmentsPage);