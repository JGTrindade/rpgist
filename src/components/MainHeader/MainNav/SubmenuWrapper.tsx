import styles from "./SubmenuWrapper.module.css";
import {type ReactNode} from "react";

interface SubmenuWrapperProps {
    children: ReactNode
}

export default function SubmenuWrapper({children}: SubmenuWrapperProps) {
    const {wrapper} = styles;

    return <div className={wrapper}>
        {children}
    </div>
}