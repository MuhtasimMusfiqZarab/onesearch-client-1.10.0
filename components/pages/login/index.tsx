import React, { FC, useState } from 'react';
import Link from 'next/link';
import styles from './style.module.scss';
import { GoogleIcon, Logo } from 'components/_icons';

import Payment from 'components/widgets/payment';

export interface Props {}

const Login: FC<Props> = (): JSX.Element => {
  let [switchBtn, setSwitchBtn] = useState(false);
  let [agree, setAgree] = useState(false);

  const handleLoginBtn = () => {
    setSwitchBtn((switchBtn = false));
  };

  const handleRegBtn = () => {
    setSwitchBtn((switchBtn = true));
  };

  const handleAgree = (e) => {
    setAgree(!agree);
  };

  const processPayment = () => {
    fetch(`/payment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        items: [
          {
            id: 1,
            quantity: 1
          }
        ]
      })
    })
      .then((res) => {
        if (res.ok) return res.json();
        return res.json().then((json) => Promise.reject(json));
      })
      .then(({ url }) => {
        window.location = url;
        console.log(url);
      })
      .catch((e) => console.error(e.error));
  };

  return (
    <>
      <div className={styles.login}>
        <div className={styles.login__intro}>
          <Logo width="336" height="60" />
          <p className={styles.joinUsText}>Join us and grow your business like never before!</p>
        </div>
        <div className={styles.login__welcome}>
          <Link href="/">
            <a className={styles.go_to_home}>Go to Home</a>
          </Link>
          <h1>
            Hello, <span>Welcome!</span>
          </h1>

          {/* <div className={styles.switch_button}>
            <span className={styles.active} style={{ left: switchBtn ? '50%' : '0' }}></span>
            <button
              className={`${styles.switch_button_case} ${
                switchBtn === false ? styles.active_case : ''
              }`}
              onClick={handleLoginBtn}>
              Login
            </button>
            <button
              className={`${styles.switch_button_case} ${switchBtn ? styles.active_case : ''}`}
              onClick={handleRegBtn}>
              Register
            </button>
          </div> */}

          <div className={styles.terms_conditions}>
            <form action="">
              {
                <label htmlFor="agree">
                  <input type="checkbox" id="agree" onChange={handleAgree} checked={agree} />
                  <span>
                    I have read and agree to the{' '}
                    <Link href="/">
                      <a>
                        Terms of <br />
                        Service
                      </a>
                    </Link>{' '}
                    and{' '}
                    <Link href="/">
                      <a>Privacy Policy</a>
                    </Link>{' '}
                    of this website.
                  </span>
                </label>
              }
            </form>
          </div>

          <button className={styles.login_with_google} disabled={!agree}>
            <Link href="/google ">
              <a className={styles.google_button_link}>
                <GoogleIcon /> <p className={styles.text}>Continue with Google</p>
              </a>
            </Link>
          </button>

          <button className={styles.login_with_google} onClick={processPayment}>
            Support 1$
          </button>
        </div>

        {/* <Payment /> */}
      </div>
    </>
  );
};

export default Login;
