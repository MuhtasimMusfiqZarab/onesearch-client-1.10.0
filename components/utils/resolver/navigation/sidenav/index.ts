import * as icons from "components/_icons";

interface Props {
  title: string;
  icon: JSX.Element;
  route: string;
  hasChild: boolean;
  children?: string[];
}

const sideNavElements: Props[] = [
  {
    title: "Search",
    icon: icons.BinocularIcon({}),
    route: "/dashboard/search/youtube",
    hasChild: true,
    children: ["youtube", "facebook", "linkedin", "google"],
  },
  {
    title: "Request",
    icon: icons.RequestIcon({}),
    route: "/dashboard/request",
    hasChild: true,
  },
  {
    title: "Subscribe",
    icon: icons.SubscriptionIcon({}),
    route: "/dashboard/subscribe",
    hasChild: true,
  },
  // {
  //   title: "Credit",
  //   icon: icons.CreditIcon({}),
  //   route: "/dashboard/credit",
  //   hasChild: true,
  // },
  // {
  //   title: "Download",
  //   icon: icons.DownloadsIcon({}),
  //   route: "/dashboard/download",
  //   hasChild: true,
  // },
  {
    title: "Settings",
    icon: icons.SettingsIcon({}),
    route: "/dashboard/settings",
    hasChild: true,
  },
];

export default sideNavElements;
