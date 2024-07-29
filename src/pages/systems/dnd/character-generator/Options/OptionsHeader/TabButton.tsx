import styles from "./TabButton.module.css";
import React, {type ReactNode} from "react";

type TabButtonProps = { children: ReactNode; onSelect: () => void; isSelected?: boolean; };

export default function TabButton({children, onSelect, isSelected}: TabButtonProps) {
    const {button, selected} = styles;

    return (
        <li>
            <button className={`${button} ${isSelected ? selected : ""}`} onClick={onSelect}>{children}</button>
        </li>
    );
};