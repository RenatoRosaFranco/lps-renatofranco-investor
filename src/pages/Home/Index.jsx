import React from 'react';
import './style.scss';

import Hero    from '../../components/Hero/Index';
import About   from '../../components/About/Index';
import Contact from '../../components/Contact/Index';

const HomePage = () => {
  return(
    <section className="home-page">
      <Hero />
      <About />
      <Contact />
    </section>
  )
}

export default React.memo(HomePage);