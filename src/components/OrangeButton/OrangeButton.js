import React from 'react';
import  styles from './OrangeButton.scss';

const OrangeButton = props => {
  const {buttonText, onClick} = props;
  return (
  <button onClick={onClick} className={styles.orangeButton}>{props.buttonText}</button>
  )
}
export default OrangeButton;