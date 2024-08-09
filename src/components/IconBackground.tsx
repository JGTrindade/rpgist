import styles from "./IconBrackground.module.css";
import {ReactNode} from "react";

export default function IconBackground({children}: { children: ReactNode }) {
    const {softBackground} = styles;

    return (
        <div className={softBackground}>{children}</div>
    );
}