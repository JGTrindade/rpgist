export interface Race {
    type: "humanoid" | monsterType | monstersOfTheUniverseType;
    name: playerRace | MonsterRace | MonstersOfTheMultiverseRace;
    subtype: playerSubtype | monsterSubtype | monstersOfTheUniverseSubtype | null;
}

type monsterType =
    "aberrations"
    | "celestials"
    | "dragon"
    | "elementals"
    | "fey"
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
    | "kuo-ta"
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
    | "bullywug"
    | "kuo-ta"
    | "werebear"
    | "wererat"
    | "weretiger"
    | "werewolf"
    | "doppelganger"
    | "drider"
    | "banshee"
    | "death knight"
    | "vampire"

type MonstersOfTheMultiverseRace =
    "aarakocra"
    | "aasimar"
    | "bugbear"
    | "centaur"
    | "changeling"
    | "deep gnome"
    | "duergar"
    | "eladrin"
    | "fairy"
    | "firbolg"
    | "genasi"
    | "githyanki"
    | "githzerai"
    | "goblin"
    | "goliath"
    | "harengon"
    | "hobgoblin"
    | "kenku"
    | "kobold"
    | "lizardfolk"
    | "minotaur"
    | "orc"
    | "satyr"
    | "sea elf"
    | "shadar-kai"
    | "shifter"
    | "tabaxi"
    | "tortle"
    | "triton"
    | "yuan-ti"

type monstersOfTheUniverseType =
    "humanoid/goblinoid"
    | "humanoid/gnome"
    | "humanoid/dwarf"
    | "humanoid/elf";

type monstersOfTheUniverseSubtype =
    "air"
    | "earth"
    | "fire"
    | "water"

const playerHandbookRaces: Array<Race> = [
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

const monsterManualRaces: Array<Race> = [
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
        type: "fey",
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
        name: "bullywug",
        subtype: null
    },
    {
        type: "humanoid",
        name: "kuo-ta",
        subtype: "kuo-ta"
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

const monstersOfTheMultiverseRaces: Array<Race> = [
    {
        type: "humanoid",
        name: "aarakocra",
        subtype: null
    },
    {
        type: "humanoid",
        name: "aasimar",
        subtype: null
    },
    {
        type: "humanoid/goblinoid",
        name: "bugbear",
        subtype: null
    },
    {
        type: "fey",
        name: "centaur",
        subtype: null
    },
    {
        type: "fey",
        name: "changeling",
        subtype: null
    },
    {
        type: "humanoid/gnome",
        name: "deep gnome",
        subtype: null
    },
    {
        type: "humanoid/dwarf",
        name: "duergar",
        subtype: null
    },
    {
        type: "humanoid/elf",
        name: "eladrin",
        subtype: null
    },
    {
        type: "fey",
        name: "fairy",
        subtype: null
    },
    {
        type: "humanoid",
        name: "firbolg",
        subtype: null
    },
    {
        type: "humanoid",
        name: "genasi",
        subtype: "air"
    },
    {
        type: "humanoid",
        name: "genasi",
        subtype: "earth"
    },
    {
        type: "humanoid",
        name: "genasi",
        subtype: "fire"
    },
    {
        type: "humanoid",
        name: "genasi",
        subtype: "water"
    },
    {
        type: "humanoid",
        name: "githyanki",
        subtype: null
    },
    {
        type: "humanoid",
        name: "githzerai",
        subtype: null
    },
    {
        type: "humanoid/goblinoid",
        name: "goblin",
        subtype: null
    },
    {
        type: "humanoid",
        name: "goliath",
        subtype: null
    },
    {
        type: "humanoid",
        name: "harengon",
        subtype: null
    },
    {
        type: "humanoid/goblinoid",
        name: "hobgoblin",
        subtype: null
    },
    {
        type: "humanoid",
        name: "kenku",
        subtype: null
    },
    {
        type: "humanoid",
        name: "kobold",
        subtype: null
    },
    {
        type: "humanoid",
        name: "lizardfolk",
        subtype: null
    },
    {
        type: "humanoid",
        name: "minotaur",
        subtype: null
    },
    {
        type: "humanoid",
        name: "orc",
        subtype: null
    },
    {
        type: "fey",
        name: "satyr",
        subtype: null
    },
    {
        type: "humanoid/elf",
        name: "sea elf",
        subtype: null
    },
    {
        type: "humanoid/elf",
        name: "shadar-kai",
        subtype: null
    },
    {
        type: "humanoid",
        name: "shifter",
        subtype: null
    },
    {
        type: "humanoid",
        name: "tabaxi",
        subtype: null
    },
    {
        type: "humanoid",
        name: "tortle",
        subtype: null
    },
    {
        type: "humanoid",
        name: "triton",
        subtype: null
    },
    {
        type: "humanoid",
        name: "yuan-ti",
        subtype: null
    },
]

export const races = [
    playerHandbookRaces,
    monsterManualRaces,
    monstersOfTheMultiverseRaces
];