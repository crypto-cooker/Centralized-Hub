import { CSSProperties, ChangeEventHandler, useState } from "react";

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
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const Input = ({
  value,
  type = "text",
  className,
  style,
  title,
  placeholder,
  error,
  wSize = "24",
  hSize = "10",
  onChange = () => {},
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
              : "top-3 left-2 text-lg"
          }`}
        >
          {value || isEditing ? title : value ? "" : placeholder}
        </div>
      )}
      {error !== undefined && (
        <div className="absolute w-full h-4 text-[10px] text-right px-2 -top-7 left-0 text-red-500 font-bold">
          {error}
        </div>
      )}
      <div
        className={`absolute w-full h-12 -z-20 ${
          type === "checkbox"
            ? "bg-transparent"
            : value && error
            ? "bg-red-100 border-[1px] border-red-500"
            : isEditing
            ? "bg-transparent border-2 border-black"
            : value
            ? "bg-green-100"
            : "bg-stone-100"
        }`}
      ></div>
      <input
        className={`w-full h-12 px-2 flex justify-center items-center cursor-pointer focus:border-0 focus:outline-none text-lg bg-transparent ${
          title && (value || isEditing) ? "pt-3" : ""
        } ${className ?? ""} ${
          type === "checkbox" ? "bg-stone-300 w-4 h-4" : ""
        }`}
        type={type}
        style={style ?? {}}
        value={value}
        checked={value ? true : false}
        onChange={onChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
    </div>
  );
};

export default Input;
