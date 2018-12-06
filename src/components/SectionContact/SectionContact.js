import React from 'react';
import  styles from './SectionContact.scss';
import ContactForm from '../ContactForm/ContactForm';
import ContactInfo from '../ContactInfo/ContactInfo';

const SectionContact = props => {
  return (
  <div className={styles.main}>
  <ContactInfo/>
    <ContactForm/>
  </div>
  )
}
export default SectionContact;