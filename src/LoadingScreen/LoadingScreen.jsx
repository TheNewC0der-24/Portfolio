import React from 'react';
import styles from './LoadingScreen.module.css';

const LoadingScreen = () => {
    return (
        <div className={styles.loaderContainer}>
            <div className={styles.loading}></div>
            <h2 className="fw-bold">Loading...</h2>
        </div>
    )
}

export default LoadingScreen;