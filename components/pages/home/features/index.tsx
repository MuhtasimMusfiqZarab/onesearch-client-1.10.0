import { Text } from "../text";
import Image from "next/image";
import FeatureImage from "../../../../public/search-for-your-lead.png";
import styles from "./styles.module.scss";

export default function Features() {
  return (
    <div className={styles.features_wrap}>
      <div className={styles.features_wrap__text}>
        <Text
          title="Search for your lead"
          content="Our simple and easy-to-use dashboard lets you <br/>search for the contact information with filters <br/> for fast searching."
          isButton={true}
          buttonText="Go to Dashboard"
          buttonUrl="/dashboard/search/youtube"
        />
      </div>

      <div
        id="features"
        className={`${styles.features_wrap__thumbnail} text-right`}
      >
        <Image
          src={FeatureImage}
          alt="Search for your lead"
          width="441"
          height="312"
        />
      </div>
    </div>
  );
}
