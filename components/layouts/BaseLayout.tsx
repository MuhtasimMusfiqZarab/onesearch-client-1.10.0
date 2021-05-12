import React from 'react';
import TopNav from '../shared/topnav';
import SideNav from '../shared/sidenav';

const BaseLayout = (props) => {
  return (
    <React.Fragment>
      <TopNav />
      <SideNav />
      {props.children}
    </React.Fragment>
  );
};

export default BaseLayout;
