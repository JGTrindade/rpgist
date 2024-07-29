export interface Race {
    type: "humanoid" | monsterType
    name: playerRace | MonsterRace;
    subtype: playerSubtype | monsterSubtype | null;
}

type monsterType =
    "aberrations"
    | "celestials"
    | "dragon"
    | "elementals"
    | "fay"
    | "fiend"
    | "giant"
    | "humanoid"
    | "monstrosities"
    | "undead"

type monsterSubtype =
    "beholder"
    | "angel"
    | "chromatic"
    | "metallic"
    | "genie"
    | "elf"
    | "goblinoid"
    | "kobold"
    | "kuo-ta"
    | "lizardfolk"
    | "shapechanger"

type playerRace =
    "dragonborn"
    | "hill dwarf"
    | "mountain dwarf"
    | "high elf"
    | "wood elf"
    | "drow"
    | "forest gnome"
    | "rock gnome"
    | "half-elf"
    | "half-orc"
    | "halfling lightfoot"
    | "halfling stout"
    | "human"
    | "tiefling";

type playerSubtype =
    "hill"
    | "mountain"
    | "high"
    | "wood"
    | "dark"
    | "lightfoot"
    | "stout"
    | "forest"
    | "rock"

export type MonsterRace =
    "aboleth"
    | "beholder"
    | "death tyrant"
    | "spectator"
    | "deva"
    | "planetar"
    | "solar"
    | "couatl"
    | "empyrean"
    | "black dragon"
    | "blue dragon"
    | "green dragon"
    | "red dragon"
    | "white dragon"
    | "brass dragon"
    | "bronze dragon"
    | "copper dragon"
    | "gold dragon"
    | "silver dragon"
    | "faerie dragon"
    | "azer"
    | "dao"
    | "djinni"
    | "efreeti"
    | "marid"
    | "dryad"
    | "cambion"
    | "cyclops"
    | "fomorian"
    | "cloud giant"
    | "fire giant"
    | "frost giant"
    | "hill giant"
    | "stone giant"
    | "storm giant"
    | "half-ogre"
    | "ogre"
    | "oni"
    | "troll"
    | "aarakocra"
    | "bullywug"
    | "bugbear"
    | "goblin"
    | "hobgoblin"
    | "kobold"
    | "kuo-ta"
    | "lizardfolk"
    | "werebear"
    | "wererat"
    | "weretiger"
    | "werewolf"
    | "centaur"
    | "doppelganger"
    | "drider"
    | "banshee"
    | "death knight"
    | "vampire"

// type MonstersOfTheMultiverseRace = "";

export const playerHandbookRaces: Array<Race> = [
    {
        type: "humanoid",
        name: "dragonborn",
        subtype: null
    },
    {
        type: "humanoid",
        name: "hill dwarf",
        subtype: "hill"
    },
    {
        type: "humanoid",
        name: "mountain dwarf",
        subtype: "mountain",
    },
    {
        type: "humanoid",
        name: "high elf",
        subtype: "elf"
    },
    {
        type: "humanoid",
        name: "wood elf",
        subtype: "elf"
    },
    {
        type: "humanoid",
        name: "drow",
        subtype: "elf"
    },
    {
        type: "humanoid",
        name: "halfling lightfoot",
        subtype: "lightfoot"
    },
    {
        type: "humanoid",
        name: "halfling stout",
        subtype: "stout"
    },
    {
        type: "humanoid",
        name: "human",
        subtype: null
    },
    {
        type: "humanoid",
        name: "forest gnome",
        subtype: "forest"
    },
    {
        type: "humanoid",
        name: "rock gnome",
        subtype: "rock"
    },
]

export const monsterManualRaces: Array<Race> = [
    {
        type: "aberrations",
        name: "aboleth",
        subtype: null
    },
    {
        type: "aberrations",
        name: "beholder",
        subtype: "beholder"
    },
    {
        type: "aberrations",
        name: "death tyrant",
        subtype: "beholder"
    },
    {
        type: "aberrations",
        name: "spectator",
        subtype: "beholder"
    },
    {
        type: "celestials",
        name: "deva",
        subtype: "angel"
    },
    {
        type: "celestials",
        name: "planetar",
        subtype: "angel"
    },
    {
        type: "celestials",
        name: "solar",
        subtype: "angel"
    },
    {
        type: "celestials",
        name: "couatl",
        subtype: null
    },
    {
        type: "celestials",
        name: "empyrean",
        subtype: null
    },
    {
        type: "dragon",
        name: "black dragon",
        subtype: "chromatic"
    },
    {
        type: "dragon",
        name: "blue dragon",
        subtype: "chromatic"
    },
    {
        type: "dragon",
        name: "green dragon",
        subtype: "chromatic"
    },
    {
        type: "dragon",
        name: "red dragon",
        subtype: "chromatic"
    },
    {
        type: "dragon",
        name: "white dragon",
        subtype: "chromatic"
    },
    {
        type: "dragon",
        name: "brass dragon",
        subtype: "metallic"
    },
    {
        type: "dragon",
        name: "bronze dragon",
        subtype: "metallic"
    },
    {
        type: "dragon",
        name: "copper dragon",
        subtype: "metallic"
    },
    {
        type: "dragon",
        name: "gold dragon",
        subtype: "metallic"
    },
    {
        type: "dragon",
        name: "silver dragon",
        subtype: "metallic"
    },
    {
        type: "dragon",
        name: "faerie dragon",
        subtype: null
    },
    {
        type: "elementals",
        name: "azer",
        subtype: null
    },
    {
        type: "elementals",
        name: "dao",
        subtype: "genie"
    },
    {
        type: "elementals",
        name: "djinni",
        subtype: "genie"
    },
    {
        type: "elementals",
        name: "efreeti",
        subtype: "genie"
    },
    {
        type: "elementals",
        name: "marid",
        subtype: "genie"
    },
    {
        type: "fay",
        name: "dryad",
        subtype: null
    },
    {
        type: "fiend",
        name: "cambion",
        subtype: null
    },
    {
        type: "giant",
        name: "cyclops",
        subtype: null
    },
    {
        type: "giant",
        name: "fomorian",
        subtype: null
    },
    {
        type: "giant",
        name: "cloud giant",
        subtype: null
    },
    {
        type: "giant",
        name: "fire giant",
        subtype: null
    },
    {
        type: "giant",
        name: "frost giant",
        subtype: null
    },
    {
        type: "giant",
        name: "hill giant",
        subtype: null
    },
    {
        type: "giant",
        name: "stone giant",
        subtype: null
    },
    {
        type: "giant",
        name: "storm giant",
        subtype: null
    },
    {
        type: "giant",
        name: "half-ogre",
        subtype: null
    },
    {
        type: "giant",
        name: "ogre",
        subtype: null
    },
    {
        type: "giant",
        name: "oni",
        subtype: null
    },
    {
        type: "giant",
        name: "troll",
        subtype: null
    },
    {
        type: "humanoid",
        name: "aarakocra",
        subtype: null
    },
    {
        type: "humanoid",
        name: "bullywug",
        subtype: null
    },
    {
        type: "humanoid",
        name: "bugbear",
        subtype: "goblinoid"
    },
    {
        type: "humanoid",
        name: "goblin",
        subtype: "goblinoid"
    },
    {
        type: "humanoid",
        name: "hobgoblin",
        subtype: "goblinoid"
    },
    {
        type: "humanoid",
        name: "kobold",
        subtype: "kobold"
    },
    {
        type: "humanoid",
        name: "kuo-ta",
        subtype: "kuo-ta"
    },
    {
        type: "humanoid",
        name: "lizardfolk",
        subtype: "lizardfolk"
    },
    {
        type: "humanoid",
        name: "werebear",
        subtype: "shapechanger"
    },
    {
        type: "humanoid",
        name: "wererat",
        subtype: "shapechanger"
    },
    {
        type: "humanoid",
        name: "weretiger",
        subtype: "shapechanger"
    },
    {
        type: "humanoid",
        name: "werewolf",
        subtype: "shapechanger"
    },
    {
        type: "monstrosities",
        name: "centaur",
        subtype: null
    },
    {
        type: "monstrosities",
        name: "doppelganger",
        subtype: null
    },
    {
        type: "monstrosities",
        name: "drider",
        subtype: null
    },
    {
        type: "undead",
        name: "banshee",
        subtype: null
    },
    {
        type: "undead",
        name: "death knight",
        subtype: null
    },
    {
        type: "undead",
        name: "vampire",
        subtype: "shapechanger"
    }
]