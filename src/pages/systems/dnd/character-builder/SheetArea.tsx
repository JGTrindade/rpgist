import styles from "./SheetArea.module.css";
import { useCharacterContext } from "../contexts/CharacterContext";
import AddCharacter from "./buttons/AddCharacter";
import MainCharacter from "./MainCharacter";

export default function SheetArea() {
  const { main } = styles;

  const { characters, selectedCharacter, loading } = useCharacterContext();

  if (loading) {
    return (
      <main>
        <p>Hang on while we’re looking for your characters...</p>
      </main>
    );
  }

  if (characters.length === 0) {
    return (
      <main className={main}>
        <h2>No Character Selected</h2>
        <p>You currently don’t have any characters.</p>
        <AddCharacter style={{ marginTop: "20px" }} />
      </main>
    );
  }

  return (
    <main className={main}>
      <MainCharacter character={selectedCharacter} />
    </main>
  );
}
