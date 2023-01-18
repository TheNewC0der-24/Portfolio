import React from 'react';
import styles from './Sidebar.module.css';

import { useNavigate } from 'react-router-dom';

const Sidebar = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className="offcanvas offcanvas-start" style={{ backgroundColor: "#dee2e6", color: "#0e1313" }} data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title fw-bold" style={{ borderBottom: "2px solid #0e1313" }} id="offcanvasWithBothOptionsLabel">Know More</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <p>Hello,</p>
                    <p>Greetings of the day! Hope you are doing well.</p>

                    <p className='my-4'>If you want to know about my EDUCATION, INTERESTS, and SKILLS... then just click the 👇 links... </p>
                    <div className={styles.nav}>
                        <button className={`${styles.btn} btn btn-primary my-3`} data-bs-dismiss="offcanvas" onClick={() => navigate("./education")}>
                            .education()
                        </button>
                        <button className={`${styles.btn} btn btn-primary my-3`} data-bs-dismiss="offcanvas" onClick={() => navigate("./interest")}>
                            .interest()
                        </button>
                        <button className={`${styles.btn} btn btn-primary my-3`} data-bs-dismiss="offcanvas" onClick={() => navigate("./skills")}>
                            .skills()
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar;