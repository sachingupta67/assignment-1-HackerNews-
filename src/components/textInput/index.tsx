import React, { useRef } from "react";
interface Props {
  placeholder?: string;
  onChange: any;
  style?: object;
  name: string;
  checked?: boolean;
  type?: "text" | "radio";
  value?: string;
  label?: string;
}
const TextInput: React.FC<Props> = ({
  placeholder,
  onChange,
  style,
  name,
  checked,
  type,
  value,
  label,
}) => {
  const inputRef = useRef<any>();
  const inputProps = type === "radio" ? { checked } : { value };
  return (
    <>
      <input
        type={type}
        ref={inputRef}
        placeholder={placeholder}
        style={{ width: "100%", border: "1px solid black", ...style }}
        name={name}
        {...inputProps}
        onClick={() => {
          if (type === "radio") {
            onChange(inputRef.current.name, inputRef.current.checked);
          }
        }}
        onChange={() => {
          if (type === "text") {
            onChange(inputRef.current.name, inputRef.current.value);
          }
        }}
      />
      {label && <label>{label}</label>}
    </>
  );
};

export default TextInput;
