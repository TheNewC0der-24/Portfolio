import React from 'react';
import styles from './LoadingScreen.module.css';

const LoadingScreen = () => {
    return (
        <div className={styles.loaderContainer}>
            <h1 className={styles.loading}></h1>
            <h2 className="fw-bold">Loading...</h2>
        </div>
    )
}

export default LoadingScreen;