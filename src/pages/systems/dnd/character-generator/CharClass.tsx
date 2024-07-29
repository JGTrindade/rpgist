import Dropdown from "./Dropdown.tsx";

export default function CharClass() {

    const classes: string[] = [
        "barbarian",
        "bard",
        "cleric",
        "druid",
        "fighter",
        "monk",
        "paladin",
        "ranger",
        "rogue",
        "sorcerer",
        "warlock",
        "wizard"
    ]

    return <Dropdown name="charClass" title="Class" values={classes}/>
}
