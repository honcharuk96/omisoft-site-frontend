import React from 'react';
import  styles from './AboutMisoft.scss';
import OrangeButton from '../OrangeButton/OrangeButton';

const AboutMisoft = props => {
  return (
    <div className={styles.aboutMisoft}>
      <div className={styles.aboutMisoft_description}>
        <h1 className={styles.aboutMisoft_title}>We develop apps & sites that users love!</h1>
          <div className={styles.aboutMisoft_description_info}>
          <h2>50+ products launched</h2>
          <h2>30+ happy clients</h2>
          </div>
          <OrangeButton buttonText={'Launch Project'}/>
      </div>
      <div className={styles.aboutMisoft_rocket}>
        
      </div>
    </div>
  )
}
export default AboutMisoft;