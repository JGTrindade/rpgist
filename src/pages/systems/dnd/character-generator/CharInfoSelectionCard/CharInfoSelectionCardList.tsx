import styles from "./CharInfoSelectionCardList.module.css";
// import {Alignment} from "../../../types/Alignment.ts";
import CharInfoSelectionCard from "./CharInfoSelectionCard";

type CharInfoSelectionCardList = {
    values: Array<Race> // | Array<number> | Array<Alignment>
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