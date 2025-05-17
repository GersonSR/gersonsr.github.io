import React from "react";
import styles from '../../modules/infoCard/InfoCard.module.css'

// Random String Generator sourced from: https://sentry.io/answers/generate-random-string-characters-in-javascript/
function createRandomString(length) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}


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