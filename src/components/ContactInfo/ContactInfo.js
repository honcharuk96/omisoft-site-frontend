import React from 'react';
import  styles from './ContactInfo.scss';


const ContactInfo = props => {
  return (
  <div className={styles.contactInfo}>
    <h2>Tell us more about your project!</h2>
    <span>Rather talk to a human?</span>
     <div className={styles.href}> 
        <a href={'mailto:sales@omisoft.net'}>sales@omisoft.net</a>
       </div>
  </div>
  )
}
export default ContactInfo;