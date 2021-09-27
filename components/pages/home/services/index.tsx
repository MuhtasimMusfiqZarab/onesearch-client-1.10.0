import Image from "next/image";

import SlickSlider from "components/general/slick";
import { Text } from "../text";
import { Heading } from "../heading";
import { Tabs } from "../tabs";
import FeatureImage from "../../../../public/search-for-your-lead.png";
import styles from "./styles.module.scss";

export default function Services() {
  const slickSettings = {
    // dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className={styles.services_wrap}>
      <div className={styles.services_wrap__inner}>
        <Heading title="Our Services" isUnderline={true} />

        <Tabs items={[]} defaultActive="jj" />

        <SlickSlider settings={slickSettings}>
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
        </SlickSlider>
      </div>
    </div>
  );
}
