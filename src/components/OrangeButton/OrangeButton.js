import React from 'react';
import  styles from './OrangeButton.scss';

const OrangeButton = props => {
  const {buttonText} = props;
  return (
    <button>{props.buttonText}</button>
  )
}
export default OrangeButton;