interface navElement {
  title: string;
  icon?: JSX.Element;
  route?: string;
  subNavItems?: object[];
}

const topNavElements: navElement[] = [
  {
    title: "Home",
    route: "/",
  },

  {
    title: "Dashboard",
    route: "/dashboard",
  },

  {
    title: "Login",
    route: "/login",
  },

  {
    title: "Profile",
    route: "/profile",
  },
];

export default topNavElements;
