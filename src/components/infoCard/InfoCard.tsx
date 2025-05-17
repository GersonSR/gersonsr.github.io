import React from "react";
import styles from '../../modules/infoCard/InfoCard.module.css'
function InfoCard() {
    return (
        <>
            <div className={`${styles.mainCardBody}`}>
                <div className={`${styles.innerCard}`}>
                    Main Card
                </div>
                <div className={`${styles.cardSubtitle}`}>
                    <p>This page is under renovation!</p>
                </div>
            </div>
        </>
    );
};

export default InfoCard;