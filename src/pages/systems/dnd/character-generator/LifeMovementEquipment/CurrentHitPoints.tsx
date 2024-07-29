import styles from "./CurrentHitPoints.module.css";

export default function CurrentHitPoints() {
    const {container, value, title} = styles;
    return (
        <div className={container}>
            <p className={value}>hit point maximum: <span>12</span></p>
            <p className={title}>current hit points</p>
        </div>
    );
};