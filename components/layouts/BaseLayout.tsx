import React from 'react';
import TopNav from '../shared/topnav';
import SideNav from '../shared/sidenav';

import styles from './styles.module.scss';

const BaseLayout = (props) => {
  return (
    <React.Fragment>
      <SideNav />

      <TopNav />
      <div className={styles.main}>{props.children}</div>
    </React.Fragment>
  );
};

export default BaseLayout;
