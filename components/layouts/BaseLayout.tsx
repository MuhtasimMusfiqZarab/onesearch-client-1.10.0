import React from 'react';
import Header from '../shared/Header';
import Footer from '../shared/Footer';

const BaseLayout = (props) => {
  return (
    <React.Fragment>
      {/* <Header /> */}
      {props.children}
    </React.Fragment>
  );
};

export default BaseLayout;
