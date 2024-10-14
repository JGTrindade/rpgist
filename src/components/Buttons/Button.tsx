import classes from "./Button.module.css";
import { type ReactNode } from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  children: ReactNode;
  url: string;
  styles?: { border?: string; backgroundColor?: string; color?: string };
}

export default function Button({
  children,
  url,
  styles,
  ...rest
}: ButtonProps): ReactNode {
  const { hoverState } = classes;

  const buttonStyles = {
    // Base styles
    padding: "10px 15px",
    borderRadius: "5px",
    fontSize: ".9rem",
    cursor: "pointer",
  };

  return (
    <button
      className={hoverState}
      style={{ ...buttonStyles, ...styles }}
      {...rest}
    >
      <Link to={url}>{children}</Link>
    </button>
  );
}
