import { Heading } from "../heading";
import Review from "components/general/review";
import styles from "./styles.module.scss";

export default function Reviews() {
  return (
    <div className={styles.review_wrap}>
      <div className={styles.review_wrap__inner}>
        <Heading title="Our Customers" isUnderline={true} />

        <div className={styles.reviews}>
          <Review />
          <Review />
          <Review />
        </div>
      </div>
    </div>
  );
}
