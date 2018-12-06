import React from 'react';
import  styles from './SectionHeader.scss';
import Navigation from '../Navigation/';
import AboutOmisoft from '../AboutOmisoft/';
import Cloud from '../Cloud/Cloud';
import Stars from '../Stars';

const SectionHeader = props => {
  return (
    <section className={styles.first}>
      <Navigation/>
      <AboutOmisoft/>
      <Stars/>
      <Cloud/>
    </section>
  )
}
export default SectionHeader;