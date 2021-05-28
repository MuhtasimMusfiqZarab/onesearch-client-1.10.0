import React, { FC, useState } from 'react';

import {
  YoutubeIcon,
  FacebookIcon,
  GoogleMapIcon,
  SettingsIcon,
  ExpandIcon,
} from '../../_icons';

const Sidenav: FC<any> = ({ items }): JSX.Element => {
  const [currentTab, setCurrentTab] = useState<string>('');

  const [expanded, setExpanded] = useState<boolean>(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <nav className={expanded ? 'nav' : 'nav nav-closed'}>
      <div onClick={handleClick}>
        <ExpandIcon />
      </div>

      <ul className="nav__list">
        <li className="nav__listitem">{/* {can put any icon here} */}</li>
        <li className="nav__listitem nav__listitem-active">
          <a href="#">
            <YoutubeIcon />
            <div>Youtube</div>
          </a>
        </li>
        <li className="nav__listitem">
          <a href="#">
            <FacebookIcon />
            <div>Facebook</div>
          </a>
        </li>
        <li className="nav__listitem">
          <a href="#">
            <GoogleMapIcon />
            <div>Google</div>
          </a>
        </li>
        <li className="nav__listitem">
          <a href="#">
            <SettingsIcon />
            <div>Settings</div>
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Sidenav;
