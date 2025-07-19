import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export function Card({ children, className }) {
  return (
    <div
      className={classNames(
        "rounded-2xl shadow-md border border-gray-200 bg-white",
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardContent({ children, className }) {
  return <div className={classNames("p-6", className)}>{children}</div>;
}

// Optional: Prop type checking for better developer experience
Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

CardContent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
