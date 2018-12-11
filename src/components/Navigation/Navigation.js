import React from 'react';
import  styles from './Navigation.scss';

const Link = props => {
    const url = "/" + props.label.toLowerCase().trim().replace(" ","-")
    return (<li className={styles.nav_list}>
            <div onClick={() => {
              let elem = document.getElementById(props.label);
              console.log(elem);
              elem.scrollIntoView();
            }}>{props.label}</div>
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
    <div className={styles.nav_button}><span>Let`s Talk</span></div>
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
class Navigation extends React.Component {
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
    window.addEventListener('wheel', this.onScroll, false);
    window,addEventListener('scroll', s => this.setState({scrollTop: s.target.scrollingElement.scrollTop}));

    
  }

  onScroll = (e) => {
    this.setState({
      flag: e.deltaY <= 0,
    });
  }

  render() {
  let {flag} = this.state;

  return ( <header  className={flag && (this.state.scrollTop !== 0) ? styles.headFixed : styles.head } >
      <Logo/>
        <ul >{menus.map((value,index) => {
          return <Link key={index} label={value}/>})}
        </ul>
        <HeadButton/>
    </header>
)}
  };




export default Navigation;