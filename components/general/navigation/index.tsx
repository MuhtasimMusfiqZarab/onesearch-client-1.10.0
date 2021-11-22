import React, { useState, useEffect } from 'react';
import { Dropbox } from 'components/general/dropbox';
import { IsCurrentRoute } from 'components/services/route';
import topNavElements, { topNavElementsBasic } from 'components/utils/resolver/navigation/topnav';
import Link from 'next/link';

import { useCurrentUser } from 'components/_context/user/current-user';

const Navigation = ({ humberger }) => {
  let [active, setActive] = useState(null);

  const { currentUser, loading } = useCurrentUser();

  const handleActive = (e) => {
    setActive(e.target.innerText);
  };

  return (
    <nav className={`primary__navigation ${humberger ? 'nav-open' : ''}`}>
      <ul>
        {topNavElements.map((menu) => (
          <li key={menu.title} className={IsCurrentRoute(menu) && 'active'}>
            <Link href={menu.route}>
              <a onClick={handleActive}>{menu.title}</a>
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
