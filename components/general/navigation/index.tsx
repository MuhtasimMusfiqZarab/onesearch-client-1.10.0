import React, { useState, useEffect } from 'react';
import { Dropbox } from 'components/general/dropbox';
import Link from 'next/link';

import { useCurrentUser } from 'components/_context/user/current-user';

const menus = [
  { name: 'Home', href: '/' },
  { name: 'Dashboard', href: '/dashboard/search/youtube' }
];

const basicMenu = [{ name: 'Home', href: '/' }];

const Navigation = ({ humberger }) => {
  let [active, setActive] = useState('Home');

  const { currentUser, loading } = useCurrentUser();

  const handleActive = (e) => {
    setActive(e.target.innerText);
  };

  return (
    <nav className={`primary__navigation ${humberger ? 'nav-open' : ''}`}>
      <ul>
        {currentUser
          ? menus.map((menu) => (
              <li key={menu.name} className={active === menu.name ? 'active' : ''}>
                <Link href={menu.href}>
                  <a onClick={handleActive}>{menu.name}</a>
                </Link>
              </li>
            ))
          : basicMenu.map((menu) => (
              <li key={menu.name} className={active === menu.name ? 'active' : ''}>
                <Link href={menu.href}>
                  <a onClick={handleActive}>{menu.name}</a>
                </Link>
              </li>
            ))}

        {!currentUser && !loading && (
          <li>
            <Link href={'/login'}>
              <a className="btn btn_fill_primary">Login</a>
            </Link>
          </li>
        )}

        {(currentUser || loading) && (
          <li>
            <Dropbox currentUser={currentUser} />
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
