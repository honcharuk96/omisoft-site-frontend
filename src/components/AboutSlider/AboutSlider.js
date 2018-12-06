import React from 'react';
import  styles from './AboutSlider.scss';

const AboutSlider = props => {
  return (
  <div className={styles.all}>
    <div className={styles.item}>
      <img/>
      <div className={styles.tag}></div>
      <div className={styles.itemInfo}></div>
    </div>
  </div>
  )
}
export default AboutSlider;