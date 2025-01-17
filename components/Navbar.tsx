import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import { useMainContext } from "contexts";
import langSrc from "../assets/lang.svg";
import menuSvg from "../assets/menu.svg";
import closeSvg from "../assets/close.svg";
import Button from "./Button";
import dropdown1 from "../assets/dropdown1.svg";
import dropdown from "../assets/dropdown.svg";

const Navbar = ({ path }: { path: string }): JSX.Element => {
  const router = useRouter();
  const { authToken, gamerTag, logout } = useMainContext();

  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
  const [isDropdownOpened, setIsDropdownOpened] = useState<boolean>(false);
  const ref = useRef(null);

  const handleSignInClicked = () => {
    if (!authToken) {
      router.push("/signin");
      logout();
    } else {
      // router.push("/");
      // logout();
      setIsDropdownOpened(!isDropdownOpened);
    }
  };

  const handleToggleMenuClicked = () => {
    setIsMenuOpened((opened) => !opened);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsDropdownOpened(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
  const logOut = () => {
    console.log("click");
    router.push("/");
    logout();
  };
  return (
    <>
      <div
        className={`w-full lg:flex text-white uppercase justify-start items-center space-x-10 text-xl tracking-widest hidden ${
          path === "/verify-account" ? "lg:hidden" : ""
        }`}
      >
        <div className="cursor-pointer select-none">
          Utility <Image src={dropdown} />
        </div>
        <div className="cursor-pointer select-none">
          Games <Image src={dropdown} />
        </div>
        <div className="cursor-pointer select-none">GRIND</div>
      </div>
      <div
        className={`lg:hidden ${path === "/verify-account" ? "hidden" : ""}`}
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
            <div>$GRIND</div>
          </div>
        </div>
      )}
      <div
        className={`ml-4 lg:ml-10 flex space-x-2 sm:space-x-7 select-none ${
          gamerTag ? "sm:space-x-0" : ""
        }`}
      >
        <Image className="cursor-pointer" src={langSrc} />
        <Button
          label={authToken ? gamerTag : "Sign In"}
          className={`text-black bg-green-300 font-bold uppercase ${
            gamerTag ? "bg-transparent text-white" : ""
          }`}
          onClick={handleSignInClicked}
          icon={authToken ? <Image src={dropdown1} /> : ""}
        />
      </div>
      {isDropdownOpened && (
        <div
          className="min-w-[300px] z-20 flex flex-col gap-y-5 absolute right-20 top-20 bg-gray-400 p-5"
          ref={ref}
        >
          <div className="hover:cursor-pointer hover:font-bold">
            Account settings
          </div>
          <div className="hover:cursor-pointer hover:font-bold">
            Password reset
          </div>
          <div className="hover:cursor-pointer hover:font-bold">
            Score/Rank/Tropzhies
          </div>
          <div className="hover:cursor-pointer hover:font-bold">Friends</div>
          <div className="hover:cursor-pointer hover:font-bold">My Games</div>
          <div
            className="hover:cursor-pointer hover:font-bold"
            onClick={logOut}
          >
            Logout
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
