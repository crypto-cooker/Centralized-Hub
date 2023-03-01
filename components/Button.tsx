import { CSSProperties, useCallback } from "react";

interface IButtonProps {
  label: string;
  className?: string;
  style?: CSSProperties;
  wSize?: number;
  hSize?: number;
  onClick?: Function;
}

const Button = ({
  label,
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
      {label}
    </div>
  );
};

export default Button;
