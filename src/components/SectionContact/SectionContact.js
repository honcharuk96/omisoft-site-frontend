import React from 'react';
import  styles from './SectionContact.scss';
import ContactForm from '../ContactForm/ContactForm';
import ContactInfo from '../ContactInfo/ContactInfo';

const SectionContact = props => {
  return (
  <div className={styles.main}>
  <ContactInfo/>
    <ContactForm/>
    <div className={styles.contactCloud}></div>
  </div>
  )
}
export default SectionContact;