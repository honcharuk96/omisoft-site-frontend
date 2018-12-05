import React from 'react';
import  styles from './SectionCode.scss';
import SectionCodeInformation from '../SectionCodeInformation/SectionCodeInformation';
import CodeCategories from '../CodeCategories/CodeCategories';

const SectionCode = props => {
  return (
    <section className={styles.main}>
      <SectionCodeInformation/>
      <CodeCategories/>
    </section>
  )
}
export default SectionCode;