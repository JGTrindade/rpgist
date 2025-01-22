import styles from "./CharacterList.module.css";
import { Character } from "./types/Character";
import NewCharacter from "./NewCharacter";

interface CharacterListProps {
  characters: Character[];
  onSelectCharacter: (char: Character) => void;
  selectedCharacter: Character | null;
}

export default function CharacterList({
  characters,
  onSelectCharacter,
  selectedCharacter,
}: CharacterListProps) {
  const { charList, active } = styles;

  const handleSelection = (character: Character) => {
    onSelectCharacter(character);
  };

  return (
    <ul className={charList}>
      {characters.map((character) => (
        <li
          key={character.id}
          onClick={() => handleSelection(character)}
          className={`${character === selectedCharacter ? active : ""}`}
        >
          <NewCharacter
            name={character.name}
            role={character.role}
            level={character.level}
          />
        </li>
      ))}
    </ul>
  );
}
