import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';

import {
  YoutubeIcon,
  FacebookIcon,
  GoogleMapIcon,
  SettingsIcon,
  ExpandIcon,
} from 'components/_icons';

import Image from 'next/image';
import styles from './style.module.scss';

export interface Props {}

const Login: FC<Props> = (): JSX.Element => {
  return (
    <>
      <div className="login-container">
        <div className="forms-container">
          <div className="signin-signup">
            <form action="" className="signin-form">
              <h2 className="title">sign in</h2>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
