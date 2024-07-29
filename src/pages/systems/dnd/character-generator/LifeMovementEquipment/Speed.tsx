import styles from "./Speed.module.css";
export default function Speed() {
    const {container, value, title} = styles;
    return (
        <div className={container}>
            <p className={value}>30 feet</p>
            <p className={title}>speed</p>
        </div>
    )
}