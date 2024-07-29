import styles from "./TextBox.module.css";
import {ReactNode} from "react";

type TextBoxProps = { children: ReactNode, title: string }
export default function TextBox({children, title}: TextBoxProps) {
    const {container, name} = styles;
    return (
        <div className={container}>
            {children}
            <p className={name}>{title}</p>
        </div>
    );
}