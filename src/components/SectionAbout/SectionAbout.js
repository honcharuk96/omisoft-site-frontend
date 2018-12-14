import React from 'react';
import styles from './SectionAbout.scss';
import AboutSlider from '../AboutSlider/AboutSlider';
import { AboutInfo } from 'containers';

class SectionAbout extends React.Component {
   componentDidMount(){
    fetch('http://ualegion.com:9999/api/v1/blog/posts/tag?', 
    {
      headers: {
        'Accept-Language': 'en'
      }
    }).then(res => res.json())
      .then(res => console.log(res))
  }

  render() {
    return(
      <div id="Blog" className={styles.about}>
      <AboutInfo/>
        <AboutSlider/>
     </div>
    )
  }
}

export default SectionAbout;