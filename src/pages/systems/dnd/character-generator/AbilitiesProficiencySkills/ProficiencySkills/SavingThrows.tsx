import styles from "./SavingThrows.module.css";
import Save from "./Save";

export default function SavingThrows() {
    const {savingThrows, title} = styles;
    return (
        <div className={savingThrows}>
            <Save name="strength"/>
            <Save name="dexterity"/>
            <Save name="constitution"/>
            <Save name="intelligence"/>
            <Save name="wisdom"/>
            <Save name="charisma"/>
            <p className={title}>saving throws</p>
        </div>
    )
}