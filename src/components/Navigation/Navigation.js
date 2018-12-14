import React, { Fragment, PureComponent } from 'react';
import { hot } from 'react-hot-loader';
import cn from 'classnames';
import  styles from './Navigation.scss';

const Link = ({ label, isFixed }) => {
    const url = "/" + label.toLowerCase().trim().replace(" ","-")
    return (<li className={styles.nav_list}>
            <div onClick={() => {
              let elem = document.getElementById(label);
              console.log(elem);
              elem.scrollIntoView();
            }}>{label}</div>
         </li>
    )
}

const Logo = ({ isFixed }) => {
  return(
    <div className={styles.headLogo }>

    </div>
  )
}
const HeadButton = props => {
  
  return(
    <div className={styles.wrapperBut}>
  <a className={styles.button} href="#"><span className={styles.txtBb}>Let's talk</span></a>
</div>
    // <div className={styles.nav_button}><span className={styles.nav_buttonText}>Let`s Talk</span></div>
  )
}

// const Navigation = props => {
//     const menus = [
//         "Home",
//         "Portfolio",
//         "Blog",
//         "Careers"
//     ]
//     return( 
//     <header className={styles.head}>
//       <Logo/>
//        <ul >{menus.map((value,index) => {
//           return <Link key={index} label={value}/>
//                   })}
//         </ul>
//         <HeadButton/>
//     </header>
// )}

  const menus = [
    "Home",
    "Portfolio",
    "Blog",
    "Careers"
  ];

  // menu = React.findDOMNode(this.refs.header)
class Navigation extends React.PureComponent {
state = {
  flag: false,
  scrollTop: 0,
}

getScrollTop() {
  let element = document.getElementById('app');
  return document.body.scrollTop;
}

constructor(props){
  super (props);
}
  componentDidMount() {
    let flag;
    window.addEventListener('wheel', (e) => flag = e.deltaY <= 0 , false);
    window,addEventListener('scroll', s => this.setState({scrollTop: s.target.scrollingElement.scrollTop}));
    setInterval(() => {
      this.setState({
        flag
      });
    }, 500);
    
  }

  onScroll = (e) => {
    this.setState({
      flag: e.deltaY <= 0,
    });
  }

  render() {
  let {flag} = this.state;

  return ( 
    <Fragment>
      <header id={'header'} className={styles.head} >
        <Logo />
        <ul  className={cn([flag && (this.state.scrollTop !== 0) ? styles.listFixed : styles.list ])}  >{menus.map((value,index) => {
          return <Link key={index} label={value}/>})}
        </ul>
        <HeadButton/>
      </header>
      <header className={cn([styles.headFixed, flag && (this.state.scrollTop !== 0) ? styles.addHeight : styles.removeHeight, styles.animation]) } >
        <Logo />
        <ul  className={cn([flag && (this.state.scrollTop !== 0) ? styles.listFixed : styles.list ])}  >{menus.map((value,index) => {
          return <Link key={index} label={value}/>})}
        </ul>
        <HeadButton/>
      </header>
      {/* <header id={'header'} className={cn([flag && (this.state.scrollTop !== 0) ? cn([styles.headFixed, styles.head]) : styles.head, styles.animation]) } >
        <Logo />
        <ul  className={cn([flag && (this.state.scrollTop !== 0) ? styles.listFixed : styles.list ])}  >{menus.map((value,index) => {
          return <Link key={index} label={value}/>})}
        </ul>
        <HeadButton/>
      </header> */}
    </Fragment>
)}
  };

export default hot(module)(Navigation);