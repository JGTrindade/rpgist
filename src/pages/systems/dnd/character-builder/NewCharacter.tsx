import styles from "./NewCharacter.module.css";
import { Character } from "../types/Character";

export default function NewCharacter({ name, role, level }: Character) {
  const {charWrapper} = styles;

  return (
    <article className={charWrapper}>
      <p>{name}</p>
      <p>
        {role}, {`${level}th`} level
      </p>
    </article>
  );
}
