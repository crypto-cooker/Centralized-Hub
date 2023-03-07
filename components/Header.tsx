import Logo from "./Logo";
import Navbar from "./Navbar";

interface IHeaderProps {
  path: string;
}

const Header = ({ path }: IHeaderProps): JSX.Element => {
  return (
    <div className="container mx-auto">
      <div className="w-full flex text-white justify-between h-[100px] items-center">
        <Logo />
        {path === "/" && <Navbar />}
      </div>
    </div>
  );
};

export default Header;
