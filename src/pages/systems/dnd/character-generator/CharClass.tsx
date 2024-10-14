import styles from "./CharClass.module.css";

export default function CharClass({ data, setData }) {
  const { wrapper, select } = styles;

  const classes: string[] = [
    "barbarian",
    "bard",
    "cleric",
    "druid",
    "fighter",
    "monk",
    "paladin",
    "ranger",
    "rogue",
    "sorcerer",
    "warlock",
    "wizard",
  ];

  const handleOption = (e: React.ChangeEvent<HTMLSelectElement>) => setData(e.target.value);

  const capitalizeValue = (value: string): string => value.charAt(0).toUpperCase() + value.slice(1)

  return (
    <>
      <h2 className="heading">Class</h2>
      <label>
        Class
        <div className={wrapper}>
          <select
            className={select}
            name="charClass"
            value={data}
            onChange={handleOption}
          >
            {classes.map((charClass) => (
              <option key={charClass} value={charClass}>
                {capitalizeValue(charClass)}
              </option>
            ))}
          </select>
        </div>
      </label>
    </>
  );
}
