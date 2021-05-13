import React from 'react';
import TopNav from '../shared/topnav';
import SideNav from '../shared/sidenav';

import styles from './styles.module.scss';

const BaseLayout = (props) => {
  return (
    <React.Fragment>
      <TopNav />

      <div className={styles.container}>
        <SideNav />
        <div className={styles.main}>{props.children}</div>
      </div>
    </React.Fragment>
  );
};

export default BaseLayout;
