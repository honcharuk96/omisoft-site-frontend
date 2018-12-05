import React from 'react';
import  styles from './CodeCategories.scss';

const CodeCategories = props => {
  const categories = [
    {
      title: "Mobile development",
      body: "Short text description of what we do here",
      revativeIcon: require('../../assets/mobile_dev_underlay.svg'),
      absoluteIcon: require('../../assets/mobile_dev_icon.svg'),
    },
    {
      title: "Web development",
      body: "Short text description of what we do here",
      revativeIcon: require('../../assets/web_dev_underlay.svg'),
      absoluteIcon: require('../../assets/web_dev_icon.svg'),
    }, 
   {
      title: "UI&UX Design",
      body: "Short text description of what we do here",
      revativeIcon: require('../../assets/UX_underlay.svg'),
      absoluteIcon: require('../../assets/UX_icon.svg'),
    },
    {
      title: "Blockchain",
      body: "Short text description of what we do here",
      revativeIcon: require('../../assets/blockchain_underlay.svg'),
      absoluteIcon: require('../../assets/blockchain_icon.svg'),
    },
  ]
  console.log(categories);
  return( 
 
     <div className={styles.head}>{categories.map((value,index) => {
        return <div className={styles.block} key={index}>
        <div className={styles.imageCategories}>
        <img src={value.revativeIcon} />
        <img src={value.absoluteIcon} className={styles.absoluteIcon}/>
        </div>
        <h3>{value.title}</h3>
      <span >{value.body}</span>
      </div>
                })}
      </div>
)}


export default CodeCategories;