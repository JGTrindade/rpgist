import {getImgAltText, getImgPath} from "../../utilities/functions.js";
import {species} from '../../pages/systems/types/Specie.ts';

export const playerHandbookSpecies = species[0];
export const monsterManualSpecies = species[1];
export const monstersOfTheMultiverseSpecies = species[2];

export function createCompleteSpecie(species) {

    let Obj = function (name, image, alt) {
        this.name = name;
        this.image = image;
        this.alt = alt
    }

    let allSpecies = [];

    species.forEach(specie => {
        allSpecies.push(new Obj(specie.name, getImgPath(specie.name), getImgAltText(specie.name)))
    });

    return allSpecies;
}
