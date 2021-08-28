import * as icons from "components/_icons";

interface navElement {
  title: string;
  route?: string;
}

const dimensions = {
  width: "25px",
  height: "25px",
  color: "000000",
};

const topNavElements: navElement[] = [
  {
    title: "Home",
    route: "/",
  },

  {
    title: "Dashboard",
    route: "/dashboard/search",
  },

  {
    title: "Login",
    route: "/login",
  },
];

export default topNavElements;
