import React from "react";
import "./aurora-background.css";

const joinClasses = (...classes) => classes.filter(Boolean).join(" ");

const AuroraBackground = ({
  as: Component = "div",
  className = "",
  children,
  showRadialGradient = true,
  ...props
}) => {
  return React.createElement(
    Component,
    {
      className: joinClasses("aurora-background", className),
      ...props,
    },
    <>
      <div className="aurora-background__layer" aria-hidden="true">
        <div
          className={joinClasses(
            "aurora-background__lights",
            showRadialGradient && "aurora-background__lights--masked",
          )}
        />
      </div>
      <div className="aurora-background__content">{children}</div>
    </>,
  );
};

export default AuroraBackground;
