import React from "react";

const Button = (props) => {
  let buttonClassName = props.buttonClassName;
  let anchorClassName = props.anchorClassName;
  let buttonLabel = props.buttonLabel;
  let buttonHyperLink = props.buttonHyperLink;
  let disabled = props.disabled;

  return (
    <>
      <button
        className={buttonClassName}
        disabled={disabled}
        style={{ pointerEvents: props.disabled ? "none" : "auto" }}
      >
        <a href={buttonHyperLink} target="_blank" className={anchorClassName}>
          {buttonLabel}
        </a>
      </button>
    </>
  );
};

Button.defaultProps = {
  disabled: false,
};

export default Button;
