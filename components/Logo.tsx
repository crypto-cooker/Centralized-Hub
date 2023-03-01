import Image from "next/image";
import Link from "next/link";

import logoImg from "../assets/logo.svg";

const Logo = ({}): JSX.Element => {
  return (
    <div className="w-full flex text-white h-full items-center text-sp tracking-widest">
      <Link href="/">
        <Image className="cursor-pointer" src={logoImg} width={50} />
      </Link>
      <div className="h-[52px] text-xl uppercase w-22 ml-2 mr-5">
        Block
        <br />
        Tackle
      </div>
      <div className="h-[52px] border-white border-[1px] hidden sm:block" />
      <div className="h-[52px] text-7xl uppercase -translate-y-4 mx-5 hidden sm:block">
        Hub
      </div>
    </div>
  );
};

export default Logo;
