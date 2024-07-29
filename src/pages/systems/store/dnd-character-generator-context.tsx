import {createContext} from "react";

export const ContentContext = createContext({
    bookIsSelected: {monsterManual: false, monstersOfTheMultiverse: false},
    setBookIsSelected: (booksSelected: {monsterManual: boolean, monstersOfTheMultiverse: boolean}) => {},
    abilityMethod: "default",
    setAbilityMethod: (abilityMethod: string) => {}
});