import React from 'react';
import  styles from './SectionFooter.scss';
import Navigation from 'components/Navigation'

const GetInTouch = props => {
return(
  <div className={styles.getInTouch}>
  <h4>Get in touch</h4>
    <div className={styles.href}>
    <a href='mailto:sales@omisoft.net'>sales@omisoft.net</a>
    </div>
    <span>Saska Keka, 24 <br/>Warsaw</span>
  </div>
)
}
const DropUs = props => {
  return (
    <div className={styles.drop}>
      <h4>Drop us as a line!</h4>
      <div className={styles.social}>
        <div className={styles.socialLink}>
        in
        </div>
        <div className={styles.socialLink}>
         f
        </div>
        <div className={styles.socialLink}>
              </div>
      </div>
    </div>
  )
}

const Logo = props => {
  return (
    <div className={styles.logo}></div>
  )
}
const Privacy = props => {
  return(
    <div className={styles.privacyall}>
      <div className={styles.privacy_omisoft}>OMISOFT LLC. All rights reserverd. 2018</div>
      <div className={styles.privacy}>Privacy policy</div>
    </div>
  )
}
const SectionFooter = props => {
  return(
    <section className={styles.footerContainer}>
    <Logo/>
    <GetInTouch/>
    <DropUs/>
<Privacy/>
    </section>

    

  )
}
export default SectionFooter;