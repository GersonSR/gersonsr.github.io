import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { horizontalLoop } from "../../components/gsapHelperFunctions/GSAPHelperFunctions";
import styles from "../../modules/homePage/HomePage.module.css";

gsap.registerPlugin(useGSAP);

function HomePage() {
  useGSAP(() => {
    const titles = gsap.utils.toArray(".box");
    const colors = ["#0ae448", "#9d95ff", "#abff84", "#00bae2"];
    gsap.set(titles, {
      backgroundColor: gsap.utils.wrap(colors),
    });
    const loop = horizontalLoop(titles, { repeat: -1 });
  });

  useGSAP(() => {
    const titles = gsap.utils.toArray(".box");
    const colors = ["#0ae448", "#9d95ff", "#abff84", "#00bae2"];
    gsap.set(titles, {
      backgroundColor: gsap.utils.wrap(colors),
    });
    const loop = horizontalLoop(titles, { repeat: -1, reversed: true });
  }, {scope: "#footer-wrapper"});

  

  return (
    <>
      <div id="wrapper" className={styles.wrapper}>
        <div className={`${styles.title} box`}>Under Construction</div>
        <div className={`${styles.title} box`}>Under Construction</div>
        <div className={`${styles.title} box`}>Under Construction</div>
        <div className={`${styles.title} box`}>Under Construction</div>
        <div className={`${styles.title} box`}>Under Construction</div>
        <div className={`${styles.title} box`}>Under Construction</div>
        <div className={`${styles.title} box`}>Under Construction</div>
      </div>
      <div id="footer-wrapper" className={styles.footerWrapper}>
        <div className={`${styles.title} box`}>Under Construction</div>
        <div className={`${styles.title} box`}>Under Construction</div>
        <div className={`${styles.title} box`}>Under Construction</div>
        <div className={`${styles.title} box`}>Under Construction</div>
        <div className={`${styles.title} box`}>Under Construction</div>
        <div className={`${styles.title} box`}>Under Construction</div>
        <div className={`${styles.title} box`}>Under Construction</div>
      </div>
    </>
  );
}

export default HomePage;
