import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Footer from "./Footer";
import Header from "./Header";

interface ILayoutProps {
  children: any;
}

export default function Layout({ children }: ILayoutProps): JSX.Element {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <div className="relative h-screen bg-[url('/img/signin_bg.jpg')] bg-cover">
      <Header path={currentPath} />
      {children}
      <Footer />
    </div>
  );
}

// export default Layout;
