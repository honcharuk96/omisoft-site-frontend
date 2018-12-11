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
class NavigatioFixed extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return ( <header  className={styles.headFixed}>
      <Logo/>
       <ul >{menus.map((value,index) => {
          return <Link key={index} label={value}/>
                  })}
        </ul>
        <HeadButton/>
    </header>
    )
  }
}
  // menu = React.findDOMNode(this.refs.header)
class Navigation extends React.Component {
state = {
  flag: false,
}

constructor(props){
  super (props);
  // this.menu = React.findDOMNode(this.refs.header)
}
  componentDidMount() {
    window.addEventListener('wheel', this.onScroll, false);
  }

  onScroll = (e) => {
    this.setState({
      flag: e.deltaY <= 0,
    });
    console.log(e.deltaY);
  }

  

  render() {
    let {flag} = this.state;
    console.log("zaloopa", flag);

   return ( <header  className={flag ? styles.headFixed : styles.head } >
      <Logo/>
       <ul >{menus.map((value,index) => {
          return <Link key={index} label={value}/>
                  })}
        </ul>
        <HeadButton/>
    </header>
)}
  };




export default Navigation;