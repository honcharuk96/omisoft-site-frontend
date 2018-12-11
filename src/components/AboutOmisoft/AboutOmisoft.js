import React from 'react';
import  styles from './AboutOmisoft.scss';
import OrangeButton from '../OrangeButton/OrangeButton';

const AboutOmisoft = props => {
  return (
    <div  id="Home" className={styles.aboutOmisoft}>
      <div className={styles.aboutOmisoft_description}>
        <h1 className={styles.aboutOmisoft_title}>We develop apps & sites that users love!</h1>
          <div className={styles.aboutOmisoft_description_info}>
            <h2>50+ products launched</h2>
            <h2>30+ happy clients</h2>
          </div>
          <OrangeButton buttonText={'Launch Project'}/>
      </div>
      <div className={styles.aboutOmisoft_rocket}>
      </div>
    </div>
  )
}
export default AboutOmisoft;