import * as icons from "components/_icons";

interface navElement {
  title: string;
  icon: JSX.Element;
  route: string;
}

const iconProps = {
  width: "25px",
  height: "25px",
  color: "8F8F8F",
};

const sideNavElements: navElement[] = [
  {
    title: "Search",
    icon: icons.BinocularIcon({}),
    route: "/dashboard/search",
  },
  {
    title: "Request",
    icon: icons.RequestIcon({}),
    route: "/dashboard/request",
  },
  {
    title: "Subscribe",
    icon: icons.SubscriptionIcon({}),
    route: "/dashboard/subscribe",
  },
  {
    title: "Credit",
    icon: icons.CreditIcon({}),
    route: "/dashboard/credit",
  },
  {
    title: "Download",
    icon: icons.DownloadsIcon({}),
    route: "/dashboard/download",
  },
  {
    title: "Settings",
    icon: icons.SettingsIcon({}),
    route: "/dashboard/settings",
  },
];

export default sideNavElements;
