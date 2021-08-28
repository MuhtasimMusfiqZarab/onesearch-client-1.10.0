import { useState } from "react";
import { useRouter } from "next/router";

export const IsCurrentRoute = (element: any) => {
  const router = useRouter();
  const [currentRoute, setCurrentRoute] = useState<string>(router.pathname);

  if (element.route) {
    //check for home
    if (element.route == router.pathname) {
      return element.route;
    }
  }
};
