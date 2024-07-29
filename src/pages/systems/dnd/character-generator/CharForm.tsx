import CharClass from "./CharClass";
import CharLevel from "./CharLevel";
import CharRace from "./CharRace";
import CharAlignment from "./CharAlignment";
import CharXPPoints from "./CharXPPoints";
// import CharName from "./CharName.tsx";
// import Options from "./Options/Options";

export default function CharForm() {
    return (
        <>
            {/*<CharName/>*/}
            <CharClass/>
            <CharLevel/>
            <CharRace/>
            <CharAlignment/>
            <CharXPPoints/>
            {/*<Options />*/}
        </>
    )
}