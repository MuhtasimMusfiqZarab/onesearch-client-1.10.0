import React, { FC, useState } from "react";
import TopNav from "components/shared/topnav/version2";
import styles from "./style.module.scss";
import { GoogleIcon, Logo } from "components/_icons";

export interface Props {}

const Index: FC<Props> = (): JSX.Element => {
  const [isSignUpMode, setIsSignupMode] = useState<boolean>(false);

  return (
    <>
      <TopNav isTransperant />
      <div
        className={`${styles.loginContainer}  ${
          isSignUpMode ? styles.signupMode : ""
        } `}
      >
        <div className={styles.formsContainer}>
          <div className={styles.signinSignup}>
            <form className={styles.signinForm}>
              <h2 className={styles.title}>
                <Logo />
              </h2>
              <div className={styles.divider} />
              <div className={`${styles.button}`}>
                <GoogleIcon />
                <div>Login with google(Upcoming)</div>
              </div>
            </form>
            <form action="" className={styles.signupForm}>
              <h2 className={styles.title}>
                <Logo />
                <div>OneSearch</div>
              </h2>
              <div className={styles.divider} />
              <div className={`${styles.button}`}>
                <GoogleIcon />
                <div>Sign Up with google</div>
              </div>
            </form>
          </div>
        </div>
        <div className={styles.panelsContainer}>
          <div className={`${styles.panel} ${styles.leftPanel} `}>
            <div className={styles.content}>
              <h3>New Here?</h3>
              <p>Login with your google account</p>
              <button
                className={`${styles.btn} ${styles.transparent} `}
                id="sign-up-button"
                onClick={() => setIsSignupMode(false)}
              >
                Sign Up
              </button>
            </div>
            <img src="/sign.svg" alt="" className={styles.image} />
          </div>
          <div className={`${styles.panel} ${styles.rightPanel} `}>
            <div className={styles.content}>
              <h3>Have an account?</h3>
              <p>Signin with your google account.</p>
              <button
                className={`${styles.btn} ${styles.transparent} `}
                id="sign-in-button"
                onClick={() => setIsSignupMode(false)}
              >
                Sign In
              </button>
            </div>

            <img src="/sign.svg" alt="" className={styles.image} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
