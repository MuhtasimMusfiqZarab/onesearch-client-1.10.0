import Link from "next/link";
import { WebIcon } from "../../../_icons";
import { Text } from "../text";
import styles from "./styles.module.scss";

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
            <WebIcon height={468} width={467} />
          </div>
          <div className={styles.wave}>
            <img src="/wave.svg" alt="" className={styles.mainWave} />
          </div>
        </div>
      </div>
    </div>
  );
}
