import styles from "./Equipment.module.css";

export default function Equipment() {
    const {container, title} = styles;
    return (
        <div className={container}>
            <p className={title}>equipment</p>
        </div>
    );
};