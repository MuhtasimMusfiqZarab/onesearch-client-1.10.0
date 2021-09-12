import { IconBox } from "../icon-box";
import { ScrollDown } from "../scroll-down";
import { BinocularIcon, RequestIcon, DownloadsIcon } from "components/_icons";
import styles from "./styles.module.scss";

export default function Services() {
  return (
    <div className={styles.services_wrap}>
      <div className={styles.services_wrap__inner}>
        <h2 className="text-center">Dive right into our services</h2>
        <div className={styles.services_items}>
          <IconBox Media={BinocularIcon} title="Search Data" isDark={true} />
          <IconBox Media={RequestIcon} title="Request Data" isDark={true} />
          <IconBox Media={DownloadsIcon} title="Donwload Data" isDark={true} />
        </div>
        <ScrollDown scrollId="features" isDark={true} />
      </div>
    </div>
  );
}
