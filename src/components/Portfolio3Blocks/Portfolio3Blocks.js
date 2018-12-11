import React from 'react';
import styles from './Portfolio3Blocks.scss';



const Portfolio3Blocks = props => {
  const blocks = [
    {
      title: "Unilingo",
      body: "Mobile app for people who want to be healthy. Mobile app for people.",
      icon: require('../../assets/unilinguo_image_image.png'),
    },
    {
      title: "Rapidgator",
      body: "Mobile app for people who want to be healthy. Mobile app for people.",
      icon: require('../../assets/rapidgator.png'),
    }, 
    {
      title: "FatFree",
      body: "Mobile app for people who want to be healthy",
      icon: require('../../assets/diets_image.png'),
    }, 
  ]
  console.log(blocks);
  return( 
 
     <div className={styles.head}>
      {blocks.map((value,index) => {
        return <div className={styles.block} key={index}>
                  <div>
                    <img src={value.icon} />
                  </div>
                  <div className={styles.portfolioText}>
                    <h3>{value.title}</h3>
                    <span >{value.body}</span>
                    <div className={styles.readMore}>Read More</div>
                  </div>
                </div>
        })}
     </div>
)}
export default Portfolio3Blocks;