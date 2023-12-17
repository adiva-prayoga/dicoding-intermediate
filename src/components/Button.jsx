import React, { Component } from "react";

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

export default Button;
