import styles from "./CharacterSidebar.module.css";
import AddCharacter from "./buttons/AddCharacter";
import CharacterList from "./CharacterList";

export default function CharacterSidebar() {
  const { sidebar } = styles;

  return (
    <div className={sidebar}>
      <AddCharacter />
      <CharacterList />
    </div>
  );
}
