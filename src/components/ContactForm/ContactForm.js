import React, {Component} from 'react';
import axios from 'axios';

import  styles from './ContactForm.scss';
import OrangeButton from 'components/OrangeButton';

class ContactForm extends Component {

  state = {
    company: '',
    country: '',
    email: '',
    first_name: '',
    comment: '',
    last_name: '',
    phone: '',
    intesrests: {
      mobile: false,
      web: false,
      uiux: false,
    }
  }

  sendForm = () => {
    axios.post('http://ualegion.com:9999/api/v1/messages', JSON.stringify(this.state)).then(res => alert(JSON.stringify(res)));
    console.log(this.state);
  }

  render() {
    return (
      <div className={styles.contactForm}>
        <form>
          <div className={styles.contactForm_container}>
          <input onChange={v => this.setState({first_name: v.target.value})} value={this.state.first_name} type={'text'} placeholder={'Your Name'}/>
          <input onChange={v => this.setState({company: v.target.value})} value={this.state.company} type={'text'} placeholder={'Your Company'}/>
          </div>
          <input onChange={v => this.setState({email: v.target.value})} value={this.state.email} type={'email'} placeholder={'Email adress'}/>
          <input onChange={v => this.setState({phone: v.target.value})} value={this.state.phone} type={'tel'} placeholder={'Phone'}/>
          <input onChange={v => this.setState({comment: v.target.value})} value={this.state.comment} type={'text'} placeholder={'Summary of your project'}/>

          <div className={styles.allBlockCheckBox}>What can we help you with?</div>
            <div className={styles.checkBox}>
              <div className={styles.checkBox_select}>
                 <label className={styles.container}>Mobile Dev
                  <input value={this.state.intesrests.mobile} onChange={v => this.setState({
                    intesrests: {
                      ...this.state.intesrests,
                      mobile: !this.state.intesrests.mobile,
                    }
                  })} type="checkbox"/>
                  <span className={ this.state.intesrests.mobile ? styles.checkmark : styles.checkmarkDisabled}></span>
                 </label>
              </div>
              <div className={styles.checkBox_select}>
                <label  className={styles.container}>Web Dev
                  <input value={this.state.intesrests.web} onChange={v => this.setState({
                    intesrests: {
                      ...this.state.intesrests,
                      web: !this.state.intesrests.web,
                    }
                  })} type="checkbox"/>
                  <span className={ this.state.intesrests.web ? styles.checkmark : styles.checkmarkDisabled}></span>
                </label>
              </div>  
              <div className={styles.checkBox_select}>      
                <label  className={styles.container}>UI/UX
                  <input value={this.state.intesrests.uiux} onChange={v => this.setState({
                    intesrests: {
                      ...this.state.intesrests,
                      uiux: !this.state.intesrests.uiux,
                    }
                  })} type="checkbox"/>
                  <span className={ this.state.intesrests.uiux ? styles.checkmark : styles.checkmarkDisabled}></span>
                </label>  
              </div>   
            </div>
            
          </form>
          <OrangeButton onClick={() => this.sendForm()} buttonText={'Contact Us'}/>
      </div>
      )
  }
  
}
export default ContactForm;
