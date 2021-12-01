import * as icons from 'components/_icons';

interface Props {
  title: string;
  icon: JSX.Element;
  route: string;
  hasChild: boolean;
  children?: string[];
}

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
    route: '/dashboard/request/new',
    hasChild: true,
    children: ['new']
  },
  {
    title: 'Subscribe',
    icon: icons.SubscriptionIcon({}),
    route: '/dashboard/subscribe',
    hasChild: false
  },
  {
    title: 'Credit',
    icon: icons.CreditIcon({}),
    route: '/dashboard/credit',
    hasChild: false
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
  }
];

export default sideNavElements;
