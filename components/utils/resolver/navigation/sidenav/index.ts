import * as icons from 'components/_icons';

interface Props {
  title: string;
  icon: JSX.Element;
  route: string;
  hasChild: boolean;
  children?: string[];
}

export const adminNavElement: Props[] = [
  {
    title: 'Admin',
    icon: icons.AdminIcon({}),
    route: '/dashboard/admin',
    hasChild: true,
    children: ['users']
  }
];

const sideNavElements: Props[] = [
  {
    title: 'Search',
    icon: icons.BinocularIcon({}),
    route: '/dashboard/search/youtube',
    hasChild: true,
    children: ['youtube', 'facebook', 'linkedin', 'google']
  },
  {
    title: 'Request',
    icon: icons.RequestIcon({}),
    route: '/dashboard/request/create',
    hasChild: true,
    children: ['create', 'all']
  },
  // {
  //   title: 'Subscribe',
  //   icon: icons.SubscriptionIcon({}),
  //   route: '/dashboard/subscribe',
  //   hasChild: false
  // },
  {
    title: 'Credit',
    icon: icons.CreditIcon({}),
    route: '/dashboard/credit/add',
    hasChild: true,
    children: ['add']
  },
  {
    title: 'Download',
    icon: icons.DownloadsIcon({}),
    route: '/dashboard/download',
    hasChild: false
  },
  {
    title: 'Settings',
    icon: icons.SettingsIcon({}),
    route: '/dashboard/settings/profile',
    hasChild: true,
    children: ['profile']
  },
  {
    title: 'Admin',
    icon: icons.AdminIcon({}),
    route: '/dashboard/admin/users',
    hasChild: true,
    children: ['users', 'requests', 'you_tube', 'linked_in', 'goo_gle']
  }
];

export default sideNavElements;
