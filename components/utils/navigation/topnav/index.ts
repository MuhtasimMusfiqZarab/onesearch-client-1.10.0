import * as icons from "components/_icons";

interface Props {
  title: string;
  route?: string;
  hasChild: boolean;
}

const topNavElements: Props[] = [
  {
    title: "Home",
    route: "/",
    hasChild: false,
  },

  {
    title: "Dashboard",
    route: "/dashboard/search",
    hasChild: true,
  },

  {
    title: "Login",
    route: "/login",
    hasChild: false,
  },
];

export default topNavElements;
