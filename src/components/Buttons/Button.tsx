import classes from "./Button.module.css";
import {type ReactNode} from "react";

interface ButtonProps {
    children: ReactNode;
    styles?: { border?: string, backgroundColor?: string, color?: string }
    onClick: () => void;
}

export default function Button({children, onClick, styles, ...rest}: ButtonProps): ReactNode {
    const {hoverState} = classes;

    const buttonStyles = {
        // Base styles
        padding: '10px 15px',
        borderRadius: '5px',
        fontSize: '.9rem',
        cursor: 'pointer',
    };

    return <button className={hoverState} style={{...buttonStyles, ...styles}}
                   onClick={onClick} {...rest}>{children}</button>
}