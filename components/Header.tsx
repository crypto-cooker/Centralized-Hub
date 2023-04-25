import Logo from "./Logo";
import Navbar from "./Navbar";

interface IHeaderProps {
  path: string;
}

const Header = ({ path }: IHeaderProps): JSX.Element => {
  return (
    <div
      className={`container mx-auto  ${
        path === "/leaderboard"
          ? "hidden"
          : path === "/pre-event"
          ? "hidden"
          : ""
      }`}
    >
      <div className="w-full flex text-white justify-between h-[100px] items-center">
        <Logo path={path} />
        {path.indexOf("/sign") === -1 &&
          path.indexOf("/forgot") === -1 &&
          path.indexOf("/set-new-password") === -1 && <Navbar path={path} />}
        {/* <Navbar path={path} /> */}
      </div>
    </div>
  );
};

export default Header;
