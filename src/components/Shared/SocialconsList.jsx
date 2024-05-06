import React from 'react';
import './style.scss';

const SocialconList = () => {
    return(
      <ul className="list-unstyled list-inline social-icons-list">
        <li>
          <a href={process.env.REACT_APP_INSTAGRAM_URL}>
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href={process.env.REACT_APP_YOUTUBE_URL}>
            <i className="fa-brands fa-youtube"></i>
          </a>
        </li>
        <li>
          <a href={process.env.REACT_APP_TWITTER_URL}>
            <i className="fa-brands fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href={process.env.REACT_APP_LINKEDIN_URL}>
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
    </ul>
  )
}

export default React.memo(SocialconList);