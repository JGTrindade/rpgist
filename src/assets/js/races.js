import {getImgAltText, getImgPath} from "../../utilities/functions.js";
import {races} from '../../pages/systems/types/Race.ts';

export const playerHandbookRaces = races[0];
export const monsterManualRaces = races[1];
export const monstersOfTheMultiverseRaces = races[2];

export function createCompleteRace(races) {

    let Obj = function (name, image, alt) {
        this.name = name;
        this.image = image;
        this.alt = alt
    }

    let allRaces = [];

    races.forEach(race => {
        allRaces.push(new Obj(race.name, getImgPath(race.name), getImgAltText(race.name)))
    });

    return allRaces;
}
