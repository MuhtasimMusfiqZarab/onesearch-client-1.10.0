import React, { FC, useState } from 'react';
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

const Login: FC<Props> = (): JSX.Element => {
  const [isSignUpMode, setIsSignupMode] = useState<boolean>(false);

  return (
    <>
      <div className={`login-container  ${isSignUpMode ? 'signup-mode' : ''} `}>
        <div className="forms-container">
          <div className="signin-signup">
            <form action="" className="sign-in-form">
              <h2 className="title">Sign In</h2>
              <div className="input-field">
                <div className="icon">
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <div className="icon">
                  <FontAwesomeIcon icon={faLock} />
                </div>

                <input type="password" placeholder="Password" />
              </div>
              <input type="text" value="Login" className="btn btn-solid" />
              <p className="social-text">Or sign in with social platforms</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <FacebookIcon />
                </a>
                <a href="#" className="social-icon">
                  <YoutubeIcon />
                </a>
                <a href="#" className="social-icon">
                  <GoogleMapIcon />
                </a>
                <a href="#" className="social-icon">
                  <GoogleMapIcon />
                </a>
              </div>
            </form>
            <form action="" className="sign-up-form">
              <h2 className="title">Sign Up</h2>
              <div className="input-field">
                <div className="icon">
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <div className="icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <input type="text" placeholder="Email" />
              </div>
              <div className="input-field">
                <div className="icon">
                  <FontAwesomeIcon icon={faLock} />
                </div>

                <input type="password" placeholder="Password" />
              </div>
              <input type="text" value="Sign up" className="btn btn-solid" />
              <p className="social-text">Or sign up with social platforms</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <FacebookIcon />
                </a>
                <a href="#" className="social-icon">
                  <YoutubeIcon />
                </a>
                <a href="#" className="social-icon">
                  <GoogleMapIcon />
                </a>
                <a href="#" className="social-icon">
                  <GoogleMapIcon />
                </a>
              </div>
            </form>
          </div>
        </div>
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New Here?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti accusamus libero exercitationem neque,
              </p>
              <button
                className="btn transparent"
                id="sign-up-button"
                onClick={() => setIsSignupMode(true)}
              >
                Sign Up
              </button>
            </div>
            <img src="/sign.svg" alt="" className="image" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>Have an account?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti accusamus libero exercitationem neque,
              </p>
              <button
                className="btn transparent"
                id="sign-in-button"
                onClick={() => setIsSignupMode(false)}
              >
                Sign In
              </button>
            </div>

            <img src="/sign.svg" alt="" className="image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
