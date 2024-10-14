import styles from "./BasicInfo.module.css";

import { useId } from 'react';
import { Alignment } from "../../../types/Alignment.ts";

export default function BasicInfo({data, setData}) {
  const { basicInfo, name, alignmentLevelBackground, input, label } = styles;

  const labelIdName = useId();
  const labelIdSurname = useId();

  const alignmentOptions: Alignment[] = [
    "N/A",
    "lawful good",
    "neutral good",
    "chaotic good",
    "lawful neutral",
    "neutral",
    "chaotic neutral",
    "lawful evil",
    "chaotic evil",
  ];

  const backgroundOptions = [
    "Acolyte",
    "Artisan",
    "Charlatan",
    "Criminal",
    "Entertainer",
    "Folk Hero",
    "Guild Artisan",
    "Hermit",
    "Noble",
    "Outlander",
    "Sage",
    "Sailor",
    "Soldier",
    "Wayfarer",
  ];

  const levelOptions: Array<Alignment | number | "Random"> = ["Random"];
  for (let i = 1; i <= 20; i++) {
    levelOptions.push(i);
  }

  const handleName = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
  });
  }

  return (
    <>
      <div className="text">
        <h2 className="heading">Basic Information</h2>
        <p className="explanation">
          The information in this section is the base for your character.
          <br />
          None of it is compulsory, but whatever you add will be used by your
          character.
        </p>
      </div>
      <div className={basicInfo}>
        <div className={name}>
          <input type="text" id={labelIdName} name="name" value={data.name} maxLength={17} onChange={handleName} className={input}/>
          <label className={label} htmlFor={labelIdName}>Name</label>
        </div>
        <div>
          <input type="text" id={labelIdSurname} name="surname" value={data.surname} maxLength={17} onChange={handleName} className={input}/>
          <label className={label} htmlFor={labelIdSurname}>Surname</label>
        </div>
        <div className={alignmentLevelBackground}>

          {/* Replace with the necessary components */}
          {/* <FormSelect label="Alignment" options={alignmentOptions} />
          <FormSelect label="Level" options={levelOptions} />
          <FormSelect label="Background" options={backgroundOptions} /> */}
        </div>
      </div>
    </>
  );
}
