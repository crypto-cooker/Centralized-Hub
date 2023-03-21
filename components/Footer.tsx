import Button from "./Button";
import Image from "next/image";
import langSrc from "../assets/mini-lang.svg";
interface IFooterProps {
  path: string;
}

const Footer = ({ path }: IFooterProps): JSX.Element => {
  return (
    <div
      className={`container left-1/2 bottom-0 -translate-x-1/2 ${
        path === "/" ? "relative" : "absolute"
      }`}
    >
      <div className="w-full h-[100px] flex flex-col justify-center space-y-2">
        <div className="w-full sm:flex justify-start items-center uppercase space-x-3 text-[10px] text-gray-200 tracking-wider hidden">
          <span>Support</span>
          <span>Privacy Notice</span>
          <span>Terms Of Service</span>
          <span>Block Tackle</span>
          <Button
            className="bg-gray-200 p-2 text-white"
            wSize={2}
            hSize={2}
            label="EN"
            icon={<Image src={langSrc} />}
          />
        </div>
        <div className="w-full flex justify-center sm:justify-start items-center uppercase space-x-3 text-[8px] text-gray-200 tracking-wider">
          <span>© 2023 BLOCK TACKLE INC. ALL RIGHTS RESERVED.</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
