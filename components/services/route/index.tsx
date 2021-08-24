import { useState } from "react";
import { useRouter } from "next/router";

export const isCurrentRoute = (element: any) => {
  const router = useRouter();
  const [currentRoute, setCurrentRoute] = useState<string>(router.pathname);

  if (element.route) {
    return router.pathname.startsWith(element.route);
  }
};
