import styles from "./BooksAvailable.module.css";
import React, {useContext} from "react";
import {ContentContext} from "../../../store/dnd-character-generator-context.tsx";

type BooksAvailableProps = { className: string; }

export default function BooksAvailable({className}: BooksAvailableProps) {
    const {title, books} = styles;

    const bookChoice = useContext(ContentContext);

    const handleBookChoice = (e: React.ChangeEvent<HTMLInputElement>, book: string) => {
        if (book === e.target.name) {
            bookChoice.setBookIsSelected({...bookChoice.bookIsSelected, [book]: e.target.checked});
        }
    };

    return (
        <fieldset className={className}>
            <legend className={title}>Use classes and races from the following books</legend>
            <div className={books}>
                <label>
                    <input type="checkbox" name="playerHandbook" checked readOnly/>
                    Player’s Handbook
                </label>
                <label>
                    <input type="checkbox" name="monsterManual" checked={bookChoice.bookIsSelected.monsterManual}
                           onChange={(e) => handleBookChoice(e, "monsterManual")} />
                    Monster Manual
                </label>
                <label>
                    <input type="checkbox" name="monstersOfTheMultiverse" checked={bookChoice.bookIsSelected.monstersOfTheMultiverse}
                           onChange={(e) =>handleBookChoice(e, "monstersOfTheMultiverse")} />
                    Monsters of the Multiverse
                </label>
            </div>
        </fieldset>
    );
};