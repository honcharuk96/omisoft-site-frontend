import React from 'react';
import styles from './SectionPortfolio.scss';
import Portfolio2Blocks from '../Portfolio2Blocks/Portfolio2Blocks';
import Portfolio3Blocks from '../Portfolio3Blocks/Portfolio3Blocks';



const SectionPortfolio = props => {
  return (
    <section id='Portfolio' className={styles.main}>
    <div className={styles.text}>
      <h3>Our Portfolio</h3>
      <span>
      Leading digital agency with solid design and development expertise.<br/> We build mobile and web products for startups and design intricate.
      </span> 
      </div>
      <Portfolio2Blocks/>
      <Portfolio3Blocks/>
    </section>
  )
}
export default SectionPortfolio;