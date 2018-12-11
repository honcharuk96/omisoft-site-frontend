import React, { Fragment, Component } from 'react';
import  styles from './Stars.scss';


class SectionHeader extends Component {

  state = {
    s1Shift: 0,
    s2Shift: 0,
    s3Shift: 0,
  }

  componentDidMount() {
    window.addEventListener('wheel', this.onScroll, false);
  }

  onScroll = (e) => {
    this.setState({
      s1Shift: Math.min(Math.max(-300, this.state.s1Shift - e.deltaY / 2), 100),
      s2Shift: Math.min(Math.max(-300, this.state.s2Shift - e.deltaY / 4), 100),
      s3Shift: Math.min(Math.max(-300, this.state.s3Shift - e.deltaY / 6), 100),
    });
  }

  render() {
    return (
      <section className={styles.first} style={this.props.customStyle}>
        <div style={{
          transform: `translateY(${this.state.s1Shift}px)`,
          transitionDuration: '0.2s',
        }} className={styles.stars1}></div>
        <div style={{
          transform: `translateY(${this.state.s2Shift}px)`,
          transitionDuration: '0.2s',
        }} className={styles.stars2}></div>
        <div style={{
          transform: `translateY(${this.state.s3Shift}px)`,
          transitionDuration: '0.2s',
        }} className={styles.stars3}></div>
        {this.props.children}
        </section>
      )
  }
}
export default SectionHeader;