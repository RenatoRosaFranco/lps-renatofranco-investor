import React from "react";
import './style.scss';

const Investment = ({investment}) => {
  return(
    <div className="col-md-4">
      <div className="panel panel-default">
        <div className="panel-body">
          <h4 className="bold">
            <i className={investment.icon}></i>
          </h4>
          <h3>{investment.title}</h3>
          <br />

          <a className='btn btn-primary btn-md'
             href={investment.link} target="_blank" 
             rel="noopener noreferrer">
             {investment.buttonText}
          </a>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Investment);