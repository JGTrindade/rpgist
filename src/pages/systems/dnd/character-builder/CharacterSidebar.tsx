import styles from "./CharacterSidebar.module.css";

import AddCharacter from "./buttons/AddCharacter";
import CharacterList from "./CharacterList";
import { Character } from "./types/Character";

interface CharacterSidebarProps {
  characters: Character[];
  onSelectCharacter: (char: Character) => void
  selectedCharacter: Character | null
}

export default function CharacterSidebar({ characters, onSelectCharacter, selectedCharacter }: CharacterSidebarProps) {
  const { sidebar } = styles;

  return (
    <div className={sidebar}>
      <AddCharacter />
      <CharacterList characters={characters} onSelectCharacter={onSelectCharacter} selectedCharacter={selectedCharacter} />
    </div>
  );
}
