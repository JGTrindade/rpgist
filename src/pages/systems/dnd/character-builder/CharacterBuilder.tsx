import styles from "./CharacterBuilder.module.css";
import { useCharacterContext } from "../contexts/CharacterContext";
import { useEffect } from "react";
import Header from "./Header";
import CharacterSidebar from "./CharacterSidebar";
import SheetArea from "./SheetArea";

export default function CharacterBuilder() {
  const { grid } = styles;

  const { fetchCharacters, loading, error } = useCharacterContext();

  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  return (
    <div className="app">
      <Header />
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {!loading && !error && (
        <div className={grid}>
          <CharacterSidebar/>
          <SheetArea/>
        </div>
      )}
    </div>
  );
}
