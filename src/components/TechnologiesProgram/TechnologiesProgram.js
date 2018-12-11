import React, {Component} from 'react';
import styles from './TechnologiesProgram.scss';



class TechnologiesProgram extends Component {

  state = {
    blockShift: 0,
  }

  componentDidMount() {
    window.addEventListener('wheel', this.onScroll, false);
  }

  onScroll = (e) => {
    this.setState({
      blockShift: Math.min(Math.max(-100, this.state.blockShift - e.deltaY / 4), 100),
    });
    // console.log(this.state.blockShift);
  }

  render() {
    return (
      <div style={{
        transform: `translateY(${this.state.blockShift}px)`,
        transitionDuration: '1s',
      }} className={styles.allRounds}>
        {/* <svg width='100%' height='100px'>
          <path d='C 422, 42, 512, 272, 804, 124' fill="red" stroke="green" stroke-width="4"/>
          <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
        </svg> */}
        <div className={styles.rounds1}>
         <img src={require('../../assets/Kotlin.png')}/>
        </div>
        <div className={styles.rounds2}>
         <img src={require('../../assets/Spring.png')}/>
        </div>
        <div className={styles.rounds3}>
         <img src={require('../../assets/react.png')}/>
        </div>
        <div className={styles.rounds4}>
         <img src={require('../../assets/Swift.png')}/>
        </div>
        <div className={styles.rounds5}>
         <img src={require('../../assets/Kotlin.png')}/>
        </div>
        <div className={styles.rounds6}>
          <img src={require('../../assets/Java.png')}/>
        </div>
      </div>
      )
  }
  
}
export default TechnologiesProgram;