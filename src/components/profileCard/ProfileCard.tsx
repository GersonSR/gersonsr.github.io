import Avatar from "boring-avatars";
import styles from "../../modules/profileCard/ProfileCard.module.css";
import githubIcon from "../../assets/icons/bx-github.svg";
import linkedInIcon from "../../assets/icons/bx-linkedin-square.svg";

// Random String Generator sourced from: https://sentry.io/answers/generate-random-string-characters-in-javascript/
function createRandomString(length: number) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

function ProfileCard() {
  const randomLength = Math.random() * 10;
  const randomString = createRandomString(randomLength);

  return (
    <div className={`${styles.profileContainer}`}>
      <div className={`${styles.imageSection}`}>
        <div className={`${styles.Avatar}`}>
          <Avatar
            name={randomString}
            variant="beam"
            size={80}
            colors={["#0a0310", "#49007e", "#ff005b", "#ff7d10", "#ffb238"]}
          />
        </div>
      </div>
      <div className={`${styles.informationCenter}`}>
        <div className={`${styles.informationMe}`}>
          <div className={`${styles.informationMe__title}`}>
            <span>(Aspiring)</span> Full Stack Dev
          </div>
          <div className={`${styles.informationMe__name}`}>
            Gerson Salmeron Rubio
          </div>
          <div className={`${styles.informationMe__url}`}>
            <a
              href="https://www.gersonsr.github.io"
              target="_blank"
              className={`${styles.link}`}
            >
              gersonsr.github.io
            </a>
          </div>
        </div>
        <div className={`${styles.informationLinks}`}>
          <div className={`${styles.informationLink}`}>
            <a
              href="https://www.linkedin.com/in/gerson-a-salmeron-rubio-a37205100/"
              target="_blank"
              className={`${styles.link}`}
            >
              <img
                src={linkedInIcon}
                alt="LinkedIn logo"
                className={`${styles.icon}`}
              />
              <span>LinkedIn</span>
            </a>
          </div>
          <div className={`${styles.informationLink}`}>
            <a
              href="https://github.com/GersonSR"
              target="_blank"
              className={`${styles.link}`}
            >
              <img
                src={githubIcon}
                alt="Github logo"
                className={`${styles.icon}`}
              />
              <span>Github</span>
            </a>
          </div>
        </div>
      </div>
      <div className={`${styles.contactMe}`}>
        <a href="mailto:salmeron.gerson@gmail.com" className={`${styles.link}`}>
          <span>Contact Me</span>
        </a>
      </div>
    </div>
  );
}

export default ProfileCard;
