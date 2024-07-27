import {type ReactNode} from "react";

interface ButtonProps {
    children: ReactNode;
    styles?: { backgroundColor: string, color: string }
    onClick: () => void;
}

export default function Button({children, onClick, styles, ...rest}: ButtonProps): ReactNode {

    const buttonStyles = {
        // Base styles
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        backgroundColor: '#000',
        color: '#fff'
    };

    return <button style={{...buttonStyles, ...styles}} onClick={onClick} {...rest}>{children}</button>
}