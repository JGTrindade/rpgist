import styles from "./ProficiencyBonus.module.css"

export default function ProficiencyBonus() {
    const {proficiencyBonus, value, title} = styles;
    return (
        <div className={proficiencyBonus}>
            <p className={value}>+2</p>
            <p className={title}>proficiency bonus</p>
        </div>
    )
}