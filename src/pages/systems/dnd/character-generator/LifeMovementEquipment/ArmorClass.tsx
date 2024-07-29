import styles from "./ArmorClass.module.css";
export default function ArmorClass() {
    const {container, value, title} = styles;
    return (
        <div className={container}>
            <p className={value}>17</p>
            <p className={title}>armor class</p>
        </div>
    )
}