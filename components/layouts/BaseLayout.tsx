import React from 'react';
import TopNav from '../shared/topnav';

const BaseLayout = (props) => {
  return (
    <React.Fragment>
      <TopNav />
      {props.children}
    </React.Fragment>
  );
};

export default BaseLayout;
