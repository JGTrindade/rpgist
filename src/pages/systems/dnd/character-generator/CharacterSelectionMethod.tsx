import styles from "./CharacterSelectionMethod.module.css"
import {Link} from "react-router-dom";
import Button from "../../../../components/Buttons/Button.tsx";

type CharacterSelectionMethodProps = {
    method: string,
    explanation: string,
};
export default function CharacterSelectionMethod({method, explanation}: CharacterSelectionMethodProps) {
    const bgImage = method === 'Classic' ? styles.classic : styles.automatic;
    const {wrapper} = styles;

    return (
        <article className={`${wrapper} ${bgImage}`}>
            <h2>{method}</h2>
            <p>{explanation}</p>
            <Button onClick={() => {
                return
            }} styles={{border: '1px solid #fff', textTransform: 'uppercase'}}><Link
                to={`./${method.toLowerCase()}`}>Create</Link></Button>
        </article>
    );
}