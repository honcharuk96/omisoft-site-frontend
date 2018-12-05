import React, { Fragment } from 'react';
import  styles from './Stars.scss';


const SectionHeader = props => {
  return (
<section className={styles.first} style={props.customStyle}>
      <div className={styles.stars1}></div>
      <div className={styles.stars2}></div>
      <div className={styles.stars3}></div>
      {props.children}
      </section>

  )
}
export default SectionHeader;