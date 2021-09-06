import { useState } from "react";
import { useRouter } from "next/router";

export const IsCurrentRoute = (element: any) => {
  const router = useRouter();
  const [currentRoute, setCurrentRoute] = useState<string>(router.pathname);

  //nav items without children
  if (!element.hasChild && element.route) {
    if (element.route == router.pathname) {
      return element.route;
    }
  }
  //nav items with children
  if (element.hasChild && element.route) {
    return element?.children?.some((itemName: string) =>
      currentRoute.includes(itemName)
    );
  }
};
