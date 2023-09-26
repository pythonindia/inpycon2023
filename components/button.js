import Link from "next/link";
import React from "react";

const Button = (props) => {
  return (
    <Link
      href={props.buttonHyperLink || ''}
      target={props.openInNewTab ? "_blank" : "_self"}
      className={props.anchorClassName}
      style={{ pointerEvents: props.disabled ? "none" : "auto" }}
      onClick={props.onClickEvent}
      rel={props.openInNewTab && 'noreferrer'}
    >
      <button
        className={props.buttonClassName}
        disabled={props.disabled}
      >
        {props.buttonLabel}
        {props.icon && props.icon}
      </button>
    </Link> 
  );
};

Button.defaultProps = {
  disabled: false,
  openInNewTab: true
};

export default Button;
