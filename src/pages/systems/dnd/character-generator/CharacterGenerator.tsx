import styles from "./CharacterGenerator.module.css";

import CharacterSelectionMethod from "./CharacterSelectionMethod.tsx";

export default function CharacterGenerator() {
    const {characterCreation, methodExplanation, methodSelection} = styles;

    return (
        <div id='character-generator'>
            <div className={characterCreation}>
                <div className={methodExplanation}>
                    <h1>Character creation method</h1>
                    <p>Choose how you would like to create your character</p>
                </div>
                <div className={methodSelection}>
                    <CharacterSelectionMethod method="Classic"
                                              explanation="Create your character one step at a time, as if you were using pencil and paper."/>
                    <CharacterSelectionMethod method="Automatic"
                                              explanation="Choose as many basic parameters as you want to help the generator create your character. You will be able to edit it later."/>
                </div>
            </div>
        </div>
    )

}