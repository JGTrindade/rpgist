// import Dropdown from "@/app/dnd/character-generator/Dropdown";
import CharInfoSelectionCardList from "./CharInfoSelectionCard/CharInfoSelectionCardList.tsx";
import {
    playerHandbookRaces,
    monsterManualRaces,
    monstersOfTheMultiverseRaces,
    createCompleteRace
} from '../../../../assets/js/races.js';
import {useContext} from "react";
import {ContentContext} from "../../store/dnd-character-generator-context.tsx";

export default function CharRace() {

    const raceChoice = useContext(ContentContext);

    const componentId = "charRace";

    let allRaces: Array<Race> = [];

    if (!raceChoice.bookIsSelected.monsterManual && !raceChoice.bookIsSelected.monstersOfTheMultiverse) {

        allRaces = [...createCompleteRace(playerHandbookRaces)];

    } else if (raceChoice.bookIsSelected.monsterManual && !raceChoice.bookIsSelected.monstersOfTheMultiverse) {

        const playerRaces = [...createCompleteRace(playerHandbookRaces)];
        const monsterRaces = [...createCompleteRace(monsterManualRaces)];
        allRaces = [...playerRaces, ...monsterRaces];

    } else if (raceChoice.bookIsSelected.monstersOfTheMultiverse && !raceChoice.bookIsSelected.monsterManual) {

        const playerRaces = [...createCompleteRace(playerHandbookRaces)];
        const multiverseRaces = [...createCompleteRace(monstersOfTheMultiverseRaces)];
        allRaces = [...playerRaces, ...multiverseRaces];

    } else {
        const playerRaces = [...createCompleteRace(playerHandbookRaces)];
        const monsterRaces = [...createCompleteRace(monsterManualRaces)];
        const multiverseRaces = [...createCompleteRace(monstersOfTheMultiverseRaces)];
        allRaces = [...playerRaces, ...monsterRaces, ...multiverseRaces];
    }

    return <CharInfoSelectionCardList componentId={componentId} values={allRaces}/>
    //return <Dropdown name="charRace" title="Race" values={raceNames}/>
}