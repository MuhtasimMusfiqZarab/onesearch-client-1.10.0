import React, { FC, useState } from 'react';
import TopNav from '../shared/topnav/version2';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styles from './style.module.scss';

import {
  YoutubeIcon,
  FacebookIcon,
  GoogleMapIcon,
  SigninIcon,
  SignupIcon,
} from 'components/_icons';

export interface Props {}

const index: FC<Props> = (): JSX.Element => {
  const [isSignUpMode, setIsSignupMode] = useState<boolean>(false);

  return (
    <>
      <TopNav isTransperant />
      <div
        className={`${styles.loginContainer}  ${
          isSignUpMode ? styles.signupMode : ''
        } `}
      >
        <div className={styles.formsContainer}>
          <div className={styles.signinSignup}>
            <form action="" className={styles.signinForm}>
              <h2 className={styles.title}>Sign In</h2>
              <div className={styles.inputField}>
                <div className={styles.icon}>
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <input type="text" placeholder="Username" />
              </div>
              <div className={styles.inputField}>
                <div className={styles.icon}>
                  <FontAwesomeIcon icon={faLock} />
                </div>

                <input type="password" placeholder="Password" />
              </div>
              <input
                type="text"
                value="Login"
                className={`${styles.btn} ${styles.btnSolid} `}
              />
              <p className={styles.socialText}>
                Or sign in with social platforms
              </p>
              <div className={styles.socialMedia}>
                <a href="#" className={styles.socialIcon}>
                  <FacebookIcon />
                </a>
                <a href="#" className={styles.socialIcon}>
                  <YoutubeIcon />
                </a>
                <a href="#" className={styles.socialIcon}>
                  <GoogleMapIcon />
                </a>
                <a href="#" className={styles.socialIcon}>
                  <GoogleMapIcon />
                </a>
              </div>
            </form>
            <form action="" className={styles.signupForm}>
              <h2 className="title">Sign Up</h2>
              <div className={styles.inputField}>
                <div className={styles.icon}>
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <input type="text" placeholder="Username" />
              </div>
              <div className={styles.inputField}>
                <div className={styles.icon}>
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <input type="text" placeholder="Email" />
              </div>
              <div className={styles.inputField}>
                <div className={styles.icon}>
                  <FontAwesomeIcon icon={faLock} />
                </div>

                <input type="password" placeholder="Password" />
              </div>
              <input
                type="text"
                value="Sign up"
                className={`${styles.btn} ${styles.btnSolid} `}
              />
              <p className={styles.socialText}>
                Or sign up with social platforms
              </p>
              <div className={styles.socialMedia}>
                <a href="#" className={styles.socialIcon}>
                  <FacebookIcon />
                </a>
                <a href="#" className={styles.socialIcon}>
                  <YoutubeIcon />
                </a>
                <a href="#" className={styles.socialIcon}>
                  <GoogleMapIcon />
                </a>
                <a href="#" className={styles.socialIcon}>
                  <GoogleMapIcon />
                </a>
              </div>
            </form>
          </div>
        </div>
        <div className={styles.panelsContainer}>
          <div className={`${styles.panel} ${styles.leftPanel} `}>
            <div className={styles.content}>
              <h3>New Here?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti accusamus libero exercitationem neque,
              </p>
              <button
                className={`${styles.btn} ${styles.transparent} `}
                id="sign-up-button"
                onClick={() => setIsSignupMode(true)}
              >
                Sign Up
              </button>
            </div>
            <img src="/sign.svg" alt="" className={styles.image} />
          </div>
          <div className={`${styles.panel} ${styles.rightPanel} `}>
            <div className={styles.content}>
              <h3>Have an account?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti accusamus libero exercitationem neque,
              </p>
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

export default index;
