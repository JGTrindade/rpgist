import styles from "./HitDice.module.css";

export default function HitDice() {

    const {container, value, title} = styles;
    return (
        <div className={container}>
            <p className={value}>Total: 1d10</p>
            <p className={title}>hit dice</p>
        </div>
    )
};