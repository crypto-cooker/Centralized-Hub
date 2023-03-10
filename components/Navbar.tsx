import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

import { useMainContext } from "contexts";
import langSrc from "../assets/lang.svg";
import menuSvg from "../assets/menu.svg";
import closeSvg from "../assets/close.svg";
import Button from "./Button";

const Navbar = ({ path }: { path: string }): JSX.Element => {
  const router = useRouter();
  const { authToken, logout } = useMainContext();

  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

  const handleSignInClicked = () => {
    if (!authToken) {
      console.log("herer>>>>", authToken);
      router.push("/signin");
      logout();
    } else {
      console.log("therere>>>>", authToken);
      router.push("/");
      logout();
    }
  
  };

  const handleToggleMenuClicked = () => {
    setIsMenuOpened((opened) => !opened);
  };

  return (
    <>
      <div
        className={`w-full lg:flex text-white uppercase justify-end items-center space-x-10 text-xl tracking-widest hidden ${
          path === "/" ? "lg:hidden" : ""
        }`}
      >
        <div className="cursor-pointer select-none">Utility</div>
        <div className="cursor-pointer select-none">Games</div>
        <div className="cursor-pointer select-none">Marketplace</div>
        <div className="cursor-pointer select-none">$GRIND</div>
      </div>
      <div
        className={`lg:hidden ${path === "/" ? "hidden" : ""}`}
        onClick={handleToggleMenuClicked}
      >
        <Image src={menuSvg} />
      </div>
      {isMenuOpened && (
        <div className="lg:hidden fixed bg-gray-100 w-screen h-screen top-0 left-0 z-20">
          <div className="w-full flex flex-col text-black uppercase justify-center items-center space-y-10 text-xl tracking-widest mt-20 relative">
            <div className="absolute right-4 -top-14">
              <Image src={closeSvg} onClick={handleToggleMenuClicked} />
            </div>
            <div>Utility</div>
            <div>Games</div>
            <div>Marketplace</div>
            <div>$GRIND</div>
          </div>
        </div>
      )}
      <div className="ml-4 lg:ml-10 flex space-x-2 sm:space-x-7 select-none">
        <Image className="cursor-pointer" src={langSrc} />
        <Button
          label={authToken ? "Sign Out" : "Sign In"}
          className="text-black bg-green-300 font-bold"
          onClick={handleSignInClicked}
        />
      </div>
    </>
  );
};

export default Navbar;
