import React from 'react';
// import TopNav from '../shared/topnav';
import TopNav from '../top-nav';
import SideNav from '../shared/sidenav';

import styles from './styles.module.scss';

const BaseLayout = (props) => {
  return (
    <React.Fragment>
      <TopNav />

      <div className={styles.container}>
        <SideNav />
        <div className={styles.container__element}>{props.children}</div>
      </div>
    </React.Fragment>
  );
};

export default BaseLayout;
