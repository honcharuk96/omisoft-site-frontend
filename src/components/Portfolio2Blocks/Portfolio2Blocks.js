import React from 'react';
import styles from './Portfolio2Blocks.scss';



const Portfolio2Blocks = props => {
  const blocks = [
    {
      title: "Complex iOS, Android and web solution - MK Client",
      body: "Short text description of what we do here",
      icon: require('../../assets/mk_image.png'),
    },
    {
      title: "App for crypto payments",
      body: "Short text description of what we do here",
      icon: require('../../assets/_crypt0_image.png'),
    }, 
  ]
  // console.log(blocks);
  return( 
 
    <div className={styles.head}>
    {blocks.map((value,index) => {
      return <div className={styles.blockwrap} key={index}>
                <div>
                  <img src={value.icon} />
                </div>
                <div className={styles.portfolioText}>
                  <h3>{value.title}</h3>
                  <span >{value.body}</span>
                  <div className={styles.readMore}>
                 Read More
                  </div>
                </div>
              </div>
      })}
   </div>
)}


export default Portfolio2Blocks;