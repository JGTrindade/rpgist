import styles from "./LifeMovementEquipment.module.css";
import ArmorInitiativeSpeedLife from "./ArmorInitiativeSpeedLife";
import AttacksAndSpellCasting from "./AttacksAndSpellCasting";
import Equipment from "./Equipment";

export default function LifeMovementEquipment() {
    const {lifeMovementEquipment} = styles;
    return (
        <section className={lifeMovementEquipment}>
            <ArmorInitiativeSpeedLife/>
            <AttacksAndSpellCasting/>
            <Equipment/>
        </section>
    )
}