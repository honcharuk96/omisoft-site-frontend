import React from 'react';
import  styles from './Navigation.scss';

const Link = props => {
    const url = "/" + props.label.toLowerCase().trim().replace(" ","-")
    return (<div>
            <a href={url}>{props.label}</a>
         </div>
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
    <button>Let`s Talk</button>
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
        {menus.map((value,index) => {
          return <div key={index}><Link label={value}/> </div>
                  })}
        <HeadButton/>
    </header>
)}



export default Navigation;