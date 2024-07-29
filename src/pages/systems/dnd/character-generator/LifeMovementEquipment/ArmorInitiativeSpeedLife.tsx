import styles from "./ArmorInitiativeSpeedLife.module.css";
import ArmorClass from "./ArmorClass";
import Initiative from "./Initiative";
import Speed from "./Speed";
import CurrentHitPoints from "./CurrentHitPoints";
import TemporaryHitPoints from "./TemporaryHitPoints";
import HitDice from "./HitDice";
import DeathSaves from "./DeathSaves";

export default function ArmorInitiativeSpeedLife() {
    const {container, AmorInitiativeSpeed, points, HitDiceDeathSave} = styles;
    return (
        <div className={container}>
            <div className={AmorInitiativeSpeed}>
                <ArmorClass/>
                <Initiative/>
                <Speed/>
            </div>
            <div className={points}>
                <CurrentHitPoints/>
                <TemporaryHitPoints/>
            </div>
            <div className={HitDiceDeathSave}>
                <HitDice/>
                <DeathSaves/>
            </div>
        </div>
    );
};