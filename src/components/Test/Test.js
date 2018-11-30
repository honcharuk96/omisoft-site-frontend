import React from 'react';
import  styles from './Test.scss';

const Test = props => {
    console.log("test")
    const {info,test} = props;
    console.log(props)

    return <div >
            <button onClick={() => test("info")}>Test4</button>
            <div className={styles.test}>{info}</div>
        </div>
}
export default Test;