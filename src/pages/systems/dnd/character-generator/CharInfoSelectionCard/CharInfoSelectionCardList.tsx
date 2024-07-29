import styles from "./CharInfoSelectionCardList.module.css";
import {Alignment} from "../../../types/Alignment.ts";
import {Race} from "../../../types/Race.ts";
import CharInfoSelectionCard from "./CharInfoSelectionCard";

type CharInfoSelectionCardList = {
    values: Array<number> | Array<Alignment> | Array<Race>,
    componentId: string
}

export default function CharInfoSelectionCardList({values, componentId}: CharInfoSelectionCardList) {
    const {list, card} = styles;

    return (
        <ul className={list}>
            {values.map((value) => (
                <li className={card} key={value}><CharInfoSelectionCard componentId={componentId} raceName={value}/>
                </li>))
            }
        </ul>
    );
}