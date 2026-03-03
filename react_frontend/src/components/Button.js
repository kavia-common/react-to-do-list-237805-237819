import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

// PUBLIC_INTERFACE
/**
 * A reusable button component that can accept styles and children.
 * @param {object} props
 * @param {string} props.type Button type (button, submit, reset)
 * @param {string} props.className Additional classes for the button
 * @param {React.ReactNode} props.children Content of the button
 * @param {function} props.onClick Click handler
 * @param {boolean} props.disabled If true, disables the button
 */
function Button({ type = "button", className = "", children, onClick, disabled = false, ...rest }) {
  return (
    <button
      type={type}
      className={`kavia-btn ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Button;
