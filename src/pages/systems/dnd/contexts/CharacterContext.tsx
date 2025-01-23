import { createContext, useState, useContext, useCallback, ReactNode } from "react";
import { Character } from "../character-builder/types/Character";

interface CharacterContextProps {
  characters: Array<Character>;
  selectedCharacter: Character | null;
  fetchCharacters: () => void;
  onSelectCharacter: (character: Character) => void;
  loading: boolean;
  error: string | null;
}

export const CharacterContext = createContext<CharacterContextProps | undefined>(undefined);

export function useCharacterContext() {
    const character = useContext(CharacterContext)

    if (!character) {
        throw new Error("Error: The Character Context is missing.");
    }

    return character;
}

export const CharacterProvider = ({ children }: { children: ReactNode }) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCharacters = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:5001/characters");
      if (!response.ok) {
        throw new Error("Failed to fetch characters");
      }
      const chars = await response.json();
      setCharacters(chars);
      
      if (chars.length > 0) {
        setSelectedCharacter(chars[0])
      }

    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  }, []);

  const onSelectCharacter = (character: Character) => {
    setSelectedCharacter(character);
  };

  return (
    <CharacterContext.Provider
      value={{
        characters,
        selectedCharacter,
        fetchCharacters,
        onSelectCharacter,
        loading,
        error
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};
