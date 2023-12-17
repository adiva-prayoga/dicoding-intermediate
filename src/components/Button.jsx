import PropTypes from "prop-types";

function Button({ buttonType, onClick, children }) {
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
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  buttonType: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
