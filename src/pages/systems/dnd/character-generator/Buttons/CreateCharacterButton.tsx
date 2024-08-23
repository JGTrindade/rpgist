import styles from "./CreateCharacterButton.module.css";
export default function CreateCharacterButton() {
    const {callToAction} = styles;

    return (
        <button className={callToAction}>Create character</button>
    );
}