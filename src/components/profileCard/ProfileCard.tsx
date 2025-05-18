import Avatar from "boring-avatars";
import styles from "../../modules/profileCard/ProfileCard.module.css";
import githubIcon from "../../assets/icons/bx-github.svg";
import linkedInIcon from "../../assets/icons/bx-linkedin-square.svg";
import gsap from "gsap";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import { useGSAP } from "@gsap/react";

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

gsap.registerPlugin(DrawSVGPlugin, useGSAP);

function ProfileCard() {
  const randomLength = Math.random() * 10;
  const randomString = createRandomString(randomLength);

  useGSAP(() => {
    gsap.set("#drive", { drawSVG: false });

    gsap
      .timeline({ delay: 0.75 })
      .to("#drive", {
        drawSVG: "0% 10%",
        ease: "power1.in",
      })
      .to("#drive", {
        drawSVG: "100% 110%",
        ease: "power1.out",
        repeat: -1,
        duration: 3
      });
  });

  return (
    <div className={`${styles.profileContainer}`}>
      <div className={`${styles.imageSection}`}>
        <div className={`${styles.Avatar}`}>
          <Avatar
            name={randomString}
            variant="beam"
            size={85}
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
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="5px">
          <line className={`${styles.path}`} x1="0" y1="50%" x2="100%" y2="50%" />
          <line
            id="drive"
            className={`${styles.target}`}
            x1="0"
            y1="50%"
            x2="100%"
            y2="50%"
          />
        </svg>
        <a href="mailto:salmeron.gerson@gmail.com" className={`${styles.link}`}>
          <span>Contact Me</span>
        </a>
      </div>
    </div>
  );
}

export default ProfileCard;
