import React, {Fragment} from 'react';
import  styles from './Cloud.scss';

const Cloud = props => {
  return (
  <Fragment>
  <div className={styles.mainCloud}></div>
    <div className={styles.mainCloud_right}></div>
    <div className={styles.mainCloud_right2}></div>
    <div className={styles.mainCloud_left}></div>
    <div className={styles.mainCloud_center}></div>
    </Fragment>
  )
}
export default Cloud;