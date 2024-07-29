import styles from "./AttacksAndSpellCasting.module.css";

export default function AttacksAndSpellCasting() {
    const {container, title} = styles;
    return (
        <div className={container}>
            <p className={title}>attacks & spellcasting</p>
        </div>
    );
};