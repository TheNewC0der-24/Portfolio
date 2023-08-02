import React from 'react';
import styles from './OffCanvas.module.css';

const OffCanvas = () => {
    return (
        <div className={`${styles.offCanvas} offcanvas offcanvas-bottom`} tabIndex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
            <div className={`${styles.offCanvasHeader} offcanvas-header`}>
                <h5 className="offcanvas-title" id="offcanvasBottomLabel">More About Me</h5>
                <button className={`${styles.closeBtn} btn-close`} data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body" align="center">
                I am a creative and proficient Frontend Developer with over 1 year of experience, I have successfully worked on various web projects for clients across different industries. My expertise lies in responsive design, accessibility, and website optimization. Additionally, I have completed several online certification courses. I am a problem-solver with excellent communication skills, and I thrive under pressure. My commitment is to deliver high-quality solutions that not only meet user needs but also exceed client expectations.
            </div>
        </div >
    )
}

export default OffCanvas;
