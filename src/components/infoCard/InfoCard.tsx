import styles from '../../modules/infoCard/InfoCard.module.css'
import ProfileCard from "../profileCard/ProfileCard";



function InfoCard() {
    return (
        <>
            <div className={`${styles.mainCardBody}`}>
                <div className={`${styles.innerCard}`}>
                    <ProfileCard />
                </div>
                <div className={`${styles.cardSubtitle}`}>
                    <p>This page is undergoing renovation!</p>
                </div>
            </div>
        </>
    );
};

export default InfoCard;