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
    <div className="relative h-screen bg-[url('/img/signin_bg.jpg')] bg-cover">
      <Header path={currentPath} />
      {children}
      <Footer />
    </div>
  );
}

// export default Layout;
