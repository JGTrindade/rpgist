import styles from "./Content.module.css";

import React, { useState } from "react";

import BasicInfo from "./Options/BasicInfo.tsx";
import CharRace from "./CharRace.tsx";
import CharClass from "./CharClass.tsx";

type ContentProps = { menuItem: React.ReactNode }
export default function Content({menuItem}: ContentProps) {
    const {content} = styles;

    const [basicInfoData, setBasicInfoData] = useState({name: '', surname: ''});
    const [charRaceData, setCharRaceData] = useState({});
    const [charClassData, setCharClassData] = useState({});

    let contentType = <BasicInfo data={basicInfoData} setData={setBasicInfoData}/>
    switch (menuItem) {
        case "race":
            contentType = <CharRace data={charRaceData} setData={setCharRaceData}/>
            break;
        case "class":
            contentType = <CharClass data={charClassData} setData={setCharClassData}/>
            break;
        default:
            contentType = <BasicInfo data={basicInfoData} setData={setBasicInfoData}/>
    }

    return (
        <main className={content}>
            {contentType}
        </main>
    )
}