import CharInfoSelectionCardList from "./CharInfoSelectionCard/CharInfoSelectionCardList.tsx";
import {
    playerHandbookRaces,
    monsterManualRaces,
    monstersOfTheMultiverseRaces,
    createCompleteRace
} from '../../../../assets/js/races.js';

export default function CharRace() {

    const races = [
        ...createCompleteRace(playerHandbookRaces),
        ...createCompleteRace(monsterManualRaces),
        ...createCompleteRace(monstersOfTheMultiverseRaces)
    ];

    return (
        <>
            <aside className="text">
                <h2 className="heading">Race</h2>
                <p className="explanation">In this section you can choose your character’s race.<br/>Currently,
                    the supported races are those available in the<br/>Player’s Handbook, the Monster Manual and the
                    Monsters of the Multiverse.
                </p>
            </aside>
            <CharInfoSelectionCardList values={races}/>
        </>
    )
}