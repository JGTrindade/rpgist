import styles from "./CharSheet.module.css";
import LifeMovementEquipment from "./LifeMovementEquipment/LifeMovementEquipment";
import AbilitiesProficienciesSkills from "./AbilitiesProficiencySkills/AbilitiesProficienciesSkills";
import TraitsIdealsBondsFlaws from "./TraitsIdealsBondsFlaws/TraitsIdealsBondsFlaws";

export default function CharSheet() {
    const {charSheet} = styles;

    return (
        <main className={charSheet}>
            <AbilitiesProficienciesSkills/>
            <LifeMovementEquipment/>
            <TraitsIdealsBondsFlaws/>
        </main>
    )
}