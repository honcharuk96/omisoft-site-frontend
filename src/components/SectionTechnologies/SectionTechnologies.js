import React from 'react';
import styles from './SectionTechnologies.scss';
import SectionHeader from '../SectionHeader';
import AboutTechnologies from '../AboutTechnologies/AboutTechnologies';
import TechnologiesProgram from '../TechnologiesProgram/TechnologiesProgram';


const SectionTechnologies = props => {
  return (
    <section className={styles.setionTechnologiesMain}>
    {/* <SectionHeader/> */}
    <div className={styles.wrap}>
    <AboutTechnologies/>
    <TechnologiesProgram/>
    <div className={styles.cloudTechnologies}></div>
    </div>
    </section>
  )
}
export default SectionTechnologies;