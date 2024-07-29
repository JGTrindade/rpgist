import styles from "./Skills.module.css";
import Skill from "./Skill";

export default function Skills() {
    const {skills, title} = styles;
    return (
        <div className={skills}>
            <Skill name="acrobatics" ability="dex"/>
            <Skill name="animal handling" ability="wis"/>
            <Skill name="arcana" ability="int"/>
            <Skill name="athletics" ability="str"/>
            <Skill name="deception" ability="cha"/>
            <Skill name="history" ability="int"/>
            <Skill name="insight" ability="wis"/>
            <Skill name="intimidation" ability="cha"/>
            <Skill name="investigation" ability="int"/>
            <Skill name="medicine" ability="wis"/>
            <Skill name="nature" ability="int"/>
            <Skill name="perception" ability="wis"/>
            <Skill name="performance" ability="cha"/>
            <Skill name="persuasion" ability="cha"/>
            <Skill name="religion" ability="int"/>
            <Skill name="sleight of hand" ability="dex"/>
            <Skill name="stealth" ability="dex"/>
            <Skill name="survival" ability="wis"/>
            <p className={title}>skills</p>
        </div>
    )
}