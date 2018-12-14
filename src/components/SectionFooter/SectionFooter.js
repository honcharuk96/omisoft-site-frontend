import React from 'react';
import  styles from './SectionFooter.scss';
import Navigation from 'components/Navigation'


const Link = props => {
  const url = "/" + props.label.toLowerCase().trim().replace(" ","-")
  return (<li className={styles.nav_listFoo}>
          <div onClick={() => {
            let elem = document.getElementById(props.label);
            console.log(elem);
            elem.scrollIntoView();
          }}>{props.label}</div>
       </li>
  )
}
const Menu = props => {
    const menus = [
        "Home",
        "Portfolio",
        "Blog",
        "Careers"
    ]
    return( 
    <div className={styles.footerMenu}>
      <div className={styles.label}>
      Menu
      </div>
       <ul >{menus.map((value,index) => {
          return <Link key={index} label={value}/>
                  })}
        </ul>
    </div>
)}
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
        <a href={'/'} className={styles.in}></a>
        </div>
        <div className={styles.socialLink}>
        <a href={'/'} className={styles.f}></a>
        </div>
        <div className={styles.socialLink}>
        <a href={'/'} className={styles.t}></a>
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

const SectionFooter = props => {
  return(
    <section className={styles.footerContainer}>
    <Logo/>
    <Menu/>
    <GetInTouch/>
    <DropUs/>
    </section>

    

  )
}
export default SectionFooter;