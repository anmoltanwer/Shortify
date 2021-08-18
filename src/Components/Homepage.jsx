import styles from "../styles/Homepage.module.css";
import "../styles.css";
import Logo from "../Assests/illustration-working.svg";

const Homepage = () => {
  return (
    <div className={styles.mainConatiner}>
      <div className={styles.Conatiner}>
        <p className={styles.mainHeading}>More than just shorter link</p>
        <p className={styles.subHeading}>
          Build your brand's recognization and get detailed insights on how your
          links are performing.
        </p>
        <button className={styles.signup}>Get Started</button>
      </div>
      <div className={styles.Conatiner}>
        <img id="logo" src={Logo} alt="Main-Logo" width="130%" height="100%" />
      </div>
    </div>
  );
};

export default Homepage;
