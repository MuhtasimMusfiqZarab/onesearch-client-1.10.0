import React, { Component } from 'react';
import Link from 'next/link';

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <h5 className="my-0 mr-md-auto font-weight-normal">
          <Link href="/">
            <a>OneSearch</a>
          </Link>
        </h5>
        <nav className="my-2 my-md-0 mr-md-3p-2 text-dark">
          <Link href="/dashboard">
            <a className="p-2 text-dark">Dashboard</a>
          </Link>
          <a className="p-2 text-dark" href="#">
            Features
          </a>
          <a className="p-2 text-dark" href="#">
            Enterprise
          </a>
          <a className="p-2 text-dark" href="#">
            Support
          </a>
          <a className="p-2 text-dark" href="#">
            Pricing
          </a>
        </nav>
        <a className="btn btn-outline-primary" href="#">
          Sign up
        </a>
      </div>
    );
  }
}

export default Header;
