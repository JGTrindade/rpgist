import styles from "./AddCharacter.module.css";

interface AddCharacterProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  style?: React.CSSProperties;
}

export default function AddCharacter({style, ...rest}: AddCharacterProps) {
  const { newChar } = styles;

  return <button className={newChar} style={style} {...rest}>New Character</button>;
}
