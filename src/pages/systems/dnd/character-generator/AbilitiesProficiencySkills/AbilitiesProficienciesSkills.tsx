import styles from "./AbilitiesProficienciesSkills.module.css";
import Abilities from "./Abilities/Abilities";
import ProficiencySkills from "./ProficiencySkills/ProficiencySkills";
import OtherProficienciesAndLanguages from "./OtherProficienciesAndLanguages";
import ProficiencyBonus from "./ProficiencySkills/ProficiencyBonus";

export default function AbilitiesProficienciesSkills() {
    const {abilitiesProficiencySkills} = styles;
    return (
        <section className={abilitiesProficiencySkills}>
            <div>
                <ProficiencyBonus/>
                <Abilities/>
                <ProficiencySkills/>
            </div>
            <OtherProficienciesAndLanguages/>
        </section>
    );
};

