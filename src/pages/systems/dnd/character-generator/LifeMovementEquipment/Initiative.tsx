import styles from "./Initiative.module.css";
export default function Initiative() {
    const {container, value, title} = styles;
    return (
        <div className={container}>
            <p className={value}>-2</p>
            <p className={title}>initiative</p>
        </div>
    )
}