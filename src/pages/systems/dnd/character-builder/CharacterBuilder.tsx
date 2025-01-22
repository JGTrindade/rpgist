import styles from "./CharacterBuilder.module.css";
import { Character } from "./types/Character";
import Header from "./Header";
import CharacterSidebar from "./CharacterSidebar";
import SheetArea from "./SheetArea";

import { useEffect, useState } from "react";

export default function CharacterBuilder() {
  const { grid } = styles;
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch("http://localhost:5001/characters");
        if (!response.ok) {
          throw new Error("Failed to fetch characters");
        }
        const chars: Character[] = await response.json();
        setCharacters(chars);

        if (chars.length > 0) {
            setSelectedCharacter(chars[0])
        }
        
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  const handleCharacterSelection = (character: Character) => {
    setSelectedCharacter(character);
  };

  return (
    <div className="app">
      <Header />
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {!loading && !error && (
        <div className={grid}>
          <CharacterSidebar
            characters={characters}
            onSelectCharacter={handleCharacterSelection}
            selectedCharacter={selectedCharacter}
          />
          <SheetArea
            characterList={characters}
            character={selectedCharacter}
            loading={loading}
          />
        </div>
      )}
    </div>
  );
}
