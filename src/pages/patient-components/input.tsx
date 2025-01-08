import React from "react";

interface MyInputProps {
  input_placeholder: string;
  className?: string;
  input_type: string;
}

const Myinput: React.FC<MyInputProps> = ({
  input_placeholder,
  className,
  input_type,
}) => {
  return (
    <input
      type={input_type}
      placeholder={input_placeholder}
      className={className}
    />
  );
};

export default Myinput;
