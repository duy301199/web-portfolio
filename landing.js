import React from 'react';
import styles from './Landing.module.css';

function Landing() {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <img src="DNland.png" alt="Background Image" className={styles.bgImage} />
            </div>
            <div className={styles.right}>
                <h1>Welcome</h1>
                <p>Together, we can make a difference. Let's innovate with <span className={styles.highlightName}>Duy Nguyen</span>.</p>
            </div>
        </div>
    );
}

export default Landing;
