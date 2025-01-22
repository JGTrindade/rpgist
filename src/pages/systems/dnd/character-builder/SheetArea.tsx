import { Character } from "./types/Character";

import styles from "./SheetArea.module.css";
import AddCharacter from "./buttons/AddCharacter";
import MainCharacter from "./MainCharacter";

interface SheetAreaProps {
  characterList: Array<Character>;
  character: Character | null;
  loading: boolean;
}

export default function SheetArea({
  characterList,
  character,
  loading,
}: SheetAreaProps) {
  const { main } = styles;

  if (loading) {
    return (
      <main>
        <p>Hang on while we’re looking for your characters...</p>
      </main>
    );
  }

  if (characterList.length === 0) {
    return (
      <main className={main}>
        <h2>No Character Selected</h2>
        <p>You currently don’t have any characters.</p>
        <AddCharacter style={{marginTop: "20px"}} />
      </main>
    );
  }

  return (
    <main className={main}>
      <MainCharacter character={character} />
    </main>
  );
}
