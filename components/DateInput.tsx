import {
  CSSProperties,
  ChangeEventHandler,
  MouseEventHandler,
  useState
} from "react";

interface IInputProps {
  value: string;
  type?: string;
  className?: string;
  style?: CSSProperties;
  wSize?: string;
  hSize?: string;
  title?: string;
  placeholder?: string;
  error?: string;
  status?: string;
  icon?: React.ReactNode;
  focused?: void;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onIconClick?: MouseEventHandler<HTMLDivElement>;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const DateInput = ({
  value,
  type = "text",
  className,
  style,
  title,
  placeholder,
  error,
  wSize = "24",
  hSize = "10",
  status,
  focused,
  onChange = () => {},
  onClick = () => {}
}: IInputProps): JSX.Element => {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleInputFocus = () => {
    setIsEditing(true);
  };

  const handleInputBlur = () => {
    setIsEditing(false);
  };

  return (
    <div className={`w-${wSize} h-${hSize} relative`}>
      {title && (
        <div
          className={`absolute transition-all ease-linear text-[10px] uppercase tracking-widest select-none -z-10 ${
            value || isEditing
              ? "top-0.5 left-1 text-xs"
              : "top-4 left-2 text-xs sm:text-xs"
          }`}
        >
          {value || isEditing ? title : value ? placeholder : ""}
        </div>
      )}
      {/* {error !== undefined && (
        <div
          className={`absolute w-full h-4 text-[10px] text-right px-2 -top-7 left-0 font-bold ${
            status === "error"
              ? "text-red-500"
              : status === "warning"
              ? "text-yellow-500"
              : "text-green-500"
          }`}
        >
          {error}
        </div>
      )} */}
      {/* <div
        className={`absolute w-full h-12 -z-20 ${
          isEditing && !value
            ? "bg-transparent border-2 border-black"
            : value
            ? "bg-green-100"
            : "bg-stone-100"
        }`}
      ></div> */}

      <input
        className={`w-full h-12 px-2 flex justify-center items-center cursor-pointer focus:border-0 focus:outline-none text-sm focus:text-lg bg-transparent ${
          title && (value || isEditing) ? "pt-3 text-lg" : ""
        } ${className ?? ""} ${
          type === "checkbox" ? "bg-stone-300 w-4 h-4" : ""
        } `}
        type={type}
        style={style ?? {}}
        value={value}
        checked={value ? true : false}
        onChange={onChange}
        onFocus={handleInputFocus}
        autoFocus={title === "MONTH" ? true : false}
        onClick={onClick}
        onBlur={handleInputBlur}
        placeholder={isEditing === true ? placeholder : title}
      />
    </div>
  );
};

export default DateInput;
