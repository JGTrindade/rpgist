import styles from "./CharacterGenerator.module.css";
import OptionsHeader from "./Options/OptionsHeader/CharacterSelectionHeader.tsx";
// import Content from "./Content.tsx";
import CharacterSelectionMethod from "./CharacterSelectionMethod.tsx";

import {useState} from "react";

export default function CharacterGenerator() {
    const {characterCreation, methodExplanation, methodSelection} = styles;

    const [content, setContent] = useState("options");


    const handleContent = selectedContent => {
        if (selectedContent === "race") {
            setContent("race");
        } else if (selectedContent === "class") {
            setContent("class");
        } else if (selectedContent === "alignment") {
            setContent("alignment");
        } else {
            setContent("options")
        }
    };

    return (
        <div id='character-generator'>
            <OptionsHeader selectedMenuItem={content} onSelectedMenuItem={handleContent}/>
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
            {/*<Content menuItem={content}></Content>*/}
        </div>
    )

}