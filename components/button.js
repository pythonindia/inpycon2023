import React from 'react';

const ButtonComponent = (props) => {
    let buttonClassName = props.buttonClassName;
    let anchorClassName = props.anchorClassName;
    let buttonLabel = props.buttonLabel;
    let buttonHyperLink = props.buttonHyperLink;
    let disabled = props.disabled;
  
    return (
    <>
      <button className={buttonClassName} disabled={disabled}>
      <a href={buttonHyperLink} className={anchorClassName}>{buttonLabel}</a>
    </button>
    </>
  );
};

ButtonComponent.defaultProps = {
    disabled: false
  };

export default ButtonComponent;
