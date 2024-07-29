import styles from "./Skill.module.css";

type SkillProps = { name: string, ability: string }
export default function Skill({name, ability}: SkillProps) {
    const {skill, skillName, icon, value, abilityAcron} = styles;
    return (
        <div className={skill}>
            <div className={icon}>○</div>
            <p className={value}>+5</p>
            <p className={skillName}>{name}</p>
            <p className={abilityAcron}>({ability})</p>
        </div>
    );
};