import styles from "./TabButton.module.css";
import React, { type ReactNode } from "react";

type TabButtonProps = {
  children: ReactNode;
  onClick: () => void;
  isSelected?: boolean;
};

export default function TabButton({
  children,
  onClick,
  isSelected
}: TabButtonProps) {
  const { buttonItem, button, selected } = styles;

  return (
    <li className={buttonItem}>
      <button className={`${button} ${isSelected ? selected : ""}`} onClick={onClick}>
        {children}
      </button>
    </li>
  );
}
