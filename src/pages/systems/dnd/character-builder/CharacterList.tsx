import styles from "./CharacterList.module.css";
import { Character } from "./types/Character";
import { useCharacterContext } from "../contexts/CharacterContext";
import NewCharacter from "./NewCharacter";

export default function CharacterList() {
  const { charList, active } = styles;
  const { characters, onSelectCharacter, selectedCharacter } = useCharacterContext();

  const handleSelection = (character: Character) => {
    onSelectCharacter(character);
  };

  return (
    <ul className={charList}>
      {characters.map((character: Character) => (
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
