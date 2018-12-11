import React from 'react';
import  styles from './ContactForm.scss';
import OrangeButton from 'components/OrangeButton';

const ContactForm = props => {
  return (
  <div className={styles.contactForm}>
    <form>
      <div className={styles.contactForm_container}>
      <input type={'text'} placeholder={'Your Name'}/>
      <input type={'text'} placeholder={'Your Surname'}/>
      </div>
      <input type={'email'} placeholder={'Email adress'}/>
      <input type={'tel'} placeholder={'Phone'}/>
      <input type={'text'} placeholder={'Summary of your project'}/>
      <div className={styles.allBlockCheckBox}>What can we help you with?</div>
        <div className={styles.checkBox}>
          <div className={styles.checkBox_select}>
             <label className={styles.container}>Mobile Dev
              <input type="checkbox"/>
              <span className={styles.checkmark}></span>
             </label>
          </div>  
          <div className={styles.checkBox_select}>
            <label  className={styles.container}>Web Dev
              <input type="checkbox"/>
              <span className={styles.checkmark}></span>
            </label>
          </div>  
          <div className={styles.checkBox_select}>      
            <label  className={styles.container}>UI/UX
              <input type="checkbox"/>
              <span className={styles.checkmark}></span>
            </label>  
          </div>   
        </div>
        <OrangeButton buttonText={'Contact Us'}/>
      </form>
  </div>
  )
}
export default ContactForm;
