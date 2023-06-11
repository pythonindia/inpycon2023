import React from "react";

const Button = (props) => {
  let buttonClassName = props.buttonClassName;
  let anchorClassName = props.anchorClassName;
  let buttonLabel = props.buttonLabel;
  let buttonHyperLink = props.buttonHyperLink;
  let disabled = props.disabled;

  return (
    <>
      <a
        href={buttonHyperLink}
        target="_blank" className={anchorClassName}
        style={{ pointerEvents: props.disabled ? "none" : "auto" }}
      >
        <button
          className={buttonClassName}
          disabled={disabled}

        >
          {buttonLabel}
        </button>
      </a>
    </>
  );
};

Button.defaultProps = {
  disabled: false,
};

export default Button;
