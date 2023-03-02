import { FaAngleUp } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import styles from '../styles/scrollToTop.module.scss';

export default function ScrollToTop() {
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div className={styles.topToBtm}>
            {" "}
            {showTopBtn && (
                <FaAngleUp
                    className={styles.iconPositionStyle}
                    onClick={goToTop}
                />
            )}{" "}
        </div>
    );
};