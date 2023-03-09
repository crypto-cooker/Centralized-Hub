import { CSSProperties, useCallback } from "react";
import { ClipLoader } from "react-spinners";

interface IButtonProps {
  label: string;
  isLoading?: boolean;
  className?: string;
  style?: CSSProperties;
  wSize?: number;
  hSize?: number;
  onClick?: Function;
  icon?: React.ReactNode;
}

const Button = ({
  label,
  isLoading = false,
  className,
  style,
  wSize,
  hSize,
  onClick,
  icon,
}: IButtonProps): JSX.Element => {
  const handleClicked = useCallback(() => {
    if (onClick) onClick();
  }, [onClick]);

  return (
    <div
      className={`${wSize ? `w-${wSize}` : "w-[128px]"} ${
        hSize ? `h-${wSize}` : "h-[40px]"
      } flex justify-center items-center cursor-pointer select-none space-x-2 ${
        className ?? ""
      }`}
      style={style ?? {}}
      onClick={handleClicked}
    >
      <div>{isLoading ? <ClipLoader size={16} /> : label}</div>
      <div>{icon}</div>
    </div>
  );
};

export default Button;
