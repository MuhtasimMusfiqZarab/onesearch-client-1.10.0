import * as icons from "components/_icons";

interface navElement {
  title: string;
  icon?: JSX.Element;
  route?: string;
  subNavItems?: object[];
}

const dimensions = {
  width: "25px",
  height: "25px",
  color: "8F8F8F",
};

const sideNavElements: navElement[] = [
  {
    title: "Home",
    icon: icons.BinocularIcon({}),
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

export default sideNavElements;
