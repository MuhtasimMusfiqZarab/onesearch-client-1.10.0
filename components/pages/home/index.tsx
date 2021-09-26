import TopNav from "../../shared/topnav/version2";
import Intro from "./intro";
import Services from "./services";
import Pricing from "./pricing";
import Reviews from "./reviews";
import Footer from "components/shared/footer";
import styles from "./styles.module.scss";

export default function Home() {
  return (
    <div>
      <TopNav />
      <Intro />
      <Services />
      <Reviews />
      <Pricing />
      <Footer />
    </div>
  );
}