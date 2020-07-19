import React from "react";
import "./button.css";

const STYLES = [
  "btn--yellow--solid",
  "btn--yellowBlue--solid",
  "btn--orange--outline",
  "btn--yellow--outline",
  "btn--blue--outline",
];

const SIZES = ["btn--medium", "btn--small"];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
  }) => {
    let checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  
    let checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  
    return (
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    );
  };
  
  export default Button;