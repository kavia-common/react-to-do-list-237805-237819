import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import "./TodoFilter.css";

// PUBLIC_INTERFACE
/**
 * TodoFilter bar for switching filter states between All/Active/Completed.
 * @param {object} props
 * @param {string} props.current Active filter: "all" | "active" | "completed"
 * @param {function} props.onChange Callback(filter:string)
 */
function TodoFilter({ current, onChange }) {
  const filters = [
    { key: "all", label: "All" },
    { key: "active", label: "Active" },
    { key: "completed", label: "Completed" }
  ];

  return (
    <div className="kavia-filter">
      {filters.map(f => (
        <Button
          key={f.key}
          className={current === f.key ? "active" : ""}
          onClick={() => onChange(f.key)}
          aria-pressed={current === f.key}
          type="button"
        >
          {f.label}
        </Button>
      ))}
    </div>
  );
}

TodoFilter.propTypes = {
  current: PropTypes.oneOf(["all", "active", "completed"]).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TodoFilter;
