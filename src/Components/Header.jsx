import styled from "../styles/Header.module.css";
import "../styles.css";

const Header = () => {
  return (
    <div className={styled.mainDiv}>
      <div className={styled.container}>
        <h1 className={styled.mainHeading}>Shortly</h1>
        <div className={styled.navBar}>
          <p>Features</p>
          <p>Pricing</p>
          <p>Resources</p>
        </div>
      </div>
      <div className={styled.buttonDiv}>
        <button className={styled.login}>Login</button>
        <button className={styled.signup}>Sign Up</button>
      </div>
      <div className={styled.menuLogo}>
        <i class="fas fa-bars fa-2x"></i>
      </div>
      <nav className={styled.hiddenMenu}>
        <p>Features</p>
        <p>Pricing</p>
        <p>Resources</p>
        <hr />
        <p>Login </p>
        <button>Sign Up</button>
      </nav>
    </div>
  );
};

export default Header;
