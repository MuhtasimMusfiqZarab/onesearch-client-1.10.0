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
  {
    title: 'Facebook',
    icon: icons.FacebookIcon({}),
    route: '/dashboard/search/facebook'
  },
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
    title: 'Youtube',
    icon: icons.YoutubeIcon({}),
    route: '/dashboard/request/youtube'
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
    title: 'Youtube',
    icon: icons.YoutubeIcon({}),
    route: '/dashboard/admin/youtube_upload'
  },
  {
    title: 'Linkedin',
    icon: icons.YoutubeIcon({}),
    route: '/dashboard/admin/linkedin_upload'
  },
  {
    title: 'Google',
    icon: icons.YoutubeIcon({}),
    route: '/dashboard/admin/google_upload'
  }
];
