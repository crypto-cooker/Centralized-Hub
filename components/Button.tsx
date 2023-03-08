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
}

const Button = ({
  label,
  isLoading = false,
  className,
  style,
  wSize,
  hSize,
  onClick,
}: IButtonProps): JSX.Element => {
  const handleClicked = useCallback(() => {
    if (onClick) onClick();
  }, [onClick]);

  return (
    <div
      className={`${wSize ? `w-${wSize}` : "w-[128px]"} ${
        hSize ? `h-${wSize}` : "h-[40px]"
      } flex justify-center items-center cursor-pointer select-none ${
        className ?? ""
      } `}
      style={style ?? {}}
      onClick={handleClicked}
    >
      {isLoading ? <ClipLoader size={16} /> : label}
    </div>
  );
};

export default Button;
