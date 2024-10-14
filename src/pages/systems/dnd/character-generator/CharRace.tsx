import styles from "./CharRace.module.css";
// import CharInfoSelectionCardList from "./CharInfoSelectionCard/CharInfoSelectionCardList.tsx";
import {
  playerHandbookSpecies,
  monsterManualSpecies,
  monstersOfTheMultiverseSpecies,
  createCompleteSpecie,
} from "../../../../../src/assets/js/species.js";

export default function CharRace({ data, setData }) {
  const { wrapper, select } = styles;

  const species = [
    ...createCompleteSpecie(playerHandbookSpecies),
    ...createCompleteSpecie(monsterManualSpecies),
    ...createCompleteSpecie(monstersOfTheMultiverseSpecies),
  ];

  const handleOption = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setData(e.target.value);

  const capitalizeValue = (value: string): string => value.charAt(0).toUpperCase() + value.slice(1);

  return (
    <>
      <aside className="text">
        <h2 className="heading">Specie</h2>
        <p className="explanation">
          In this section you can choose your character’s specie. Currently, the
          supported species are those available in the Player’s Handbook, the
          Monster Manual and the Monsters of the Multiverse.
        </p>
      </aside>
      <label>
        Specie
        <div className={wrapper}>
          <select
            className={select}
            name="specie"
            value={data}
            onChange={handleOption}
          >
            {species.map((specie) => (
              <option key={specie.name} value={specie.name}>
                {capitalizeValue(specie.name)}
              </option>
            ))}
          </select>
        </div>
      </label>
      {/* <CharInfoSelectionCardList values={races} /> */}
    </>
  );
}
