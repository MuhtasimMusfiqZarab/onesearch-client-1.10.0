import React from "react";
import TopNav from "../shared/topnav/version2";
import SideNav from "../shared/sidenav/version2";
import styles from "./styles.module.scss";

const BaseLayout = (props) => {
  return (
    <React.Fragment>
      <TopNav />
      <SideNav />
      <div className={styles.container}>
        <div className={styles.container__element}>{props.children}</div>
      </div>
    </React.Fragment>
  );
};

export default BaseLayout;
