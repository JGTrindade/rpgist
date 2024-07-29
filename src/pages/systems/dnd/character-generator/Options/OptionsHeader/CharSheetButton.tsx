import styles from "./CharSheetButton.module.css";

export default function CharSheetButton({children}) {
    const {button} = styles;
    return (
        <button className={button}>{children}</button>
    );
};