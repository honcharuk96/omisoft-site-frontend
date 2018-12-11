import React from 'react';
import styles from './SectionTechnologies.scss';
import SectionHeader from '../SectionHeader';
import AboutTechnologies from '../AboutTechnologies/AboutTechnologies';
import TechnologiesProgram from '../TechnologiesProgram/TechnologiesProgram';


const SectionTechnologies = props => {
  return (
    <section className={styles.setionTechnologiesMain}>
     {/* <div className={styles.topWave}></div> */}
    <div className={styles.wrap}>
       <AboutTechnologies/>
       <TechnologiesProgram/>
       <div className={styles.cloudTechnologies}></div>
       {/* <div className={styles.bottomWave}></div> */}
    </div>
    </section>
  )
}
export default SectionTechnologies;