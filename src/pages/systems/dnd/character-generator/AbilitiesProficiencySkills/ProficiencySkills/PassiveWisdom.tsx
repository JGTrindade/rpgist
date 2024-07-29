import styles from "./PassiveWisdom.module.css";

export default function ProficiencyBonus() {
    const {passiveWisdom, value, title} = styles;
    return (
        <div className={passiveWisdom}>
            <p className={value}>13</p>
            <p className={title}>passive wisdom (perception)</p>
        </div>
    )
}