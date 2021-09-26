import { Heading } from "../heading";
import styles from "./styles.module.scss";

export default function Pricing() {
  return (
    <div className={styles.pricing_wrap}>
      <div className={styles.pricing_wrap__inner}>
        <Heading title="Pricing" isUnderline={true} />

        {/* all the cards wrapper  */}
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <h2 className={styles.title}>Individual</h2>
            <ul>
              <li>1 Month Subscription</li>
              <li>Unlimited Searching Data</li>
              <li>Monthly 3 Free Requests</li>
              <li>200 Credits</li>
              <li>Support 24/7</li>
            </ul>
          </div>

          <div className={styles.container}>
            <h2 className={styles.title}>Business</h2>
            <ul>
              <li>6 Month Subscription</li>
              <li>Unlimited Searching Data</li>
              <li>Monthly 10 Free Requests</li>
              <li>500 Credits</li>
              <li>Support 24/7</li>
            </ul>
          </div>

          <div className={styles.container}>
            <h2 className={styles.title}>Pro</h2>
            <ul>
              <li>12 Month Subscription</li>
              <li>Unlimited Searching Data</li>
              <li>Monthly 15 Free Requests</li>
              <li>1000 Credits</li>
              <li>Support 24/7</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
