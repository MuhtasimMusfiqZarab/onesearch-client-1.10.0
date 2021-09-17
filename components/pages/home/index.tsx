import TopNav from "../../shared/topnav/version2";
import styles from "./styles.module.scss";
import Intro from "./intro";
import Services from "./services";
import Pricing from "./pricing";
import Features from "./features";
import Review from "./review";
import Footer from "components/shared/footer";

export default function Home() {
  return (
    <div>
      <TopNav />
      <Intro />
      <Services />
      <Features />
      <Pricing />
      <div className={styles.review__wrap}>
        <div className={styles.review__wrap_inner}>
          <Review />
          <Review />
          <Review />
        </div>
      </div>
      <Footer />
    </div>
  );
}