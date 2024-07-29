import styles from "./TemporaryHitPoints.module.css";

export default function TemporaryHitPoints() {
    const {container, value, title} = styles;
    return (
        <div className={container}>
            <p className={title}>temporary hit points</p>
        </div>
    );
};