import React from 'react';
import styles from './LoadingScreen.module.css';

import logo from '../assets/Images/logo.svg';

const LoadingScreen = () => {
    return (
        <div className={styles.loaderContainer}>
            <img src={logo} alt="react" className={styles.loading}></img>
        </div>

    )
}

export default LoadingScreen;