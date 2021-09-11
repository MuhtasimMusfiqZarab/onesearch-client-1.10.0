import { IconBox } from "../icon-box";
import { ScrollDown } from "../scroll-down";
import styles from "./styles.module.scss";

export default function Services() {
  return (
    <div className={styles.services_wrap}>
      <div className={styles.services_wrap__inner}>
        <h2 className="text-center">Dive right into our services</h2>
        <div className={styles.services_items}>
          <IconBox media="" title="Search Data" isDark={true} />
          <IconBox media="" title="Request Data" isDark={true} />
          <IconBox media="" title="Donwload Data" isDark={true} />
        </div>
        <ScrollDown scrollId="features" isDark={true} />
      </div>
    </div>
  );
}