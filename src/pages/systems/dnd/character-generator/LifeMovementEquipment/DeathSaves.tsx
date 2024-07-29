import styles from "./DeathSaves.module.css";

export default function DeathSaves() {

    const {container, value, title} = styles;
    return (
        <div className={container}>
            <div>
                <p>successes ○ ○ ○</p>
                <p>failures ○ ○ ○</p>
            </div>
            <p className={title}>death saves</p>
        </div>
    )
};