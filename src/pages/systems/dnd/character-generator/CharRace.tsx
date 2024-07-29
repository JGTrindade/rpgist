// import Dropdown from "@/app/dnd/character-generator/Dropdown";
import CharInfoSelectionCardList from "./CharInfoSelectionCard/CharInfoSelectionCardList.tsx";
import {playerHandbookRaces, monsterManualRaces} from "../../types/Race";
import {useContext} from "react";
import {ContentContext} from "../../store/dnd-character-generator-context.tsx";

export default function CharRace() {

    const raceChoice = useContext(ContentContext);

    const componentId = "charRace";

    let allRaces: Array<Race> = [];
    const raceNames: Array<string> = [];


    if (!raceChoice.bookIsSelected.monsterManual) {
        allRaces = [...playerHandbookRaces]
    } else {
        allRaces = [...playerHandbookRaces, ...monsterManualRaces]
    }

    allRaces.forEach(race => raceNames.push(race.name));

    return <CharInfoSelectionCardList componentId={componentId} values={raceNames} />
    //return <Dropdown name="charRace" title="Race" values={raceNames}/>
}