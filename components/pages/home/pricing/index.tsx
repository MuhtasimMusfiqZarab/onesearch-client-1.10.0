import styles from "./styles.module.scss";

export default function Pricing() {
  return (
    <div className={styles.main}>
      <h1>Get Started</h1>
      {/* all the cards wrapper  */}
      <div className={styles.wrapper}>
        {/* providing sigle cards  */}
        <div className={styles.container}>
          <h2 className={styles.title}>Pick a template</h2>
          <p className={styles.description}>
            {" "}
            sdf ad asdfaef asdfawe f afefasdfae afsdfawefacev aewfawe
          </p>
        </div>
        <div className={styles.container}>
          <h2 className={styles.title}>Pick a template</h2>
          <p className={styles.description}>
            {" "}
            sdf ad asdfaef asdfawe f afefasdfae afsdfawefacev aewfawe
          </p>
        </div>
        <div className={styles.container}>
          <h2 className={styles.title}>Pick a template</h2>
          <p className={styles.description}>
            {" "}
            sdf ad asdfaef asdfawe f afefasdfae afsdfawefacev aewfawe
          </p>
        </div>
      </div>
    </div>
  );
}