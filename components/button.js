import React from "react";

const Button = (props) => {
  return (
    <a
      href={props.buttonHyperLink}
      target={props.openInNewTab ? "_blank" : "_self"}
      className={props.anchorClassName}
      style={{ pointerEvents: props.disabled ? "none" : "auto" }}
      onClick={props.onClickEvent}
    >
      <button
        className={props.buttonClassName}
        disabled={props.disabled}
      >
        {props.buttonLabel}
        {props.icon && props.icon}
      </button>
    </a>
  );
};

Button.defaultProps = {
  disabled: false,
  openInNewTab: true
};

export default Button;
