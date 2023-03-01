import Image from "next/image";
import { useRouter } from "next/router";
import langSrc from "../assets/lang.svg";
import Button from "./Button";

const Navbar = ({}): JSX.Element => {
  const router = useRouter();

  const handleSignInClicked = () => {
    router.push("/signin");
  };

  return (
    <>
      <div className="w-full lg:flex text-white uppercase justify-end items-center space-x-10 text-xl tracking-widest hidden">
        <div>Utility</div>
        <div>Games</div>
        <div>Marketplace</div>
        <div>$GRIND</div>
      </div>
      <div className="lg:ml-10 flex space-x-7">
        <Image src={langSrc} />
        <Button
          label="Sign In"
          className="text-black bg-green-300 font-bold"
          onClick={handleSignInClicked}
        />
      </div>
    </>
  );
};

export default Navbar;
