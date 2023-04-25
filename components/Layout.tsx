import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Footer from "./Footer";
import Header from "./Header";
import { useMainContext } from "../contexts/index";
import Welcome from "pages/welcome";

interface ILayoutProps {
  children: any;
}

export default function Layout({ children }: ILayoutProps): JSX.Element {
  const { authToken, logout } = useMainContext();
  const router = useRouter();
  const currentPath = router.pathname;

  useEffect(() => {
    if (authToken) {
      router.push("/welcome");
    }
  }, [authToken]);

  return (
    <div
      className={`relative bg-[url('/img/signin_bg.jpg')] bg-cover bg-no-repeat ${
        currentPath === "/leaderboard"
          ? "h-auto"
          : currentPath === "/pre-event"
          ? "h-auto"
          : currentPath === "/"
          ? "h-auto"
          : currentPath === "/welcome"
          ? "h-auto"
          : currentPath === "/pre-registeration"
          ? "h-auto"
          : "h-screen"
      }`}
    >
      <Header path={currentPath} />
      {children}
      <Footer path={currentPath} />
    </div>
  );
}

// export default Layout;
