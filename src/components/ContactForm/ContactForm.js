import React from 'react';
import  styles from './ContactForm.scss';
import OrangeButton from 'components/OrangeButton';

const ContactForm = props => {
  return (
  <div className={styles.contactForm}>
    <form>

      <input type={'text'} placeholder={'Your Name'}/>
      <input type={'text'} placeholder={'Your Surname'}/>
      <input type={'email'} placeholder={'Email adress'}/>
      <input type={'number'} placeholder={'Phone'}/>
      <input type={'text'} placeholder={'Summary of your project'}/>
      <div className={styles.allBlockCheckBox}>What can we help you with?</div>
        <div className={styles.checkBox}>
          <div className={styles.checkBox_select}>
            <input type="checkbox" name="Mobile Dev"/>
            <label htmlFor="Mobile Dev">Mobile Dev</label>
          </div>  
          <div className={styles.checkBox_select}>
            <input type="checkbox"name="Web Dev"/>
            <label htmlFor="Web Dev">Web Dev</label>
          </div>  
          <div className={styles.checkBox_select}>
            <input type="checkbox" name="UI/UX"/>
            <label htmlFor="UI/UX">UI/UX</label>
          </div>  
        </div>
        <OrangeButton buttonText={'Contact Us'}/>
      </form>
  </div>
  )
}
export default ContactForm;