import styles from "./CharInfoSelectionCardList.module.css";
import CharInfoSelectionCard from "./CharInfoSelectionCard";

type CharInfoSelectionCardList = {
    values: Array<Race> // | Array<number>
}

export default function CharInfoSelectionCardList({values}: CharInfoSelectionCardList) {
    const {list, card} = styles;

    return (
        <ul className={list}>
            {
                values.map((value) => (
                    <li className={card} key={value.name}><CharInfoSelectionCard race={value}/>
                    </li>))
            }
        </ul>
    );
}