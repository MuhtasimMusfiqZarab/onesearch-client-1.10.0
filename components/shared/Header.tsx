import React, { Component } from 'react';
import Link from 'next/link';

class Header extends Component {
  state = {};
  render() {
    return (
      <ul style={{ display: 'flex', listStyle: 'none' }} className="navs">
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/dashboard">
            <a>Dashboard</a>
          </Link>
        </li>
        <style jsx>
          {`
            li {
              flex-direction: row;
              margin: auto;
            }
          `}
        </style>
      </ul>
    );
  }
}

export default Header;
