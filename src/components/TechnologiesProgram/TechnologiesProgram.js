import React from 'react';
import styles from './TechnologiesProgram.scss';



const TechnologiesProgram = props => {
  return (
  <div className={styles.allRounds}>
    <div className={styles.rounds1}>
     <img src={require('../../assets/Kotlin.png')}/>
    </div>
    <div className={styles.rounds2}>
     <img src={require('../../assets/Spring.png')}/>
    </div>
    <div className={styles.rounds3}>
     <img src={require('../../assets/react.png')}/>
    </div>
    <div className={styles.rounds4}>
     <img src={require('../../assets/Swift.png')}/>
    </div>
    <div className={styles.rounds5}>
     <img src={require('../../assets/Kotlin.png')}/>
    </div>
    <div className={styles.rounds6}>
      <img src={require('../../assets/Java.png')}/>
    </div>
  </div>
  )
}
export default TechnologiesProgram;