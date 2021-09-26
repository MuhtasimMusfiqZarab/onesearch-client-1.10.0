import Image from "next/image";
import { Text } from "../text";
import { Heading } from "../heading";
import { Tabs } from "../tabs";
import FeatureImage from "../../../../public/search-for-your-lead.png";
import styles from "./styles.module.scss";

export default function Services() {
  return (
    <div className={styles.services_wrap}>
      <div className={styles.services_wrap__inner}>
        <Heading title="Our Services" isUnderline={true} />

        <Tabs items={[]} defaultActive="jj" />

        <div className={styles.services_items}>
          <Text
            title="Search for your lead"
            content="Our simple and easy-to-use dashboard lets you search for leads with filters for fast searching."
            isButton={true}
            buttonText="Go to Dashboard"
          />

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
      </div>
    </div>
  );
}
