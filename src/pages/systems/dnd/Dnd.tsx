import {Link} from "react-router-dom";

export default function Dnd() {
    return (
        <section>
            <h1>Dungeons & Dragons</h1>
            <Link to="character-generator">
                <h2>Character Generator</h2>
            </Link>
            <h2>Session Manager</h2>
            <h2>Encounter Builder</h2>
        </section>
    );
}
