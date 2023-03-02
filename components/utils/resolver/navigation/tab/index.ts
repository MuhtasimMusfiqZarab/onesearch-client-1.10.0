import * as icons from 'components/_icons';

interface navElement {
  title: string;
  icon: JSX.Element;
  route: string;
}

const iconProps = {
  width: '25px',
  height: '25px',
  color: '8F8F8F'
};

export const searchNavElements: navElement[] = [
  {
    title: 'Youtube',
    icon: icons.YoutubeIcon({}),
    route: '/dashboard/search/youtube'
  },
  // {
  //   title: 'Facebook',
  //   icon: icons.FacebookIcon({}),
  //   route: '/dashboard/search/facebook'
  // },
  {
    title: 'Linkedin',
    icon: icons.LinkedinIcon({}),
    route: '/dashboard/search/linkedin'
  },

  {
    title: 'Google',
    icon: icons.GoogleIcon({}),
    route: '/dashboard/search/google'
  }
];

export const settingsNavElements: navElement[] = [
  {
    title: 'Profile',
    icon: icons.YoutubeIcon({}),
    route: '/dashboard/settings/profile'
  }
];

export const requestNavElements: navElement[] = [
  {
    title: 'Create',
    icon: icons.YoutubeIcon({}),
    route: '/dashboard/request/create'
  },
  {
    title: 'All',
    icon: icons.YoutubeIcon({}),
    route: '/dashboard/request/all'
  }
];

export const creditNavElements: navElement[] = [
  {
    title: 'Add',
    icon: icons.YoutubeIcon({}),
    route: '/dashboard/credit/add'
  }
];

export const adminNavElements: navElement[] = [
  {
    title: 'Users',
    icon: icons.YoutubeIcon({}),
    route: '/dashboard/admin/users'
  },
  {
    title: 'Requests',
    icon: icons.YoutubeIcon({}),
    route: '/dashboard/admin/requests'
  },
  {
    title: 'Youtube',
    icon: icons.YoutubeIcon({}),
    route: '/dashboard/admin/you_tube'
  },
  {
    title: 'Linkedin',
    icon: icons.YoutubeIcon({}),
    route: '/dashboard/admin/linked_in'
  },
  {
    title: 'Google',
    icon: icons.YoutubeIcon({}),
    route: '/dashboard/admin/goo_gle'
  }
];
