import OptionsHeader from "./Options/OptionsHeader/OptionsHeader.tsx";
import Content from "./Content.tsx";
// import BuildingOptions from "@/app/dnd/character-generator/Options/BuildingOptions";
// import CharRace from "@/app/dnd/character-generator/CharRace";
// import CharClass from "@/app/dnd/character-generator/CharClass";
// import CharAlignment from "@/app/dnd/character-generator/CharAlignment";

import {useState} from "react";

export default function CharacterGenerator() {
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
            <Content menuItem={content}></Content>
        </div>
    )

}