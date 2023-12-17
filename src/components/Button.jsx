import React, { Component } from "react";

import PropTypes from "prop-types";

class Button extends Component {
  render() {
    const { buttonType, onClick } = this.props;

    const getButtonClass = (type) => {
      switch (type) {
        case "submit":
          return "submit-button";
        case "delete":
          return "delete-button";
        case "archive":
          return "archive-button";
        default:
          return "default-button";
      }
    };

    const buttonClass = getButtonClass(buttonType);

    return (
      <button
        className={buttonClass}
        type={buttonType === "submit" ? "submit" : "button"}
        onClick={onClick}
      >
        {this.props.children}
      </button>
    );
  }
}

Button.propTypes = {
  buttonType: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
