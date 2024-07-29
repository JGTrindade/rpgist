import Dropdown from "./Dropdown.tsx";
import {Alignment} from "../../types/Alignment.ts";

export default function CharAlignment() {

    const alignments: Alignment[] = [
        "lawful good",
        "neutral good",
        "chaotic good",
        "lawful neutral",
        "true neutral",
        "chaotic neutral",
        "lawful evil",
        "neutral evil",
        "chaotic evil",
    ]

    return <Dropdown name="charAlignment" title="Alignment" values={alignments}/>
}
