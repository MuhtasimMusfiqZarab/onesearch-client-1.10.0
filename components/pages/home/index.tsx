import TopNav from "../../shared/topnav/version2";
import styles from "./styles.module.scss";
import Intro from "./intro";
import Services from "./services";
import Pricing from "./pricing";
import Features from "./features";

export default function Home() {
  return (
    <div>
      <TopNav />
      <Intro />
      <Services />
      <Features />
      <Pricing />
    </div>
  );
}