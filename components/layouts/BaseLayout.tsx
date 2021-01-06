import React from 'react';
import Header from '../shared/Header';
import Footer from '../shared/Footer';
import SideBar from '../shared/SideBar';

const BaseLayout = (props) => {
  return (
    <React.Fragment>
      <Header />
      {props.children}
    </React.Fragment>
  );
};

export default BaseLayout;
