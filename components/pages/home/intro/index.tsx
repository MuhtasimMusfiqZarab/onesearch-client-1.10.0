import { WebIcon } from '../../../_icons';
import { Text } from '../text';
import styles from './styles.module.scss';

export default function Index() {
  return (
    <div className={styles.body}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.text}>
            <Text
              title="Growing your business <br>just got easier."
              // subtitle="Find business emails"
              content="85% of B2B marketers say lead generation is their most <br/>important content marketing goal."
              isButton={true}
              buttonText="Get Started"
              buttonClasses="btn btn_fill_primary"
            />
          </div>
          <div className={styles.webIcon}>
            <WebIcon />
          </div>
          <div className={styles.wave}>
            <img src="wave.svg" alt="" className={styles.mainWave} />
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1366"
              height="162.706"
              viewBox="0 0 1366 162.706">
              <path
                id="waves"
                d="M365.849,67.154C431.872,80.641,495.8,94.814,561.642,109.475c93.787,20.9,191.456,22.161,285.1.487,91-21.011,185.355-62.257,275.272-88.292C1201.75-1.428,1276.141-23.49,1366-23.49V137.7H0V-23c130.443-15.74,243.163,65.374,365.849,90.152Z"
                transform="translate(0 25.008)"
                fill="#49789b"
              />
            </svg> */}
            {/* <svg
              width="1440"
              height="248"
              viewBox="0 0 1440 248"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1440 247.557H-1V11.534C208.5 -31.466 440 138.057 562 188.557C684 239.057 923.5 229.558 1091.5 106.558C1225.9 8.15762 1391.5 -4.29945 1440 1.03389V247.557Z"
                fill="#49789B"
              />
            </svg> */}
          </div>
        </div>
      </div>
    </div>
  );
}
