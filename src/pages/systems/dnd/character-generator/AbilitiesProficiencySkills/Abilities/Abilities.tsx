import styles from "./Abilities.module.css";
import Ability from "./Ability";

export default function Abilities() {
    const {abilities} = styles;
    return (
        <section className={abilities}>
            <Ability name="strength" value={9}/>
            <Ability name="dexterity" value={7}/>
            <Ability name="constitution" value={10}/>
            <Ability name="intelligence" value={10}/>
            <Ability name="wisdom" value={10}/>
            <Ability name="charisma" value={18}/>
        </section>
    )
}