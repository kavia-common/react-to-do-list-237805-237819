import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

// PUBLIC_INTERFACE
/**
 * Card is a simple surface container with padding and border/shadow for grouping content.
 * @param {object} props
 * @param {string} props.className Additional classes
 * @param {React.ReactNode} props.children Content of the card
 */
function Card({ className = "", children, ...rest }) {
  return (
    <div className={`kavia-card ${className}`} {...rest}>
      {children}
    </div>
  );
}

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Card;
