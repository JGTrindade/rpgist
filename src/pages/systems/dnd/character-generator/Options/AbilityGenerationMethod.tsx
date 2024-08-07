import styles from "./AbilityGenerationMethod.module.css";
import React, {useContext} from "react";
import {ContentContext} from "../../../store/dnd-character-generator-context.tsx";

type AbilityGenerationProps = { className: string }
export default function AbilityGenerationMethod({className}: AbilityGenerationProps) {
    const {title, abilities} = styles;

    const abilityMethodChoice = useContext(ContentContext);

    const handleAbilityChoice = (e: React.ChangeEvent<HTMLInputElement>) => {
        abilityMethodChoice.setAbilityMethod(e.target.value);
    }

    return (
        <fieldset className={className}>
            <legend className={title}>Method for generating ability values</legend>
            <div className={abilities}>
                <label>
                    <input type="radio" name="attributeGenerationMethod" value="default" defaultChecked
                           onChange={handleAbilityChoice} />
                    Standard set of scores — 15, 14, 13, 12, 10, 8 (default)
                </label>
                <label>
                    <input type="radio" name="attributeGenerationMethod" value="dice" onChange={handleAbilityChoice}
                           checked={abilityMethodChoice.abilityMethod === "dice"}/>
                    4d6 discarding the lowest number
                </label>
                <label>
                    <input type="radio" name="attributeGenerationMethod" value="distribution"
                           onChange={handleAbilityChoice}
                           checked={abilityMethodChoice.abilityMethod === "distribution"}/>
                    27 points to distribute on abilities
                </label>
            </div>
        </fieldset>
    );
};