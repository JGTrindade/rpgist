import styles from "./Content.module.css";
import BuildingOptions from "./Options/BuildingOptions.tsx";
import CharRace from "./CharRace.tsx";
import CharClass from "./CharClass.tsx";
import CharAlignment from "./CharAlignment.tsx";
// import CharAlignment from "@/app/dnd/character-generator/CharAlignment";

import {useState} from "react";
import {ContentContext} from "../../store/dnd-character-generator-context.tsx";

type ContentProps = { menuItem: string }
export default function Content({menuItem}: ContentProps) {
    const {content} = styles;

    const [bookIsSelected, setBookIsSelected] = useState({monsterManual: false, monstersOfTheMultiverse: false});
    const [abilityMethod, setAbilityMethod] = useState("default");

    let charInfo = <BuildingOptions/>
    switch (menuItem) {
        case "Race":
            charInfo = <CharRace/>
            break;
        case "Class":
            charInfo = <CharClass/>
            break;
        case "Alignment":
            charInfo = <CharAlignment/>
            break;
        default:
            charInfo = <BuildingOptions/>
    }

    const value = {
        bookIsSelected,
        setBookIsSelected,
        abilityMethod,
        setAbilityMethod
    }

    return <ContentContext.Provider value={value}>
        <main className={content}>
            {charInfo}
        </main>
    </ContentContext.Provider>
}