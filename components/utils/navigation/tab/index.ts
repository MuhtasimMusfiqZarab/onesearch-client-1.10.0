import * as icons from "components/_icons";

interface navElement {
  title: string;
  icon: JSX.Element;
  route: string;
  index: number;
}

const iconProps = {
  width: "25px",
  height: "25px",
  color: "8F8F8F",
};

const filterNavElements: navElement[] = [
  {
    title: "Youtube",
    icon: icons.YoutubeIcon({}),
    route: "/dashboard/search/youtube",
    index: 1,
  },
  {
    title: "Facebook",
    icon: icons.FacebookIcon({}),
    route: "/dashboard/search/facebook",
    index: 2,
  },
  {
    title: "Linkedin",
    icon: icons.LinkedinIcon({}),
    route: "/dashboard/search/linkedin",
    index: 3,
  },

  {
    title: "Google",
    icon: icons.GoogleIcon({}),
    route: "/dashboard/search/google",
    index: 4,
  },
];

export default filterNavElements;
