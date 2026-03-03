import React from "react";
import PropTypes from "prop-types";
import "./Input.css";

// PUBLIC_INTERFACE
/**
 * Reusable input component.
 * @param {object} props Standard input props
 */
function Input({ className = "", ...props }) {
  return (
    <input
      className={`kavia-input ${className}`}
      {...props}
    />
  );
}

Input.propTypes = {
  className: PropTypes.string,
};

export default Input;
