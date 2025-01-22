import { Character } from "./types/Character";

interface MainCharacterProps {
    character : Character | null
}

export default function MainCharacter({character}: MainCharacterProps) {
  return (
    <div>
      <p>{character?.name}</p>
      <p>{character?.role}, {character?.level}</p>
    </div>
  );
}
