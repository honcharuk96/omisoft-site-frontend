import React from 'react';
import  styles from './Navigation.scss';

const Link = props => {
    const url = "/" + props.label.toLowerCase().trim().replace(" ","-")
    return (<li className={styles.nav_list}>
            <a href={url}>{props.label}</a>
         </li>
    )
}

const Logo = props => {
  return(
    <div className={styles.headLogo}>

    </div>
  )
}
const HeadButton = props => {
  return(
    <div className={styles.nav_button}>Let`s Talk</div>
  )
}

const Navigation = props => {
    const menus = [
        "Home",
        "Portfolio",
        "Blog",
        "Careers"
    ]
    return( 
    <header className={styles.head}>
      <Logo/>
       <ul >{menus.map((value,index) => {
          return <Link key={index} label={value}/>
                  })}
        </ul>
        <HeadButton/>
    </header>
)}



export default Navigation;