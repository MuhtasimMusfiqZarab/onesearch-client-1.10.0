import Image from "next/image";
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
              title="Get your lead now."
              // subtitle="Find business emails"
              content="85% of B2B marketers say lead generation is their most <br/>important content marketing goal."
              isButton={true}
              buttonText="Get Started"
            />
          </div>
          <div className={styles.img}>
            <div className={styles.socialIcons}>
              <WebIcon />
            </div>
          </div>
        </div>
        <div className={styles.wave}>
          <img src="/wave.svg" alt="" className={styles.mainWave} />
          {/* <Image
            src="/wave.svg"
            alt="Picture of the author"
            height="100%"
            width="100%"
            className={styles.mainWave}
          /> */}
        </div>
      </div>
    </div>
  );
}
