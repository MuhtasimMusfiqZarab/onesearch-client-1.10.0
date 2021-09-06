import React, { useState } from "react";

import { Tab } from "components/general";
import styles from "./styles.module.scss";

export default function Index() {
  return (
    <>
      <div className={styles.container__element_inner}>
        <Tab />
        <div className={styles.filterContainer}>
          <div className={styles.container}>
            <div className={styles.container__table}>Under Construction</div>
          </div>
        </div>
      </div>
    </>
  );
}
