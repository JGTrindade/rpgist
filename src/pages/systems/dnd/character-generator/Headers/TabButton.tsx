import styles from "./TabButton.module.css";
import React, {type ReactNode} from "react";
import {Link} from "react-router-dom";

type TabButtonProps = { children: ReactNode; onSelect: () => void; isSelected?: boolean; link: string; };

export default function TabButton({children, onSelect, isSelected, link}: TabButtonProps) {
    const {buttonItem, button, selected} = styles;

    console.log(link)

    return (
        <li className={buttonItem}>
            <Link to={`../${link}`} relative="path">
                <button className={`${button} ${isSelected ? selected : ""}`} onClick={onSelect}>
                    {children}
                </button>
            </Link>
        </li>
    )
}