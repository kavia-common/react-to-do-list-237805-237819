import React from "react";
import PropTypes from "prop-types";
import "./Sidebar.css";

/**
 * PUBLIC_INTERFACE
 * Sidebar is a vertical navigation or content container that can hold links, actions, or information.
 * Typical usage: Place Sidebar on the left or right of main content. Accepts children for flexible structure.
 * @param {object} props
 * @param {string} props.className Additional class names for the sidebar
 * @param {React.ReactNode} props.children Sidebar content
 * @param {React.CSSProperties} props.style Inline styles (optional)
 */
function Sidebar({ className = "", children, style = {}, ...rest }) {
  return (
    <aside
      className={`kavia-sidebar ${className}`}
      style={style}
      {...rest}
    >
      {children}
    </aside>
  );
}

Sidebar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};

export default Sidebar;
