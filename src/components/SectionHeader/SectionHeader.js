import React from 'react';
import  styles from './SectionHeader.scss';
import Navigation from '../Navigation/';
import AboutMisoft from '../AboutMisoft/';

const SectionHeader = props => {
  return (
    <section className={styles.first}>
   
      <Navigation/>
      <AboutMisoft/>
  
      <div className={styles.stars1}></div>
      <div className={styles.stars2}></div>
      <div className={styles.stars3}></div>
    </section>
  )
}
export default SectionHeader;