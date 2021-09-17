import styles from "./styles.module.scss";

export default function Pricing() {
  return (
    <div className={styles.main}>
      <h1>Get Started</h1>
      {/* all the cards wrapper  */}
      <div className={styles.wrapper}>
        {/* providing sigle cards  */}
        <div className={styles.container}>
          <h2 className={styles.title}>Individual</h2>
          {/* <p> */}
          <ul>
            <li>1 Month Subscription</li>
            <li>Unlimited Searching Data</li>
            <li>Monthly 3 Free Requests</li>
            <li>200 Credits</li>
            <li>Support 24/7</li>
          </ul>
          {/* </p> */}
        </div>
        <div className={styles.container}>
          <h2 className={styles.title}>Business</h2>
          {/* <p> */}
          <ul>
            <li>6 Month Subscription</li>
            <li>Unlimited Searching Data</li>
            <li>Monthly 10 Free Requests</li>
            <li>500 Credits</li>
            <li>Support 24/7</li>
          </ul>
          {/* </p> */}
        </div>
        <div className={styles.container}>
          <h2 className={styles.title}>Pro</h2>
          {/* <p> */}
          <ul>
            <li>12 Month Subscription</li>
            <li>Unlimited Searching Data</li>
            <li>Monthly 15 Free Requests</li>
            <li>1000 Credits</li>
            <li>Support 24/7</li>
          </ul>
          {/* </p> */}
        </div>
      </div>
    </div>
  );
}
