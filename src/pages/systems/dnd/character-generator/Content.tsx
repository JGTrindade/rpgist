import styles from "./Content.module.css";
import React from "react";
import {useLocation} from "react-router-dom";

import BasicInfo from "./Options/BasicInfo.tsx";
import CharRace from "./CharRace.tsx";
import CharClass from "./CharClass.tsx";

// type ContentProps = { menuItem: React.ReactNode }
export default function Content() {
    const {content} = styles;

    const location = useLocation();
    const currentPath = location.pathname;
    console.log(currentPath)

    let contentType = <BasicInfo/>
    switch (currentPath) {
        case "/dnd/character-generator/automatic/race":
            contentType = <CharRace/>
            break;
        case "/dnd/character-generator/automatic/class":
            contentType = <CharClass/>
            break;
        default:
            contentType = <BasicInfo/>
    }

    return (
        <main className={content}>
            {contentType}
        </main>
    )
}