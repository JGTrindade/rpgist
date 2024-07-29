import styles from "./ProficiencySkills.module.css";
import ProficiencyBonus from "./ProficiencyBonus";
import SavingThrows from "./SavingThrows";
import Skills from "./Skills";
import PassiveWisdom from "./PassiveWisdom";

export default function ProficiencySkills() {
    const {proficiencySkills} = styles;
    return (
        <section className={proficiencySkills}>
            <SavingThrows/>
            <Skills/>
            <PassiveWisdom/>
        </section>
    )
}