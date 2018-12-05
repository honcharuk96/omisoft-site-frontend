import React from 'react';
import  styles from './SectionHeader.scss';
import Navigation from '../Navigation/';
import AboutMisoft from '../AboutMisoft/';
import Cloud from '../Cloud/Cloud';
import Stars from '../Stars';

const SectionHeader = props => {
  return (
    <section className={styles.first}>
      <Navigation/>
      <AboutMisoft/>
      <Stars/>
      <Cloud/>
    </section>
  )
}
export default SectionHeader;