import React from 'react';
import Header from '../../shared/header';
import SideNav from '../../shared/sidenav';
import styles from './styles.module.scss';

const DashboardLayout = (props) => {
  return (
    <React.Fragment>
      <Header />
      <SideNav />
      <div className={styles.container}>
        <div className={styles.container__element}>{props.children}</div>
      </div>
    </React.Fragment>
  );
};

export default DashboardLayout;
