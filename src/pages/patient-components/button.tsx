import React from "react";

interface MyButtonProps {
  button_text: string;
  className?: string;
  img_source?: string;
  img_source2?: string;
  clickHandler?: () => void;
}

const MyButton: React.FC<MyButtonProps> = ({
  button_text,
  className,
  img_source,
  img_source2,
  clickHandler,
}) => {
  return (
    <button
      className={`${className ? className : ""} flex items-center gap-2`}
      onClick={clickHandler}
    >
      {img_source && <img src={img_source} alt="button-img" />}
      {button_text}
      {img_source2 && <img src={img_source2} alt="button-img" />}
    </button>
  );
};

export default MyButton;
