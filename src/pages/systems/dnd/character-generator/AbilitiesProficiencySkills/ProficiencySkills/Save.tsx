import styles from "./Save.module.css";

type SaveProps = {name: string}
export default function Save({name}: SaveProps) {
    const {save, icon, value, ability} = styles;
    return (
        <div className={save}>
            <div className={icon}>○</div>
            <p className={value}>+5</p>
            <p className={ability}>{name}</p>
        </div>
    );
};