import React from 'react';
import Header from '../../shared/header';
import SideNav from '../../shared/sidenav';
import styles from './styles.module.scss';

import { CurrentUserProvider } from 'components/_context/user/current-user';

const DashboardLayout = (props) => {
  return (
    <React.Fragment>
      <CurrentUserProvider>
        <Header />
        <SideNav />
        <div className={styles.container}>
          <div className={styles.container__element}>{props.children}</div>
        </div>
      </CurrentUserProvider>
    </React.Fragment>
  );
};

export default DashboardLayout;
