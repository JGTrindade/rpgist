import styles from "./CharSheet.module.css";
import CharacterSheet from "../assets/sheet.svg";

const CharSheet = () => {
  const { charSheet } = styles;

  return (
    <div className={charSheet}>
      <img src={CharacterSheet} alt="D&D Character Sheet" />
    </div>
  );
};

export default CharSheet;
